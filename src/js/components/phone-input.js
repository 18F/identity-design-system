// NDS phone-number input enhancement.
//
// The native select, when supplied, owns the submitted country. The disclosure
// mirrors it for enhanced interaction; older radio-only markup is also supported.

const PHONE_INPUT = '.usa-phone-input';
const COUNTRY = '.usa-phone-input__country';
const CODE = '.usa-phone-input__country-code';
const RADIO = '.usa-phone-input__country-radio';
const OPTION = '.usa-phone-input__country-option';
const OPTION_DIAL = '.usa-phone-input__country-option-dial';
const ENHANCED = 'data-enhanced';
const NUMBER = 'input.usa-phone-input__input[type="tel"]';
const NUMBER_EVENTS = ['beforeinput', 'input', 'compositionend'];
const SELECT = 'select.usa-phone-input__country-native';
/** @type {Map<HTMLElement, () => void>} */
const cleanups = new Map();
/** @type {Map<HTMLElement, () => void>} */
const protections = new Map();
/** @type {MutationObserver | undefined} */
let fieldsets;

/** @param {string} digits */
function groupUsNumber(digits) {
  if (!digits) return '';
  let result = `(${digits.slice(0, 3)}`;
  if (digits.length > 3) result += `) ${digits.slice(3, 6)}`;
  if (digits.length > 6) result += ` - ${digits.slice(6)}`;
  return result;
}

/** @param {HTMLInputElement} input */
function usesUsFormat(input) {
  const container = input.closest(PHONE_INPUT);
  const select = container?.querySelector(SELECT);
  return (select instanceof HTMLSelectElement ? select.value :
    container?.querySelector(`${RADIO}:checked`)?.getAttribute('value')) === 'US';
}

/** @param {HTMLInputElement} input */
function formatNumber(input) {
  const raw = input.value;
  // Don't truncate international pastes, extensions, or numbers outside this mask.
  if (input.disabled || input.readOnly || !usesUsFormat(input) || !/^[\d() -]*$/.test(raw)) return;
  const digits = raw.replace(/\D/g, '');
  if (digits.length > 10) return;
  const formatted = groupUsNumber(digits);
  if (formatted === raw) return;
  // Anchor the selection to digits rather than offsets in the changing punctuation.
  /** @param {number | null} offset */
  const offsetInResult = offset => groupUsNumber(raw.slice(0, offset ?? raw.length).replace(/\D/g, '')).length;
  const start = offsetInResult(input.selectionStart);
  const end = offsetInResult(input.selectionEnd);
  const direction = input.selectionDirection;
  input.value = formatted;
  input.setSelectionRange(start, end, direction ?? 'none');
}

/** @param {Event} event */
function handleNumber(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.matches(NUMBER) ||
      !input.closest(PHONE_INPUT) || (event instanceof InputEvent && event.isComposing)) return;
  if (event.type !== 'beforeinput') {
    formatNumber(input);
    return;
  }
  if (!(event instanceof InputEvent) || !usesUsFormat(input) || input.matches(':disabled, [readonly]')) return;
  if (event.inputType === 'insertFromPaste' && event.cancelable && event.data != null) {
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? start;
    const prefix = input.value.slice(0, start) + event.data;
    const raw = prefix + input.value.slice(end);
    const digits = raw.replace(/\D/g, '');
    if (/^[\d() -]*$/.test(raw) && digits.length <= 10) {
      const formatted = groupUsNumber(digits);
      if (formatted !== raw) {
        // insertText performs an undoable browser edit; assigning .value after paste does not.
        input.select();
        if (input.ownerDocument.execCommand('insertText', false, formatted)) {
          event.preventDefault();
          const caret = groupUsNumber(prefix.replace(/\D/g, '')).length;
          input.setSelectionRange(caret, caret);
        } else {
          input.setSelectionRange(start, end);
        }
      }
    }
    return;
  }
  if (input.selectionStart !== input.selectionEnd || input.selectionStart === null) return;
  const caret = input.selectionStart;
  const value = input.value;
  const digits = value.replace(/\D/g, '');
  if (digits.length > 10 || value !== groupUsNumber(digits)) return;
  // Include the adjacent digit in native deletion so a regenerated separator can't trap the caret.
  if (event.inputType === 'deleteContentBackward') {
    const span = value.slice(0, caret).match(/\d\D+$/);
    if (span) input.setSelectionRange(caret - span[0].length, caret);
  } else if (event.inputType === 'deleteContentForward') {
    const span = value.slice(caret).match(/^\D+\d/);
    if (span) input.setSelectionRange(caret, caret + span[0].length);
  }
}

/**
 * Reflect the checked country radio's dial code onto the toggle.
 *
 * @param {HTMLElement} container A `.usa-phone-input` element.
 */
function render(container) {
  const code = /** @type {HTMLElement | null} */ (container.querySelector(CODE));
  const checked = /** @type {HTMLInputElement | null} */ (
    container.querySelector(`${RADIO}:checked`)
  );
  if (!code || !checked) return;

  const option = checked.closest(OPTION);
  const dial = option ? option.querySelector(OPTION_DIAL) : null;
  if (dial && dial.textContent) code.textContent = dial.textContent.trim().replace(/^\(|\)$/g, '');
  container.querySelector('summary')?.setAttribute('aria-label', `Country calling code: ${option?.textContent?.trim().replace(/\s+/g, ' ')}`);
}

/**
 * @param {Event} event
 */
function handleReset(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  setTimeout(() => {
    if (event.defaultPrevented) return;
    for (const container of cleanups.keys()) {
      const number = container.querySelector(NUMBER);
      if (number instanceof HTMLInputElement && number.form === form) {
        syncCountry(container);
        formatNumber(number);
      }
    }
  }, 0);
}

/** @param {HTMLElement} container */
function syncCountry(container) {
  const select = container.querySelector(SELECT);
  if (select instanceof HTMLSelectElement) {
    container.querySelectorAll(RADIO).forEach(radio => {
      if (radio instanceof HTMLInputElement) radio.checked = radio.value === select.value;
    });
  }
  render(container);
}

// The enhanced select is disabled for native serialization. Contribute it only
// when the number is successful now, not when a mutation observer last ran.
/** @param {Event} event */
function serializeCountries(event) {
  if (!(event instanceof FormDataEvent && event.target instanceof HTMLFormElement)) return;
  for (const control of event.target.elements) {
    if (!(control instanceof HTMLSelectElement && control.matches(SELECT) && control.name)) continue;
    const container = /** @type {HTMLElement | null} */ (control.closest(PHONE_INPUT));
    if (!container || !cleanups.has(container)) continue;
    const input = container.querySelector(NUMBER);
    if (input instanceof HTMLInputElement && input.form === event.target && !input.matches(':disabled')) {
      event.formData.append(control.name, control.value);
    }
  }
}

/** @param {HTMLElement} container */
function enhance(container) {
  if (cleanups.has(container)) return;
  const input = container.querySelector(NUMBER);
  const details = container.querySelector(COUNTRY);
  const toggle = details?.querySelector('summary');
  const select = container.querySelector(SELECT);
  if (!(input instanceof HTMLInputElement && details instanceof HTMLDetailsElement && toggle)) return;
  const locked = () => input.matches(':disabled, [readonly]');
  const listeners = new AbortController();
  const options = { signal: listeners.signal };
  const protect = () => {
    toggle.tabIndex = input.matches(':disabled') ? -1 : 0;
    toggle.setAttribute('aria-disabled', String(locked()));
    if (locked()) details.open = false;
    if (!select) details.querySelectorAll(RADIO).forEach(radio => {
      if (radio instanceof HTMLInputElement) radio.disabled = input.disabled;
    });
  };
  const observer = new MutationObserver(protect);
  observer.observe(input, { attributes: true, attributeFilter: ['readonly', 'disabled'] });
  protections.set(container, protect);
  const updateNumber = () => {
    if (locked()) return;
    const digits = input.value.replace(/\D/g, '');
    if (usesUsFormat(input)) formatNumber(input);
    else if (digits.length <= 10 && input.value === groupUsNumber(digits)) input.value = digits;
  };
  if (select instanceof HTMLSelectElement) {
    const updateCountry = () => { syncCountry(container); updateNumber(); };
    select.addEventListener('input', updateCountry, options);
    select.addEventListener('change', updateCountry, options);
  }
  details.addEventListener('change', event => {
    const radio = event.target;
    if (!(radio instanceof HTMLInputElement && radio.matches(RADIO))) return;
    if (locked()) { syncCountry(container); return; }
    if (select instanceof HTMLSelectElement) {
      select.value = radio.value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      render(container);
      updateNumber();
    }
  }, options);
  const close = () => { details.open = false; toggle.focus(); };
  details.addEventListener('mousedown', event => {
    // Keep focus inside until mouseup lets the label activate its radio.
    const target = event.target;
    if (event.button === 0 && target instanceof Element && !target.matches(RADIO) && target.closest(OPTION)) {
      event.preventDefault();
    }
  }, options);
  details.addEventListener('keydown', event => {
    if (!details.open) return;
    if (event.key === 'Escape' || (event.target instanceof Element && event.target.matches(RADIO) &&
        (event.key === 'Enter' || event.key === ' '))) {
      event.preventDefault();
      close();
    }
  }, options);
  details.addEventListener('click', event => {
    if (locked()) { event.preventDefault(); return; }
    // Native radio arrows synthesize clicks too. Only pointer activation dismisses.
    if (event.detail && event.target instanceof Element && event.target.closest(OPTION)) {
      setTimeout(() => { if (details.open) close(); }, 0);
    }
  }, options);
  details.addEventListener('focusout', event => {
    if (event.relatedTarget) {
      if (!details.contains(/** @type {Node} */ (event.relatedTarget))) details.open = false;
    } else {
      // Clicking a label briefly blurs the disclosure before the radio receives focus.
      setTimeout(() => { if (!details.contains(document.activeElement)) details.open = false; }, 0);
    }
  }, options);
  protect();
  syncCountry(container);
  formatNumber(input);
  if (select instanceof HTMLSelectElement) {
    select.disabled = true;
    select.hidden = true;
    details.hidden = false;
  }
  container.setAttribute(ENHANCED, 'true');
  cleanups.set(container, () => {
    observer.disconnect();
    protections.delete(container);
    listeners.abort();
    details.open = false;
    if (select instanceof HTMLSelectElement) {
      details.hidden = true;
      select.hidden = false;
      select.disabled = input.disabled;
      select.inert = input.readOnly;
    }
    container.removeAttribute(ENHANCED);
  });
}
/**
 * @param {ParentNode} [root]
 * @returns {HTMLElement[]}
 */
function containers(root) {
  const scope = /** @type {Element} */ (root || document.body);
  if (scope.matches && scope.matches(PHONE_INPUT)) return [/** @type {HTMLElement} */ (scope)];
  return /** @type {HTMLElement[]} */ (
    Array.from((scope.querySelectorAll && scope.querySelectorAll(PHONE_INPUT)) || [])
  );
}

export default {
  /**
   * @param {ParentNode} [root]
   */
  on(root) {
    document.addEventListener('formdata', serializeCountries, true);
    fieldsets ??= new MutationObserver(records => {
      for (const { target } of records) {
        if (target instanceof HTMLFieldSetElement) {
          protections.forEach((protect, container) => { if (target.contains(container)) protect(); });
        }
      }
    });
    fieldsets.observe(document, { subtree: true, attributes: true, attributeFilter: ['disabled'] });
    document.addEventListener('reset', handleReset, true);
    NUMBER_EVENTS.forEach(type => document.addEventListener(type, handleNumber, true));
    containers(root).forEach(enhance);
  },
  off() {
    document.removeEventListener('formdata', serializeCountries, true);
    fieldsets?.disconnect();
    document.removeEventListener('reset', handleReset, true);
    cleanups.forEach(cleanup => cleanup());
    cleanups.clear();
    NUMBER_EVENTS.forEach(type => document.removeEventListener(type, handleNumber, true));
  },
};
