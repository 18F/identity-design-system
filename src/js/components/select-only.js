const selector = '.usa-combo-box[data-select-only]';
/** @type {WeakMap<Element, () => void>} */
const cleanups = new WeakMap();
/** @type {WeakMap<HTMLElement, () => void>} */
const refreshOptions = new WeakMap();

/** @param {Element} group @param {typeof import('@uswds/uswds/js/usa-combo-box').default} comboBox */
function configure(group, comboBox) {
  if (!(group instanceof HTMLElement) || cleanups.has(group)) return;
  const select = group.querySelector('select');
  if (!select) return;
  const initialIndex = select.selectedIndex;
  const enhanced = group.dataset.enhanced;
  comboBox.enhanceComboBox(group);
  const { inputEl: input, clearInputBtnEl: clear, listEl, statusEl } = comboBox.getComboBoxContext(group);
  if (!enhanced) {
    const preferred = group.dataset.defaultValue && Array.from(select.options).find(option =>
      option.value === group.dataset.defaultValue && !option.matches(':disabled'));
    select.selectedIndex = preferred ? preferred.index : initialIndex;
  }
  group.dataset.disableFiltering = 'true';
  // USWDS moves these attributes to its editable input. A readonly input
  // cannot validate, and only the native select is submitted.
  if (input.required) {
    select.required = true;
    input.required = false;
    input.setAttribute('aria-required', 'true');
  }
  select.disabled = input.disabled;
  input.readOnly = true;
  input.removeAttribute('aria-autocomplete');
  clear.classList.add('usa-button', 'usa-button--secondary', 'usa-button--sm');
  clear.textContent = 'Remove';
  clear.removeAttribute('aria-label');

  const error = document.createElement('span');
  error.id = `${input.id}--validation`;
  error.className = 'usa-error-message';
  const clearError = () => {
    if (!error.isConnected) return;
    error.remove();
    input.removeAttribute('aria-invalid');
    const ids = (input.getAttribute('aria-describedby') || '').split(' ').filter(id => id !== error.id);
    if (ids.length) input.setAttribute('aria-describedby', ids.join(' '));
    else input.removeAttribute('aria-describedby');
  };
  const sync = () => {
    input.value = select.value ? select.selectedOptions[0].text : '';
    group.classList.toggle('usa-combo-box--pristine', Boolean(select.value));
    comboBox.hideList(group);
    clearError();
  };
  sync();
  const controller = new AbortController();
  const options = { signal: controller.signal };
  // USWDS rebuilds its popup from every option, including disabled optgroups.
  // Keep only choices the native field can actually submit.
  // Unfiltered USWDS rows follow the order of nonempty native options. Bind
  // once per generated row, before pruning: values and labels need not be unique.
  /** @type {WeakMap<Element, HTMLOptionElement>} */
  const sources = new WeakMap();
  const prune = () => {
    if (listEl.hidden) return;
    const rows = Array.from(listEl.querySelectorAll('li[data-value]'));
    const native = Array.from(select.options).filter(option => option.value);
    rows.forEach((row, index) => {
      if (!sources.has(row) && native[index]) sources.set(row, native[index]);
    });
    const enabled = rows.filter(row => {
      const source = sources.get(row);
      return source && select.contains(source) && !source.matches(':disabled');
    });
    const selected = enabled.find(row => sources.get(row)?.selected);
    const focused = enabled.find(row => row === document.activeElement) || selected || enabled[0];
    const lostFocus = rows.some(row => row === document.activeElement && !enabled.includes(row));
    for (const row of rows) if (!enabled.includes(row)) row.remove();
    enabled.forEach((row, index) => {
      row.setAttribute('aria-posinset', String(index + 1));
      row.setAttribute('aria-setsize', String(enabled.length));
    });
    enabled.forEach(row => {
      row.setAttribute('aria-selected', String(row === selected));
      row.classList.toggle('usa-combo-box__list-option--selected', row === selected);
      row.setAttribute('tabindex', row === focused ? '0' : '-1');
      row.classList.toggle('usa-combo-box__list-option--focused', row === focused);
    });
    input.setAttribute('aria-activedescendant', focused?.id || '');
    if (lostFocus) (focused instanceof HTMLElement ? focused : input).focus();
    statusEl.textContent = enabled.length ? `${enabled.length} available.` : 'No available options.';
    if (!enabled.length) {
      const empty = listEl.querySelector('li') || document.createElement('li');
      if (empty.getAttribute('aria-disabled') === 'true') return;
      empty.className = 'usa-combo-box__list-option--no-results';
      empty.setAttribute('role', 'option');
      empty.setAttribute('aria-disabled', 'true');
      empty.setAttribute('aria-selected', 'false');
      empty.textContent = statusEl.textContent;
      listEl.replaceChildren(empty);
    }
  };
  refreshOptions.set(input, prune);
  const observer = new MutationObserver(records => {
    if (!listEl.hidden && records.some(record => record.type === 'attributes')) comboBox.displayList(input);
    prune();
  });
  observer.observe(listEl, { childList: true });
  observer.observe(select, { attributes: true, subtree: true, attributeFilter: ['disabled'] });
  // Guard same-turn activation, before the mutation observer can run.
  const guard = (/** @type {Event} */ event) => {
    const row = event.target instanceof Element && event.target.closest('li[data-value]');
    if (!row) return;
    if (!sources.has(row)) prune();
    const source = sources.get(row);
    const canSelect = source && select.contains(source) && !source.matches(':disabled');
    if (canSelect && event instanceof KeyboardEvent && !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    event.stopPropagation();
    if (canSelect) {
      source.selected = true;
      sync();
      select.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: { value: source.value } }));
      input.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: { value: input.value } }));
    } else prune();
    input.focus();
  };
  listEl.addEventListener('click', guard, options);
  listEl.addEventListener('keydown', guard, options);
  // The upstream editable field resolves draft text by value on blur/Escape.
  // A readonly field has no draft; that reconciliation can replace its label
  // with the first same-valued option's label.
  input.addEventListener('change', () => {
    input.value = select.value ? select.selectedOptions[0].text : '';
  }, options);
  select.addEventListener('invalid', event => {
    event.preventDefault();
    if (!error.isConnected) {
      (group.closest('.usa-form-group') || group).after(error);
      input.setAttribute('aria-describedby', [input.getAttribute('aria-describedby'), error.id].filter(Boolean).join(' '));
    }
    error.textContent = select.validationMessage;
    input.setAttribute('aria-invalid', 'true');
    const firstInvalid = select.form && Array.from(select.form.elements)
      .find(el => el.matches('input:invalid, select:invalid, textarea:invalid'));
    if (!firstInvalid || firstInvalid === select) input.focus();
  }, options);
  select.addEventListener('change', clearError, options);
  select.form?.addEventListener('reset', event => {
    // Read the value after the browser restores defaultSelected options.
    setTimeout(() => {
      if (!event.defaultPrevented && !controller.signal.aborted) sync();
    }, 0);
  }, options);
  cleanups.set(group, () => {
    refreshOptions.delete(input);
    observer.disconnect();
    controller.abort();
    clearError();
    cleanups.delete(group);
  });
}

/** @param {HTMLElement | Document} root */
function groups(root) {
  return root instanceof HTMLElement && root.matches(selector) ? [root] : root.querySelectorAll(selector);
}

/** @param {typeof import('@uswds/uswds/js/usa-combo-box').default} comboBox */
export function withSelectOnly(comboBox) {
  /** @param {KeyboardEvent} event */
  function open(event) {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.matches(`${selector} > .usa-combo-box__input`)) return;
    if (![' ', 'Enter', 'ArrowDown'].includes(event.key) || input.disabled || input.getAttribute('aria-disabled') === 'true') return;
    event.preventDefault();
    event.stopPropagation();
    comboBox.displayList(input);
    refreshOptions.get(input)?.();
    const { listEl } = comboBox.getComboBoxContext(input);
    const option = listEl.querySelector('li[tabindex="0"]');
    if (option instanceof HTMLElement) option.focus();
  }

  /** @param {HTMLElement} root */
  function on(root = document.body) {
    groups(root).forEach(group => configure(group, comboBox));
    comboBox.on(root);
    root.addEventListener('keydown', open, true);
  }
  /** @param {HTMLElement} root */
  function off(root = document.body) {
    groups(root).forEach(group => cleanups.get(group)?.());
    root.removeEventListener('keydown', open, true);
    comboBox.off(root);
  }
  return {
    ...comboBox, on, off, add: on, remove: off,
    /** @param {HTMLElement | Document} root */
    init(root = document.body) {
      groups(root).forEach(group => configure(group, comboBox));
      comboBox.init(root);
    },
    /** @param {HTMLElement} element */
    enhanceComboBox(element) {
      const group = element.closest(selector);
      if (group) configure(group, comboBox);
      else comboBox.enhanceComboBox(element);
    },
    /** @param {HTMLElement} element */
    disable(element) {
      comboBox.disable(element);
      if (element.closest(selector)) comboBox.getComboBoxContext(element).selectEl.disabled = true;
    },
    /** @param {HTMLElement} element */
    enable(element) {
      comboBox.enable(element);
      if (element.closest(selector)) comboBox.getComboBoxContext(element).selectEl.disabled = false;
    },
  };
}
