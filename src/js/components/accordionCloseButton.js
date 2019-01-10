const accordion = require('uswds/src/js/components/accordion');
const behavior = require('uswds/src/js/utils/behavior');

const accordionCloseButton = behavior({
  click: {
    '[id] .usa-accordion-close-button': function closeAccordion(event) {
      event.preventDefault();
      const button = document.querySelector(`[aria-controls='${this.closest('[id]').id}']`);
      accordion.toggle(button);
    },
  },
});

module.exports = accordionCloseButton;
