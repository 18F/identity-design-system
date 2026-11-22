/** @param {HTMLDialogElement} dialog */
export function openNativeDialog(dialog) {
  dialog.showModal();
  if (dialog.autofocus) dialog.focus({ preventScroll: true });
  dialog.classList.add('is-open');

  const region = dialog.querySelector('[data-modal-scroll], .modal__body > .modal__content');
  if (!region) return;
  const tabIndex = region.getAttribute('tabindex');
  const addRole = !region.hasAttribute('role');
  const addName = !region.hasAttribute('aria-label') && !region.hasAttribute('aria-labelledby');
  const title = dialog.getAttribute('aria-labelledby');
  let scrollable = false;
  /** @param {boolean} enabled */
  const setScrollable = (enabled) => {
    if (enabled === scrollable) return;
    scrollable = enabled;
    if (enabled) {
      region.setAttribute('tabindex', '0');
      if (addRole) region.setAttribute('role', 'region');
      if (addName) {
        if (title) region.setAttribute('aria-labelledby', title);
        else region.setAttribute('aria-label', dialog.getAttribute('aria-label') || 'Dialog content');
      }
    } else {
      if (tabIndex === null) region.removeAttribute('tabindex');
      else region.setAttribute('tabindex', tabIndex);
      if (addRole) region.removeAttribute('role');
      if (addName) region.removeAttribute(title ? 'aria-labelledby' : 'aria-label');
    }
  };
  const update = () => {
    const range = region.scrollHeight - region.clientHeight;
    // Ignore a pixel of rounding at fractional layout sizes.
    setScrollable(range > 1);
    region.toggleAttribute('data-content-fits', range <= 1);
    region.toggleAttribute('data-scroll-above', range > 1 && region.scrollTop > 1);
    region.toggleAttribute('data-scroll-below', range - region.scrollTop > 1);
  };
  const observer = new ResizeObserver(update);
  const observeContent = () => {
    observer.disconnect();
    observer.observe(region);
    for (const child of region.children) observer.observe(child);
    update();
  };
  const mutations = new MutationObserver(observeContent);
  mutations.observe(region, { childList: true, subtree: true, characterData: true });
  observeContent();
  region.addEventListener('scroll', update, { passive: true });
  region.scrollTop = 0;
  update();
  dialog.addEventListener('close', () => {
    observer.disconnect();
    mutations.disconnect();
    region.removeEventListener('scroll', update);
    setScrollable(false);
    region.removeAttribute('data-content-fits');
    region.removeAttribute('data-scroll-above');
    region.removeAttribute('data-scroll-below');
  }, { once: true });
}
