// Component examples demonstrate controls; their destinations belong to the host app.
(() => {
  const scope = '[data-component-preview]';
  for (const demo of document.querySelectorAll('[data-spinner-demo]')) {
    const button = demo.querySelector('button');
    const glyph = demo.querySelector('.nds-spinner');
    const label = demo.querySelector('[data-spinner-label]');
    const status = demo.querySelector('[role="status"]');
    if (!button || !(glyph instanceof HTMLElement) || !label || !status) continue;
    button.disabled = false;
    button.addEventListener('click', () => {
      if (!glyph.hidden) return;
      glyph.hidden = false;
      label.classList.add('usa-sr-only');
      status.textContent = 'Searching for Post Offices';
      // Only the preview simulates latency; applications use request completion.
      window.setTimeout(() => {
        glyph.hidden = true;
        label.classList.remove('usa-sr-only');
        status.textContent = 'Search complete.';
      }, 2000);
    });
  }
  for (const form of document.querySelectorAll('form[data-location-example]')) {
    form.addEventListener('submit', event => event.preventDefault());
  }
  for (const demo of document.querySelectorAll('[data-password-strength-demo]')) {
    const input = demo.querySelector('input');
    const meter = demo.querySelector('.password-strength');
    const status = demo.querySelector('[role="status"]');
    if (!input || !(meter instanceof HTMLElement) || !status) continue;
    const update = () => {
      const length = input.value.length;
      const score = length >= 16 ? '3' : length >= 8 ? '2' : length ? '1' : '';
      if (score === (meter.dataset.score || '')) return;
      if (score) {
        meter.dataset.score = score;
        meter.dataset.open = 'true';
        const level = ['error', 'warning', 'success'][Number(score) - 1];
        status.textContent = `Password strength: ${meter.querySelector(`.badge--${level}`)?.textContent}.`;
      } else {
        delete meter.dataset.open;
        delete meter.dataset.score;
        status.textContent = '';
      }
    };
    input.addEventListener('input', update);
    document.addEventListener('reset', event => {
      if (event.target === input.form) {
        setTimeout(() => { if (!event.defaultPrevented) update(); }, 0);
      }
    }, true);
    update();
  }
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
