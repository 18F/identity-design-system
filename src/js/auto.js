import * as components from './components/index.js';

function initComponents() {
  const target = document.body;
  // The mixed state is a DOM property, not an HTML checkbox attribute.
  target.querySelectorAll('.usa-checkbox__input[data-indeterminate]').forEach((input) => {
    if (!(input instanceof HTMLInputElement)) return;
    input.indeterminate = true;
    input.removeAttribute('data-indeterminate');
  });
  Object.keys(components).forEach((key) => {
    const behavior = components[/** @type {keyof components} */ (key)];
    behavior.on(target);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initComponents, { once: true });
} else {
  initComponents();
}
