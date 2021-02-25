import 'uswds/src/js/polyfills';
import domready from 'domready';
import * as components from './components';

domready(() => {
  const target = document.body;
  Object.keys(components).forEach((key) => {
    const behavior = components[key];
    behavior.on(target);
  });
});
