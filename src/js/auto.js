import * as components from './components/index.js';

function initComponents() {
  const target = document.body;
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
