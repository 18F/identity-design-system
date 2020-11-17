const behavior = require('uswds/src/js/utils/behavior');

function createDropdownPicker(contentSelector) {
  return function onDropdownButtonClickOrKeyPress(event) {
    const button = event.target;
    const content = button.parentNode.querySelector(contentSelector);
    const isExpanded = !content.classList.toggle('display-none');
    button.setAttribute('aria-expanded', isExpanded.toString());
  };
}

const dropdownButton = behavior({
  click: {
    '.dropdown-mobile-toggle > button': createDropdownPicker('.mobile-dropdown'),
    '.dropdown-desktop-toggle > button': createDropdownPicker('.desktop-dropdown'),
  },
});

module.exports = dropdownButton;
