/** @type {Map<HTMLFormElement, () => void>} */
const cleanups = new Map();

/** @param {typeof import('@uswds/uswds/js/usa-search').default} search */
export function withQueryState(search) {
  return {
    ...search,
    /** @param {HTMLElement | Document} [root] */
    on(root = document.body) {
      const scope = root instanceof Document ? root.documentElement : root;
      search.on(scope);
      const forms = scope.matches('form.nds-search') ? [scope] : scope.querySelectorAll('form.nds-search');
      for (const form of forms) {
        const input = form.querySelector('input[type="search"]');
        const button = form.querySelector('button[type="submit"]');
        if (!(form instanceof HTMLFormElement && input instanceof HTMLInputElement &&
              button instanceof HTMLButtonElement) || cleanups.has(form)) continue;
        let hostDisabled = button.disabled;
        const unavailable = () => hostDisabled || input.matches(':disabled') || !input.value.trim();
        const watch = { attributes: true, attributeFilter: ['disabled'] };
        // Consume external writes before updating the shared disabled attribute.
        // Discard our own record so query state never becomes a host override.
        /** @param {MutationRecord[]} records */
        const remember = records => {
          if (records.some(record => record.target === button)) hostDisabled = button.disabled;
        };
        const observer = new MutationObserver(records => { remember(records); sync(); });
        const sync = () => {
          remember(observer.takeRecords());
          const disabled = unavailable();
          if (button.disabled !== disabled) {
            button.disabled = disabled;
            observer.takeRecords();
          }
        };
        observer.observe(input, watch);
        observer.observe(button, watch);
        /** @param {SubmitEvent} event */
        const guard = event => {
          sync();
          if (button.matches(':disabled')) event.preventDefault();
        };
        const reset = () => setTimeout(() => { if (cleanups.has(form)) sync(); }, 0);
        input.addEventListener('input', sync);
        input.addEventListener('change', sync);
        form.addEventListener('reset', reset);
        form.addEventListener('submit', guard, true);
        window.addEventListener('pageshow', sync);
        cleanups.set(form, () => {
          input.removeEventListener('input', sync);
          input.removeEventListener('change', sync);
          form.removeEventListener('reset', reset);
          form.removeEventListener('submit', guard, true);
          window.removeEventListener('pageshow', sync);
          remember(observer.takeRecords());
          observer.disconnect();
          button.disabled = hostDisabled;
        });
        sync();
      }
    },
    /** @param {HTMLElement | Document} [root] */
    off(root = document.body) {
      search.off(root instanceof Document ? root.documentElement : root);
      for (const [form, cleanup] of cleanups) {
        if (root.contains(form)) { cleanup(); cleanups.delete(form); }
      }
    },
  };
}
