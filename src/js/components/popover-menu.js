/** @type {Map<HTMLDetailsElement, () => void>} */
const cleanups = new Map();

export default {
  /** @param {ParentNode} root */
  on(root = document) {
    root.querySelectorAll('details.popover-menu-disclosure').forEach((details) => {
      if (!(details instanceof HTMLDetailsElement) || cleanups.has(details)) return;
      const panel = details.querySelector(':scope > .popover-menu');
      const trigger = details.querySelector(':scope > summary');
      if (!(panel instanceof HTMLElement && trigger instanceof HTMLElement)) return;
      const doc = details.ownerDocument;
      const win = doc.defaultView;
      if (!win) return;
      const place = () => {
        if (!details.open || getComputedStyle(panel).position !== 'absolute') return;
        const anchor = trigger.getBoundingClientRect();
        const host = details.getBoundingClientRect();
        const width = panel.offsetWidth;
        const edge = 4;
        const left = panel.classList.contains('popover-menu--left') ? host.left : host.right - width;
        const fit = Math.max(edge, Math.min(left, doc.documentElement.clientWidth - edge - width));
        const above = Math.max(0, anchor.top - 2 * edge);
        const below = Math.max(0, doc.documentElement.clientHeight - anchor.bottom - 2 * edge);
        const preferUp = panel.classList.contains('popover-menu--up');
        const up = preferUp ? above >= panel.scrollHeight || above >= below
          : below < panel.scrollHeight && above > below;
        panel.toggleAttribute('data-opens-up', up);
        panel.toggleAttribute('data-opens-down', !up);
        panel.style.setProperty('--menu-shift', `${fit - left}px`);
        panel.style.setProperty('--menu-available-height', `${up ? above : below}px`);
      };
      const observer = new ResizeObserver(place);
      const sync = () => {
        observer.disconnect();
        win.removeEventListener('scroll', place, true);
        win.removeEventListener('resize', place);
        if (!details.open) return;
        observer.observe(trigger);
        observer.observe(panel);
        win.addEventListener('scroll', place, { capture: true, passive: true });
        win.addEventListener('resize', place);
        place();
      };
      details.addEventListener('toggle', sync);
      sync();
      cleanups.set(details, () => {
        details.removeEventListener('toggle', sync);
        observer.disconnect();
        win.removeEventListener('scroll', place, true);
        win.removeEventListener('resize', place);
        panel.removeAttribute('data-opens-up');
        panel.removeAttribute('data-opens-down');
        panel.style.removeProperty('--menu-shift');
        panel.style.removeProperty('--menu-available-height');
      });
    });
  },
  off() {
    cleanups.forEach((cleanup) => cleanup());
    cleanups.clear();
  },
};
