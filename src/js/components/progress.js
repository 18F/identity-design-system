/** @type {Map<Element, () => void>} */
const cleanups = new Map();

export default {
  /** @param {ParentNode} root */
  on(root = document) {
    root.querySelectorAll('.progress__scroll').forEach((frame) => {
      const list = frame.querySelector('.progress__stepper');
      if (!(frame instanceof HTMLElement && list instanceof HTMLElement) || cleanups.has(frame)) return;
      const header = frame.closest('.auth-page__top-chrome');
      const brand = header?.querySelector('.auth-page__logo-banner');
      const layout = () => {
        if (header && brand) {
          // A centered row needs room for the branding (plus a gap) on both sides.
          const styles = getComputedStyle(header);
          const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
          const stepsWidth = Array.from(list.children).reduce(
            (width, item) => width + item.getBoundingClientRect().width, 0,
          ) + gap * Math.max(0, list.children.length - 1);
          const side = brand.getBoundingClientRect().width + parseFloat(styles.paddingInlineStart) + gap;
          header.toggleAttribute('data-progress-fits', stepsWidth + 2 * side <= header.clientWidth);
        }
        const current = list.querySelector('[aria-current="step"]');
        frame.toggleAttribute('data-centered', Boolean(current));
        if (!current) return;
        // Measure relative to the list so a previous translation cancels out.
        const row = list.getBoundingClientRect();
        const step = current.getBoundingClientRect();
        const center = step.left - row.left + step.width / 2;
        const half = frame.clientWidth / 2;
        frame.style.setProperty('--progress-shift', `${-center}px`);
        frame.style.setProperty('--progress-left', center > half + 0.5 ? 'transparent' : 'black');
        frame.style.setProperty('--progress-right', row.width - center > half + 0.5 ? 'transparent' : 'black');
      };
      const resize = new ResizeObserver(layout);
      const observeSizes = () => {
        resize.disconnect();
        [frame, ...list.children].forEach((el) => resize.observe(el));
        if (header && brand) {
          resize.observe(header);
          resize.observe(brand);
        }
        layout();
      };
      const changes = new MutationObserver(observeSizes);
      changes.observe(list, { subtree: true, childList: true, attributes: true, attributeFilter: ['aria-current'] });
      observeSizes();
      cleanups.set(frame, () => {
        resize.disconnect();
        changes.disconnect();
        frame.removeAttribute('data-centered');
        header?.removeAttribute('data-progress-fits');
        ['--progress-shift', '--progress-left', '--progress-right'].forEach((key) => frame.style.removeProperty(key));
      });
    });
  },
  off() {
    cleanups.forEach((cleanup) => cleanup());
    cleanups.clear();
  },
};
