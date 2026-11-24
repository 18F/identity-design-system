/** @type {WeakMap<Document, (immediate: boolean) => void>} */
const current = new WeakMap();

/** @param {Event} event */
function activate(event) {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest('[data-show-toast]');
  if (!button) return;
  const doc = button.ownerDocument;
  const toast = doc.getElementById(button.getAttribute('data-show-toast') || '');
  const status = doc.getElementById(toast?.dataset.toastStatus || '');
  const message = toast?.querySelector('.toast__text')?.textContent;
  if (!toast || !status || !message) return;

  current.get(doc)?.(true);
  const dialog = button.closest('dialog:modal');
  const host = dialog || doc.body;
  const fixed = getComputedStyle(toast).position === 'fixed';
  /** @type {Array<() => void>} */
  const restore = [];
  /** @param {HTMLElement} element */
  function moveToHost(element) {
    if (element.parentElement === host) return;
    if (dialog) {
      const slot = doc.createComment('toast origin');
      element.before(slot);
      restore.push(() => slot.replaceWith(element));
    }
    host.append(element);
  }
  if (status.closest('dialog') !== dialog) moveToHost(status);
  if (fixed || toast.closest('dialog') !== dialog) moveToHost(toast);
  // A transformed dialog would otherwise become the fixed toast's viewport.
  const layered = Boolean(dialog && fixed && typeof toast.showPopover === 'function');
  if (layered) {
    toast.popover = 'manual';
    toast.showPopover();
  }
  toast.getBoundingClientRect(); // Establish the closed position before transitioning.
  toast.dataset.open = 'true';
  // Separate clearing from updating so the same confirmation can be repeated.
  const announce = window.setTimeout(() => { status.textContent = message; }, 50);
  const timer = window.setTimeout(() => dismiss(false), 3000);
  const onClose = () => dismiss(true);
  /** @param {boolean} immediate */
  function dismiss(immediate) {
    if (!toast || !status || current.get(doc) !== dismiss) return;
    window.clearTimeout(announce);
    window.clearTimeout(timer);
    toast.removeAttribute('data-open');
    status.textContent = '';
    const animations = toast.getAnimations();
    if (immediate) animations.forEach(animation => animation.finish());
    else if (animations.length) {
      // Keep the top layer until the fade finishes, unless another toast replaces it.
      Promise.allSettled(animations.map(animation => animation.finished)).then(() => dismiss(true));
      return;
    }
    if (layered) {
      if (toast.matches(':popover-open')) toast.hidePopover();
      toast.removeAttribute('popover');
    }
    dialog?.removeEventListener('close', onClose);
    restore.forEach(putBack => putBack());
    current.delete(doc);
  }
  current.set(doc, dismiss);
  dialog?.addEventListener('close', onClose);
}

export default {
  /** @param {HTMLElement} [root] */
  on(root = document.body) {
    root.addEventListener('click', activate);
  },
  /** @param {HTMLElement} [root] */
  off(root = document.body) {
    root.removeEventListener('click', activate);
    current.get(root.ownerDocument)?.(true);
  },
};
