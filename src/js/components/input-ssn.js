// NDS Social Security number input enhancement.
//
// Progressively enhances `.usa-input--ssn` blocks. The visible
// `.usa-input__control--ssn` field is display-only: it shows the number
// grouped as 123-45-6789 with every digit but the most recently typed one
// masked (•••-••-•••9), while the real digits live in the hidden
// `[data-nds-ssn-value]` input that the form submits. A
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
 * @returns {string}
 */
function display(digits, revealed, settled) {
  if (revealed || !digits) return group(digits);
  const masked = settled ? MASK.repeat(digits.length) : MASK.repeat(digits.length - 1) + digits.slice(-1);
  return group(masked);
}

/**
 * Rebuild the stored digits from what the user typed: masked characters map
 * ordinally onto the previously stored digits, new digits are taken as-is,
 * everything else (dashes, stray characters) is dropped.
 *
 * @param {string} typed
 * @param {string} previous
 * @returns {string}
 */
function reconcile(typed, previous) {
  let previousIndex = 0;
  let digits = '';
  Array.from(typed).forEach((char) => {
    if (char === MASK) {
      if (previousIndex < previous.length) digits += previous[previousIndex];
      previousIndex += 1;
    } else if (/\d/.test(char)) {
      digits += char;
      // A revealed digit occupies the same slot as a stored one.
      if (previousIndex < previous.length && previous[previousIndex] === char) previousIndex += 1;
    }
  });
  return digits.slice(0, MAX_DIGITS);
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
 */
function render(container) {
  const found = parts(container);
  if (!found) return;
  const { control, value, toggle } = found;
  const digits = value.value.replace(/\D/g, '');
  const revealed = container.hasAttribute(REVEALED);
  const settled = container.hasAttribute(SETTLED);

  value.value = digits.length === MAX_DIGITS ? group(digits) : digits;
  control.value = display(digits, revealed, settled);
  const caret = control.value.length;
  try {
    control.setSelectionRange(caret, caret);
  } catch {
    // Selection APIs are unavailable for some input types; caret stays put.
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
  found.value.value = reconcile(/** @type {HTMLInputElement} */ (control).value, previous);
  container.removeAttribute(SETTLED);
  render(container);
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
  if (!container) return;

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

export default {
  /**
   * @param {ParentNode} [root]
   */
  on(root) {
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
      if (!found.value.value && found.control.value) {
        found.value.value = found.control.value.replace(/\D/g, '');
      }
      container.setAttribute(ENHANCED, 'true');
      render(container);
    });
  },
  off() {
    document.removeEventListener('input', handleInput, true);
    document.removeEventListener('click', handleClick, true);
  },
};
