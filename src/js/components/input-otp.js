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
const EVENTS = ['beforeinput', 'paste', 'input', 'keydown', 'keyup', 'select', 'mousedown', 'click', 'focusin', 'focusout'];

/** @param {HTMLInputElement} input @param {number} index @param {number} capacity */
function selectSlot(input, index, capacity) {
  const start = Math.max(0, Math.min(index, input.value.length, capacity - 1));
  input.setSelectionRange(start, Math.min(start + 1, input.value.length));
}

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

  // The visible slots are the source of truth for capacity: never let the real
  // input hold more characters than there are slots, so a paste or fast typing
  // cannot submit an over-length code.
  if ((input.value || '').length > slots.length) {
    const caretBefore = input.selectionEnd;
    input.value = input.value.slice(0, slots.length);
    const caret = Math.min(caretBefore == null ? slots.length : caretBefore, slots.length);
    try {
      input.setSelectionRange(caret, caret);
    } catch {
      // Some input types disallow selection APIs; the value cap still applies.
    }
  }

  const value = input.value || '';
  const focused = container.ownerDocument.activeElement === input;
  const caret = Math.min(
    input.selectionStart ?? value.length,
    slots.length,
  );

  slots.forEach((slot, index) => {
    slot.textContent = value[index] || '';
    const isActive = focused && (index === Math.min(caret, slots.length - 1) ||
      (index >= caret && index < (input.selectionEnd ?? caret)));
    slot.classList.toggle(SLOT_ACTIVE, isActive);
    slot.classList.toggle(SLOT_CARET, isActive && index === value.length);
  });
}

/**
 * @param {Event} event
 */
function handleEvent(event) {
  const target = /** @type {Element | null} */ (event.target);
  const input = target && target.closest ? target.closest(INPUT) : null;
  if (!(input instanceof HTMLInputElement)) return;
  const container = /** @type {HTMLElement | null} */ (input.closest(OTP));
  if (!container) return;
  if (event.type === 'beforeinput' || event.type === 'paste') {
    const text = event instanceof ClipboardEvent ? event.clipboardData?.getData('text/plain') :
      event instanceof InputEvent && !event.isComposing ? event.data : null;
    if (input.pattern === '[0-9]*' && text && /[^0-9]/.test(text)) {
      event.preventDefault();
    } else if (event.type === 'paste' && !event.defaultPrevented && !input.readOnly &&
        !input.disabled && text && text.length === container.querySelectorAll(SLOT).length) {
      // Let native paste replace the complete value, preserving input events and undo.
      input.select();
    }
    return;
  }
  // In legacy the real field is visible; leave its native text selection alone.
  if (getComputedStyle(input).position === 'absolute' && input.selectionStart !== null) {
    const slots = container.querySelectorAll(SLOT);
    if (!slots.length) return;
    const tap = event.type === 'click' && event instanceof PointerEvent && event.pointerType === 'touch';
    if ((event.type === 'mousedown' || tap) && event instanceof MouseEvent) {
      if (event.button !== 0 || event.shiftKey || (!tap && event.detail > 1) || input.disabled) return;
      // The transparent field's glyph positions don't line up with the visible slots.
      let nearest = 0;
      let distance = Infinity;
      slots.forEach((slot, index) => {
        const r = slot.getBoundingClientRect();
        const delta = Math.abs(event.clientX - (r.left + r.width / 2));
        if (delta < distance) { nearest = index; distance = delta; }
      });
      event.preventDefault();
      selectSlot(input, nearest, slots.length);
      input.focus();
    } else if (event.type === 'keydown' && event instanceof KeyboardEvent) {
      if (event.shiftKey || event.ctrlKey || event.metaKey || event.altKey || event.isComposing) return;
      const start = input.selectionStart;
      const end = input.selectionEnd ?? start;
      let next;
      switch (event.key) {
        case 'ArrowLeft': next = end - start > 1 ? start : start - 1; break;
        case 'ArrowRight': next = start === end ? end + 1 : end; break;
        case 'Home': next = 0; break;
        case 'End': next = input.value.length; break;
        default: return;
      }
      event.preventDefault();
      selectSlot(input, next, slots.length);
    } else if (event.type === 'input' && !(event instanceof InputEvent && event.isComposing)) {
      const back = event instanceof InputEvent && event.inputType === 'deleteContentBackward'
        && input.selectionStart < input.value.length;
      selectSlot(input, input.selectionStart - (back ? 1 : 0), slots.length);
    } else if (event.type === 'focusin' && input.selectionStart === input.selectionEnd) {
      selectSlot(input, input.value.length, slots.length);
    }
  }
  render(container);
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

/** @param {Event} event */
function handleReset(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  // A reset button's default action runs after reset listeners and does not emit input.
  setTimeout(() => {
    if (event.defaultPrevented) return;
    for (const control of form.elements) {
      if (!(control instanceof HTMLInputElement) || !control.matches(INPUT)) continue;
      const container = /** @type {HTMLElement | null} */ (control.closest(OTP));
      if (container) render(container);
    }
  }, 0);
}

export default {
  /**
   * @param {ParentNode} [root]
   */
  on(root) {
    EVENTS.forEach((type) => document.addEventListener(type, handleEvent, true));
    document.addEventListener('reset', handleReset, true);
    containers(root).forEach((container) => {
      const wrapper = container.closest('lg-nds-input-otp') || container;
      render(container);
      wrapper.setAttribute(ENHANCED, 'true');
    });
  },
  off() {
    EVENTS.forEach((type) => document.removeEventListener(type, handleEvent, true));
    document.removeEventListener('reset', handleReset, true);
    containers().forEach(container => (container.closest('lg-nds-input-otp') || container).removeAttribute(ENHANCED));
  },
};
