const behavior = require('uswds/src/js/utils/behavior');

const HIDDEN_CLASS = 'lg-spinner--hidden';
const COLLAPSED_SPINNER = 'usa-button__lg-invokeSpinner--hidden';

const invokeSpinner = behavior({
  click: {
    '.usa-button__lg-invokeSpinner': function invokingSpinner(event) {
      event.preventDefault();
      this.classList.add(COLLAPSED_SPINNER);
      document.querySelector(`.${HIDDEN_CLASS}`).classList.remove(HIDDEN_CLASS);
    },
  },
});

module.exports = invokeSpinner;
