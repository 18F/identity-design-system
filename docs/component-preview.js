// Component examples demonstrate controls; their destinations belong to the host app.
(() => {
  const scope = '[data-component-preview]';
  if (!document.querySelector(scope)) return;
  const placeholder = location.href.split('#')[0] + '#';
  for (const link of document.querySelectorAll(`${scope} a[href]`)) {
    const href = link.getAttribute('href');
    if (href?.startsWith('#') && href.length > 1) continue;
    link.setAttribute('href', placeholder);
  }

  /** @param {MouseEvent} event */
  function activate(event) {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest(`${scope} a[href]`);
    if (!(link instanceof HTMLAnchorElement)) return;
    event.preventDefault();
    if (event.type !== 'click' || event.button !== 0 || event.ctrlKey || event.metaKey ||
        event.shiftKey || event.altKey) return;

    const panel = link.closest('.page-footer__popover:popover-open');
    if (panel instanceof HTMLElement) panel.hidePopover();
    const rail = link.closest('.nds-side-nav');
    if (rail) {
      for (const item of rail.querySelectorAll('a[href]')) {
        const current = item === link;
        if (current) item.setAttribute('aria-current', 'page');
        else item.removeAttribute('aria-current');
        item.classList.toggle('usa-current', current);
      }
    }
    const href = link.getAttribute('href');
    if (href?.startsWith('#') && href.length > 1) {
      const target = document.getElementById(href.slice(1));
      if (target && link.closest(scope)?.contains(target)) {
        target.focus();
        target.scrollIntoView({ block: 'nearest' });
      }
    }
  }
  document.addEventListener('click', activate, true);
  document.addEventListener('auxclick', activate, true);
  document.addEventListener('submit', event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches(`${scope} [data-preview-switch-interface]`)) return;
    event.preventDefault();
    const status = form.parentElement?.querySelector('[role="status"]');
    if (status) status.textContent = 'Preview only. Your interface preference has not changed.';
  });
})();
