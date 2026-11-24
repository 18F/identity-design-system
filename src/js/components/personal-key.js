import { resetCopyFeedback, showCopyFeedback } from './clipboard-button.js';

/** @type {Map<Element, () => void>} */
const cleanups = new Map();

/** @param {string} value */
function download(value) {
  const url = URL.createObjectURL(new Blob([value], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'personal-key.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Print just this card, never the surrounding product page or another key.
/** @param {string} value @param {string} date */
function printKey(value, date) {
  const frame = document.createElement('iframe');
  frame.title = 'Print personal key';
  frame.tabIndex = -1;
  frame.setAttribute('aria-hidden', 'true');
  frame.style.cssText = 'position:fixed;inset-inline-start:-10000px;border:0;pointer-events:none';
  document.body.append(frame);
  const doc = frame.contentDocument;
  const view = frame.contentWindow;
  if (!doc || !view) {
    frame.remove();
    return;
  }
  doc.title = 'Personal key';
  const heading = doc.createElement('h1');
  heading.textContent = doc.title;
  const meta = doc.createElement('p');
  meta.textContent = date;
  const code = doc.createElement('code');
  code.textContent = value;
  doc.body.append(heading, meta, code);
  view.addEventListener('afterprint', () => frame.remove(), { once: true });
  view.print();
}

export default {
  /** @param {ParentNode} root */
  on(root = document) {
    for (const card of root.querySelectorAll('[data-personal-key]')) {
      const actions = card.querySelector('.personal-key-display__actions');
      const status = card.querySelector('[role="status"]');
      const code = card.querySelector('.personal-key-display__code code');
      if (!(actions instanceof HTMLElement) || !code || !status || cleanups.has(card)) continue;
      /** @param {MouseEvent} event */
      const activate = async event => {
        const button = event.target instanceof Element && event.target.closest('button[data-key-action]');
        if (!button || !code.textContent) return;
        const value = code.textContent.trim();
        status.textContent = '';
        switch (button.getAttribute('data-key-action')) {
          case 'copy':
            try {
              await navigator.clipboard.writeText(value);
              if (cleanups.has(card)) showCopyFeedback(card);
            } catch {
              if (!cleanups.has(card)) return;
              resetCopyFeedback(card);
              status.classList.remove('usa-sr-only');
              status.textContent = 'Copy unavailable. Select and copy the key manually.';
            }
            break;
          case 'download':
            download(value);
            break;
          case 'print':
            printKey(value, card.querySelector('.personal-key-display__meta')?.textContent || '');
            break;
        }
      };
      actions.addEventListener('click', activate);
      actions.hidden = false;
      cleanups.set(card, () => {
        actions.removeEventListener('click', activate);
        actions.hidden = true;
        resetCopyFeedback(card);
        status.textContent = '';
      });
    }
  },
  off() {
    for (const cleanup of cleanups.values()) cleanup();
    cleanups.clear();
  },
};
