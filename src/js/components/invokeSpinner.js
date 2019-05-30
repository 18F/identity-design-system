const behavior = require('uswds/src/js/utils/behavior');

const HIDDEN_CLASS = 'spinner--hidden';
const COLLAPSED_SPINNER = 'usa-button__invokeSpinner--hidden';

const invokeSpinner = behavior({
  click: {
    '.usa-button__invokeSpinner': function invokingSpinner(event) {
      event.preventDefault();
      this.classList.add(COLLAPSED_SPINNER);
      document.querySelector(`.${HIDDEN_CLASS}`).classList.remove(HIDDEN_CLASS);
    },
  },
});

module.exports = invokeSpinner;
