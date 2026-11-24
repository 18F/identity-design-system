/** @param {typeof import('@uswds/uswds/js/usa-tooltip').default} tooltip */
export function withTooltipInteractions(tooltip) {
  /** @type {WeakMap<HTMLElement, () => void>} */
  const cleanups = new WeakMap();

  /** @param {HTMLElement | Document} [root] */
  function init(root = document.body) {
    const selector = '.usa-tooltip[title]';
    if (root instanceof HTMLElement && root.matches(selector)) tooltip.setup(root);
    root.querySelectorAll(selector).forEach(el => {
      if (el instanceof HTMLElement) tooltip.setup(el);
    });
  }

  /** @param {HTMLElement} [root] */
  function on(root = document.body) {
    if (cleanups.has(root)) return;
    init(root);
    const controller = new AbortController();
    const options = { signal: controller.signal };
    /** @type {Map<HTMLElement, {body: HTMLElement, hover: boolean, focus: boolean, dismissed: boolean, geometry: string}>} */
    const active = new Map();
    let frame = 0;

    // Measure only while open. A trigger can move without a window resize or scroll
    // event (for example, when another component expands above it).
    function position() {
      frame = 0;
      for (const [trigger, state] of active) {
        if (!trigger.isConnected) {
          tooltip.hide(state.body);
          active.delete(trigger);
          continue;
        }
        if (state.dismissed) continue;
        const r = trigger.getBoundingClientRect();
        const { clientWidth: width, clientHeight: height } = document.documentElement;
        const geometry = [r.left, r.top, r.width, r.height, width, height].join(',');
        if (geometry !== state.geometry) {
          state.geometry = geometry;
          if (r.bottom <= 0 || r.top >= height || r.right <= 0 || r.left >= width) {
            tooltip.hide(state.body);
          } else {
            state.body.classList.remove('usa-tooltip__body--wrap');
            const placement = /** @type {'top' | 'bottom' | 'left' | 'right'} */ (trigger.dataset.position);
            tooltip.show(state.body, trigger, placement);
          }
        }
        if (!frame) frame = requestAnimationFrame(position);
      }
    }

    /** @param {MouseEvent | FocusEvent} event */
    function update(event) {
      if (!(event.target instanceof Element)) return;
      const entering = event.type === 'mouseover' || event.type === 'focusin';
      const raw = event.target.closest('.usa-tooltip[title]');
      if (entering && raw instanceof HTMLElement) tooltip.setup(raw);
      const wrapper = event.target.closest('.usa-tooltip');
      const trigger = wrapper?.querySelector(':scope > .usa-tooltip__trigger');
      if (!(wrapper && trigger instanceof HTMLElement)) return;
      if (event.relatedTarget instanceof Node && wrapper.contains(event.relatedTarget)) return;
      const state = active.get(trigger) ?? {
        body: tooltip.getTooltipElements(trigger).body,
        hover: false, focus: false, dismissed: false, geometry: '',
      };
      state[event.type.startsWith('mouse') ? 'hover' : 'focus'] = entering;
      if (state.hover || state.focus) {
        active.set(trigger, state);
        if (!frame && !state.dismissed) position();
      } else {
        tooltip.hide(state.body);
        active.delete(trigger);
      }
    }
    root.addEventListener('mouseover', update, options);
    root.addEventListener('mouseout', update, options);
    root.addEventListener('focusin', update, options);
    root.addEventListener('focusout', update, options);
    root.ownerDocument.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      active.forEach(state => {
        state.dismissed = true;
        tooltip.hide(state.body);
      });
    }, options);

    cleanups.set(root, () => {
      controller.abort();
      cancelAnimationFrame(frame);
      active.forEach(state => tooltip.hide(state.body));
      active.clear();
    });
  }

  /** @param {HTMLElement} [root] */
  function off(root = document.body) {
    cleanups.get(root)?.();
    cleanups.delete(root);
  }

  return { ...tooltip, init, on, off, add: on, remove: off, teardown: off };
}
