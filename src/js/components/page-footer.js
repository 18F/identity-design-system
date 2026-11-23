/** @type {Map<Element, AbortController>} */
const controllers = new Map();

export default {
  /** @param {ParentNode} root */
  on(root = document) {
    root.querySelectorAll('.page-footer').forEach((footer) => {
      if (controllers.has(footer)) return;
      const controller = new AbortController();
      controllers.set(footer, controller);
      const options = { signal: controller.signal };
      const language = footer.querySelector('.page-footer__select');
      if (language instanceof HTMLSelectElement) {
        let pointer = false;
        const reset = () => { pointer = false; };
        language.addEventListener('pointerdown', () => { pointer = true; }, options);
        language.addEventListener('keydown', reset, options);
        language.addEventListener('blur', reset, options);
        language.addEventListener('change', () => {
          if (pointer) language.blur();
        }, options);
      }

      const help = footer.querySelector('.page-footer__help');
      const more = footer.querySelector('[popovertarget]');
      const overflowHelp = footer.querySelector('.page-footer__overflow-help');
      if (!(help instanceof HTMLElement && more instanceof HTMLElement && overflowHelp)) return;
      // A container query can remove the focused link without a new focus target.
      footer.addEventListener('focusout', (event) => {
        if (!(event instanceof FocusEvent) || event.relatedTarget) return;
        if (event.target === help && !help.getClientRects().length) {
          more.focus();
        } else if (event.target === overflowHelp && help.getClientRects().length) {
          const panel = overflowHelp.closest('[popover]');
          if (panel instanceof HTMLElement && panel.matches(':popover-open')) panel.hidePopover();
          help.focus();
        }
      }, options);
    });
  },
  off() {
    controllers.forEach((controller) => controller.abort());
    controllers.clear();
  },
};
