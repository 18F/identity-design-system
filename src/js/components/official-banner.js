import { openNativeDialog } from './open-native-dialog.js';

/** @type {Map<Element, () => void>} */
const cleanups = new Map();

export default {
  /** @param {ParentNode} root */
  on(root = document) {
    root.querySelectorAll('.official-banner__how[aria-controls]').forEach((trigger) => {
      if (cleanups.has(trigger)) return;
      const dialog = trigger.ownerDocument.getElementById(trigger.getAttribute('aria-controls') || '');
      if (!(dialog instanceof HTMLDialogElement)) return;
      const closeButton = dialog.querySelector('[data-close-modal]');
      const open = () => openNativeDialog(dialog);
      const close = () => dialog.close();
      const reset = () => dialog.classList.remove('is-open');
      trigger.addEventListener('click', open);
      closeButton?.addEventListener('click', close);
      dialog.addEventListener('close', reset);
      cleanups.set(trigger, () => {
        trigger.removeEventListener('click', open);
        closeButton?.removeEventListener('click', close);
        dialog.removeEventListener('close', reset);
      });
    });
  },
  off() {
    cleanups.forEach((cleanup) => cleanup());
    cleanups.clear();
  },
};
