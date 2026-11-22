import { openNativeDialog } from './open-native-dialog.js';

/** @type {Set<ParentNode>} */
const roots = new Set();

/** @param {Event} event */
function handleClick(event) {
  if (!(event.target instanceof Element)) return;
  const opener = event.target.closest('[data-open-modal]');
  if (opener) {
    const dialog = opener.ownerDocument.getElementById(opener.getAttribute('data-open-modal') || '');
    if (!(dialog instanceof HTMLDialogElement) || !dialog.matches('.modal') || dialog.open) return;
    openNativeDialog(dialog);
    dialog.addEventListener('close', () => dialog.classList.remove('is-open'), { once: true });
    return;
  }

  const dialog = event.target.closest('[data-close-modal]')?.closest('dialog.modal[open]');
  if (dialog instanceof HTMLDialogElement) dialog.close();
}

export default {
  /** @param {ParentNode} root */
  on(root = document) {
    root.addEventListener('click', handleClick);
    roots.add(root);
  },
  off() {
    roots.forEach((root) => root.removeEventListener('click', handleClick));
    roots.clear();
  },
};
