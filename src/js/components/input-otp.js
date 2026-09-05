// NDS one-time-code (OTP) input enhancement.
//
// Progressively enhances `.input-otp` blocks: the visible per-character slots
// (`.input-otp__slot`, `aria-hidden`) mirror the real `.input-otp__input`,
// which remains the single source of truth for value, selection, and events.
// Exposes the `.on()` / `.off()` lifecycle used by the design-system consumer
// (mirroring the USWDS behavior interface) without depending on the internal
// USWDS behavior util (whose deep path is not exported for bundlers).

const OTP = '.input-otp';
const INPUT = '.input-otp__input';
const SLOT = '.input-otp__slot';
const SLOT_ACTIVE = 'input-otp__slot--active';
const SLOT_CARET = 'input-otp__slot--caret';
const ENHANCED = 'data-enhanced';
const EVENTS = ['input', 'keyup', 'click', 'focusin', 'focusout'];

/**
 * Reflect a `.input-otp` container's real input value onto its visible slots
 * and keep the active/caret slot in sync with the caret position.
 *
 * @param {HTMLElement} container A `.input-otp` element.
 */
function render(container) {
  const input = /** @type {HTMLInputElement | null} */ (container.querySelector(INPUT));
  const slots = /** @type {HTMLElement[]} */ (Array.from(container.querySelectorAll(SLOT)));
  if (!input || !slots.length) return;

  const value = input.value || '';
  const focused = container.ownerDocument.activeElement === input;
  const caret = Math.min(
    input.selectionEnd == null ? value.length : input.selectionEnd,
    slots.length,
  );

  slots.forEach((slot, index) => {
    slot.textContent = value[index] || '';
    const isActive =
      focused && (index === caret || (caret === slots.length && index === slots.length - 1));
    slot.classList.toggle(SLOT_ACTIVE, isActive);
    slot.classList.toggle(SLOT_CARET, isActive && value.length < slots.length && index === caret);
  });
}

/**
 * @param {Event} event
 */
function handleEvent(event) {
  const target = /** @type {Element | null} */ (event.target);
  const input = target && target.closest ? target.closest(INPUT) : null;
  if (!input) return;
  const container = /** @type {HTMLElement | null} */ (input.closest(OTP));
  if (container) render(container);
}

/**
 * @param {ParentNode} [root]
 * @returns {HTMLElement[]}
 */
function containers(root) {
  const scope = /** @type {Element} */ (root || document.body);
  if (scope.matches && scope.matches(OTP)) return [/** @type {HTMLElement} */ (scope)];
  return /** @type {HTMLElement[]} */ (
    Array.from((scope.querySelectorAll && scope.querySelectorAll(OTP)) || [])
  );
}

export default {
  /**
   * @param {ParentNode} [root]
   */
  on(root) {
    EVENTS.forEach((type) => document.addEventListener(type, handleEvent, true));
    containers(root).forEach((container) => {
      const wrapper = container.closest('lg-nds-input-otp') || container;
      wrapper.setAttribute(ENHANCED, 'true');
      render(container);
    });
  },
  off() {
    EVENTS.forEach((type) => document.removeEventListener(type, handleEvent, true));
  },
};
