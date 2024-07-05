import accordion from '@uswds/uswds/js/usa-accordion';
import toggle from './toggle';

const EXPANDED = "aria-expanded";
const MULTISELECTABLE = "data-allow-multiple";
const { ACCORDION, BUTTON, getButtons } = accordion;
/**
 * Toggle a button's "pressed" state, optionally providing a target
 * state.
 *
 * @param {HTMLButtonElement} button
 * @param {boolean?} expanded If no state is provided, the current
 * state will be toggled (from false to true, and vice-versa).
 * @return {boolean} the resulting state
 */
const toggleButton = (button, expanded) => {
  const accordion = button.closest(ACCORDION);

  if (!accordion) {
    throw new Error(`${BUTTON} is missing outer ${ACCORDION}`);
  }

  const safeExpanded = toggle(button, expanded);

  // XXX multiselectable is opt-in, to preserve legacy behavior
  const multiselectable = accordion.hasAttribute(MULTISELECTABLE);

  if (safeExpanded && !multiselectable) {
    getButtons(accordion).forEach((other) => {
      if (other !== button) {
        toggle(other, false);
      }
    });
  }
};

/**
 * @param {HTMLButtonElement} button
 * @return {boolean} true
 */
const showButton = (button) => toggleButton(button, true);

/**
 * @param {HTMLButtonElement} button
 * @return {boolean} false
 */
const hideButton = (button) => toggleButton(button, false);

const init = (root) => {
  [...root.querySelectorAll(BUTTON)].forEach((button) => {
    const expanded = button.getAttribute(EXPANDED) === 'true';
    toggleButton(button, expanded);
  });
};

accordion.show = showButton;
accordion.hide = hideButton;
accordion.toggle = toggleButton;
accordion.init = init;

export default accordion;
