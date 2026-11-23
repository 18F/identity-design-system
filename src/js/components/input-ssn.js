// NDS Social Security number input enhancement.
//
// Progressively enhances `.usa-input--ssn` blocks. The visible
// `.usa-input__control--ssn` field is display-only: it shows the number
// grouped as 123-45-6789 with every digit but the most recently typed one
// masked (•••-••-•••9), while the real digits live in the hidden
// `[data-nds-ssn-value]` input and are added to the form data on submission. A
// `[data-nds-ssn-toggle]` button reveals/re-masks the full number. Without
// JavaScript the visible field carries the name and submits plain text.
// Exposes the `.on()` / `.off()` lifecycle used by the design-system consumer.

const SSN = '.usa-input--ssn';
const CONTROL = '.usa-input__control--ssn';
const VALUE = '[data-nds-ssn-value]';
const TOGGLE = '[data-nds-ssn-toggle]';
const ICON_SHOW = '[data-nds-password-icon-show]';
const ICON_HIDE = '[data-nds-password-icon-hide]';
const ENHANCED = 'data-enhanced';
const REVEALED = 'data-nds-ssn-revealed';
const SETTLED = 'data-nds-ssn-settled';
const MASK = '•';
const MAX_DIGITS = 9;
const GROUPS = [3, 2, 4];
const SETTLE_DELAY_MS = 5000;

/** @type {WeakMap<HTMLElement, ReturnType<typeof setTimeout>>} */
const settleTimers = new WeakMap();
/** @type {WeakMap<HTMLElement, number>} */
const lastEdited = new WeakMap();
/** @type {Map<HTMLElement, MutationObserver>} */
const observers = new Map();
/** @type {AbortController | undefined} */
let formListeners;
const handledFormEvents = new WeakSet();

/**
 * Group as 123-45-6789. A dash is appended as soon as a group fills so the
 * separator appears after the third (and fifth) digit, not once the next
 * digit arrives.
 *
 * @param {string} digits
 * @returns {string}
 */
function group(digits) {
  /** @type {string[]} */
  const parts = [];
  let index = 0;
  GROUPS.forEach((size, groupIndex) => {
    if (index >= digits.length) return;
    const part = digits.slice(index, index + size);
    index += size;
    const filled = part.length === size && groupIndex < GROUPS.length - 1;
    parts.push(filled && index >= digits.length ? `${part}-` : part);
  });
  return parts.join('-');
}

/**
 * @param {string} digits
 * @param {boolean} revealed
 * @param {boolean} settled
 * @param {number} [index]
 * @returns {string}
 */
function display(digits, revealed, settled, index = digits.length - 1) {
  if (revealed || !digits) return group(digits);
  const masked = Array.from(digits, (digit, i) => (!settled && i === index ? digit : MASK)).join(
    '',
  );
  return group(masked);
}

/** @param {string} text */
function slots(text) {
  return text.replace(/[^0-9•]/g, '').length;
}

/**
 * @param {HTMLElement} container
 * @returns {{control: HTMLInputElement, value: HTMLInputElement, toggle: HTMLButtonElement | null} | null}
 */
function parts(container) {
  const control = /** @type {HTMLInputElement | null} */ (container.querySelector(CONTROL));
  const value = /** @type {HTMLInputElement | null} */ (container.querySelector(VALUE));
  const toggle = /** @type {HTMLButtonElement | null} */ (container.querySelector(TOGGLE));
  if (!control || !value) return null;
  return { control, value, toggle };
}

/**
 * @param {HTMLElement} container
 * @param {number} [digitCaret]
 */
function render(container, digitCaret) {
  const found = parts(container);
  if (!found) return;
  const { control, value, toggle } = found;
  const digits = value.value.replace(/\D/g, '');
  const revealed = container.hasAttribute(REVEALED);
  const settled = container.hasAttribute(SETTLED);

  value.value = digits.length === MAX_DIGITS ? group(digits) : digits;
  const start = control.selectionStart;
  const end = control.selectionEnd;
  control.value = display(digits, revealed, settled, lastEdited.get(container));
  if (start !== null && end !== null) {
    if (digitCaret === undefined) {
      control.setSelectionRange(start, end);
    } else {
      const offset = group(digits.slice(0, digitCaret)).length;
      control.setSelectionRange(offset, offset);
    }
  }

  if (digits.length > 0 && digits.length < MAX_DIGITS) {
    control.setCustomValidity(control.getAttribute('data-nds-ssn-incomplete') || 'Incomplete');
  } else {
    control.setCustomValidity('');
  }

  if (toggle) {
    toggle.setAttribute('aria-pressed', String(revealed));
    const label = revealed ? toggle.dataset.labelHide : toggle.dataset.labelShow;
    if (label) toggle.setAttribute('aria-label', label);
    const show = /** @type {HTMLElement | null} */ (toggle.querySelector(ICON_SHOW));
    const hide = /** @type {HTMLElement | null} */ (toggle.querySelector(ICON_HIDE));
    if (show) show.hidden = revealed;
    if (hide) hide.hidden = !revealed;
  }
}

/**
 * @param {Event} event
 */
function handleInput(event) {
  const target = /** @type {Element | null} */ (event.target);
  const control = target && target.closest ? target.closest(CONTROL) : null;
  if (!control) return;
  const container = /** @type {HTMLElement | null} */ (control.closest(SSN));
  const found = container && parts(container);
  if (!container || !found) return;

  const previous = found.value.value.replace(/\D/g, '');
  const typed = found.control.value;
  const caret = found.control.selectionStart ?? typed.length;
  const shown = display(
    previous,
    container.hasAttribute(REVEALED),
    container.hasAttribute(SETTLED),
    lastEdited.get(container),
  );
  // Keep unchanged digits on both sides of the edit. Identical mask glyphs
  // cannot identify which digit changed; the browser's caret separates the sides.
  let right = 0;
  while (
    right < typed.length - caret &&
    right < shown.length &&
    typed[typed.length - 1 - right] === shown[shown.length - 1 - right]
  )
    right++;
  let left = 0;
  while (left < caret && left < shown.length - right && shown[left] === typed[left]) left++;
  let from = slots(shown.slice(0, left));
  let to = slots(shown.slice(0, shown.length - right));
  if (
    from === to &&
    shown.slice(left, shown.length - right) === '-' &&
    typed.length < shown.length
  ) {
    if (/** @type {InputEvent} */ (event).inputType === 'deleteContentForward') to++;
    else from--;
  }
  const inserted = typed
    .slice(left, typed.length - right)
    .replace(/\D/g, '')
    .slice(0, MAX_DIGITS - previous.length + to - from);
  found.value.value = previous.slice(0, from) + inserted + previous.slice(to);
  const next = from + inserted.length;
  lastEdited.set(container, inserted.length ? next - 1 : -1);
  container.removeAttribute(SETTLED);
  render(container, next);
  scheduleSettle(container);
}

/**
 * Hide the last visible digit once typing pauses.
 *
 * @param {HTMLElement} container
 */
function scheduleSettle(container) {
  const pending = settleTimers.get(container);
  if (pending) clearTimeout(pending);
  settleTimers.set(
    container,
    setTimeout(() => {
      container.setAttribute(SETTLED, 'true');
      render(container);
    }, SETTLE_DELAY_MS),
  );
}

/**
 * @param {Event} event
 */
function handleClick(event) {
  const target = /** @type {Element | null} */ (event.target);
  const toggle = target && target.closest ? target.closest(TOGGLE) : null;
  if (!toggle) return;
  const container = /** @type {HTMLElement | null} */ (toggle.closest(SSN));
  if (!container || parts(container)?.control.matches(':disabled')) return;

  if (container.hasAttribute(REVEALED)) {
    container.removeAttribute(REVEALED);
  } else {
    container.setAttribute(REVEALED, 'true');
  }
  render(container);
  const found = parts(container);
  if (found) found.control.focus();
}

/**
 * @param {ParentNode} [root]
 * @returns {HTMLElement[]}
 */
function containers(root) {
  const scope = /** @type {Element} */ (root || document.body);
  if (scope.matches && scope.matches(SSN)) return [/** @type {HTMLElement} */ (scope)];
  return /** @type {HTMLElement[]} */ (
    Array.from((scope.querySelectorAll && scope.querySelectorAll(SSN)) || [])
  );
}

/** @param {Event} event */
function handleFormEvent(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || handledFormEvents.has(event)) return;
  handledFormEvents.add(event);
  Array.from(form.elements).forEach((el) => {
    if (!el.matches(CONTROL)) return;
    const container = /** @type {HTMLElement | null} */ (el.closest(SSN));
    if (!container || !observers.has(container)) return;
    const found = parts(container);
    if (!found) return;
    if (event instanceof FormDataEvent) {
      if (found.value.name && !el.matches(':disabled')) {
        event.formData.append(found.value.name, found.value.value);
      }
    } else {
      // The browser restores default values after an uncanceled reset event.
      queueMicrotask(() => {
        if (event.defaultPrevented || !observers.has(container)) return;
        clearTimeout(settleTimers.get(container));
        container.removeAttribute(REVEALED);
        container.setAttribute(SETTLED, 'true');
        render(container);
      });
    }
  });
}

export default {
  /**
   * @param {ParentNode} [root]
   */
  on(root) {
    formListeners ??= new AbortController();
    const options = { signal: formListeners.signal };
    document.addEventListener('formdata', handleFormEvent, options);
    document.addEventListener('reset', handleFormEvent, options);
    document.addEventListener('input', handleInput, true);
    document.addEventListener('click', handleClick, true);
    containers(root).forEach((container) => {
      const found = parts(container);
      if (!found) return;
      // Hand the submitted name to the hidden value input so the masked
      // display never reaches the server.
      if (found.control.name && !found.value.name) {
        found.value.name = found.control.name;
        found.control.removeAttribute('name');
      }
      if (!container.hasAttribute(ENHANCED)) {
        // Unlike type=hidden, a text input has separate live and reset values.
        const current = found.value.value || found.control.value.replace(/\D/g, '');
        const initial = (found.control.defaultValue || found.value.defaultValue).replace(/\D/g, '');
        found.value.hidden = true;
        found.value.type = 'text';
        found.value.disabled = true;
        found.value.defaultValue = initial.length === MAX_DIGITS ? group(initial) : initial;
        found.value.value = current;
        found.control.defaultValue = display(initial, false, true);
      }
      found.control.form?.addEventListener('formdata', handleFormEvent, options);
      found.control.form?.addEventListener('reset', handleFormEvent, options);
      const syncDisabled = () => {
        if (found.toggle) found.toggle.disabled = found.control.disabled;
        if (found.control.disabled) {
          container.removeAttribute(REVEALED);
          container.setAttribute(SETTLED, 'true');
          render(container);
        }
      };
      observers.get(container)?.disconnect();
      const observer = new MutationObserver(syncDisabled);
      observer.observe(found.control, { attributes: true, attributeFilter: ['disabled'] });
      observers.set(container, observer);
      syncDisabled();
      container.setAttribute(ENHANCED, 'true');
      render(container);
    });
  },
  off() {
    formListeners?.abort();
    formListeners = undefined;
    observers.forEach((observer, container) => {
      observer.disconnect();
      clearTimeout(settleTimers.get(container));
      const found = parts(container);
      if (!found) return;
      // Return submission to the native control before removing our listeners.
      found.control.defaultValue = found.value.defaultValue;
      found.control.value = found.value.value;
      if (found.value.name) found.control.name = found.value.name;
      found.control.setCustomValidity('');
      found.value.removeAttribute('name');
      found.value.type = 'hidden';
      found.value.value = '';
      found.value.disabled = false;
      container.removeAttribute(ENHANCED);
      container.removeAttribute(REVEALED);
      container.removeAttribute(SETTLED);
      lastEdited.delete(container);
    });
    observers.clear();
    document.removeEventListener('input', handleInput, true);
    document.removeEventListener('click', handleClick, true);
  },
};
