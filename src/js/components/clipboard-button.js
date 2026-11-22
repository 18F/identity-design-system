// Opt-in fallback for consumers that do not provide the app's custom element.
/** @type {Set<Element>} */
const controls = new Set();
/** @type {Map<Element, number>} */
const resets = new Map();

/** @param {Element} control */
function reset(control) {
  window.clearTimeout(resets.get(control));
  resets.delete(control);
  control.removeAttribute('data-copied');
  const confirmation = control.querySelector('[data-copy-confirmation]');
  confirmation?.setAttribute('hidden', '');
  confirmation?.previousElementSibling?.removeAttribute('hidden');
  const status = control.querySelector('[data-copy-status]');
  if (status) status.textContent = '';
}

/** @param {Event} event */
async function copy(event) {
  const control = /** @type {Element} */ (event.currentTarget);
  const button = event.target instanceof Element && event.target.closest('button');
  if (!button || button.matches(':disabled, [aria-disabled="true"]')) return;
  const value = control.getAttribute('clipboard-text');
  if (!value || customElements.get('lg-clipboard-button')) return;
  const status = control.querySelector('[data-copy-status]');
  if (status && !control.hasAttribute('data-copied')) status.textContent = '';
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    if (!controls.has(control)) return;
    if (status) {
      reset(control);
      status.classList.remove('usa-sr-only');
      status.textContent = 'Copy unavailable. Try again.';
    }
    control.dispatchEvent(new Event('nds:copy-error', { bubbles: true }));
    return;
  }
  if (!controls.has(control)) return;
  const confirmation = control.querySelector('[data-copy-confirmation]');
  if (confirmation) {
    reset(control);
    control.setAttribute('data-copied', '');
    confirmation.removeAttribute('hidden');
    confirmation.previousElementSibling?.setAttribute('hidden', '');
    resets.set(control, window.setTimeout(() => reset(control), 2000));
  }
  if (status) {
    status.classList.toggle('usa-sr-only', Boolean(confirmation));
    status.textContent = confirmation?.textContent || 'Copied.';
  }
  control.dispatchEvent(new Event('nds:copied', { bubbles: true }));
}

export default {
  /** @param {ParentNode} root */
  on(root = document) {
    root.querySelectorAll('lg-clipboard-button[data-nds-copy]').forEach((control) => {
      control.addEventListener('click', copy);
      controls.add(control);
    });
  },
  off() {
    controls.forEach((control) => {
      control.removeEventListener('click', copy);
      if (resets.has(control)) reset(control);
    });
    controls.clear();
  },
};
