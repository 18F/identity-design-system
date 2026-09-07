// NDS phone-number input enhancement.
//
// Progressively enhances `.usa-phone-input` blocks: when a country radio in
// the `<details>` disclosure changes, the visible `+N` dial code on the
// `<summary>` toggle updates to the selected option's dial code and the
// disclosure closes. Without JavaScript the radio still submits the selected
// country; the toggle simply keeps its server-rendered dial code. Exposes the
// `.on()` / `.off()` lifecycle used by the design-system consumer.

const PHONE_INPUT = '.usa-phone-input';
const COUNTRY = '.usa-phone-input__country';
const CODE = '.usa-phone-input__country-code';
const RADIO = '.usa-phone-input__country-radio';
const OPTION = '.usa-phone-input__country-option';
const OPTION_DIAL = '.usa-phone-input__country-option-dial';
const ENHANCED = 'data-enhanced';

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
  if (dial && dial.textContent) code.textContent = dial.textContent.trim();
}

/**
 * @param {Event} event
 */
function handleChange(event) {
  const target = /** @type {Element | null} */ (event.target);
  const radio = target && target.closest ? target.closest(RADIO) : null;
  if (!radio) return;

  const container = /** @type {HTMLElement | null} */ (radio.closest(PHONE_INPUT));
  if (!container) return;

  render(container);
  const details = /** @type {HTMLDetailsElement | null} */ (radio.closest(COUNTRY));
  if (details) {
    details.removeAttribute('open');
    const toggle = /** @type {HTMLElement | null} */ (details.querySelector('summary'));
    if (toggle) toggle.focus();
  }
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
    document.addEventListener('change', handleChange, true);
    containers(root).forEach((container) => {
      container.setAttribute(ENHANCED, 'true');
      render(container);
    });
  },
  off() {
    document.removeEventListener('change', handleChange, true);
  },
};
