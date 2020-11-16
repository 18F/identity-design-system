import accordion from 'uswds/src/js/components/accordion';
import behavior from 'uswds/src/js/utils/behavior';

const accordionCloseButton = behavior({
  click: {
    '[id] .usa-accordion__close-button': function closeAccordion(event) {
      event.preventDefault();
      const button = document.querySelector(`[aria-controls='${this.closest('[id]').id}']`);
      accordion.toggle(button);
    },
  },
});

export default accordionCloseButton;
