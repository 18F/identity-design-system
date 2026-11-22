/** @type {Map<Element, () => void>} */
const cleanups = new Map();

export default {
  /** @param {ParentNode} root */
  on(root = document) {
    root.querySelectorAll('.connected-services-page').forEach((page) => {
      if (!(page instanceof HTMLElement) || cleanups.has(page)) return;
      const doc = page.ownerDocument;
      const openMenu = () => page.querySelector('details.connected-service__menu[open]');
      /** @param {MouseEvent} event */
      const outside = (event) => {
        const menu = openMenu();
        if (menu && event.target instanceof Node && !menu.contains(event.target))
          menu.removeAttribute('open');
      };
      /** @param {FocusEvent} event */
      const leaveMenu = (event) => {
        const menu = openMenu();
        if (
          menu && event.target instanceof Node && menu.contains(event.target) &&
          !(event.relatedTarget instanceof Node && menu.contains(event.relatedTarget))
        ) menu.removeAttribute('open');
      };
      /** @param {KeyboardEvent} event */
      const escape = (event) => {
        if (event.key !== 'Escape' || event.defaultPrevented) return;
        const menu = openMenu();
        if (!menu || !(event.target instanceof Node) || !menu.contains(event.target)) return;
        menu.removeAttribute('open');
        menu.querySelector('summary')?.focus();
      };
      doc.addEventListener('click', outside);
      page.addEventListener('focusout', leaveMenu);
      page.addEventListener('keydown', escape);
      cleanups.set(page, () => {
        doc.removeEventListener('click', outside);
        page.removeEventListener('focusout', leaveMenu);
        page.removeEventListener('keydown', escape);
      });
    });
  },
  off() {
    cleanups.forEach((cleanup) => cleanup());
    cleanups.clear();
  },
};
