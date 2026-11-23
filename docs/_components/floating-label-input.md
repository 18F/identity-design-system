---
title: Floating label input
lead: >
  A floating label input shows its label inside the control like a placeholder,
  then floats it above the value once the field is focused or filled.
---

## Floating label input

Render the control BEFORE its `.usa-label` (the label must be the input's next
sibling) and give the input `placeholder=" "` so `:placeholder-shown` tracks
emptiness. Wrap both in a `.usa-form-group.usa-input-group--floating`.

{% capture example %}
{% include helpers/text-input.html id="fli1" label="App nickname" attributes='name="nickname"' %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Filled

The label stays floated whenever the field holds a value.

{% capture example %}
{% include helpers/text-input.html id="fli2" label="App nickname" value="Passwords App" attributes='name="nickname"' %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Social Security number

Add `.usa-input--ssn` to the enhanced input and pair the visible
`.usa-input__control--ssn` field with a hidden `[data-nds-ssn-value]` input. The
`inputSsn` behavior (`inputSsn.on()`) moves the submitted `name` onto the hidden
input, groups digits as `123-45-6789`, masks every digit but the one just typed
(`•••-••-•••9`), and lets a `[data-nds-ssn-toggle]` button reveal the full
number. `data-nds-ssn-incomplete` on the control supplies the validation message
for a partial number.

{% capture example %}
<div class="usa-input usa-input--ssn">
  <label class="usa-input__label" for="ssn1">Social Security number</label>
  <div class="usa-input__shell">
    <input id="ssn1" name="ssn" type="text" inputmode="numeric" autocomplete="off" class="usa-input__control usa-input__control--ssn usa-input__control--floating" placeholder=" " data-nds-ssn-incomplete="Enter a nine-digit Social Security number">
    <input type="hidden" data-nds-ssn-value>
    <span class="usa-input__floating-label" aria-hidden="true">Social Security number</span>
    <button type="button" class="usa-input__toggle" data-nds-ssn-toggle data-label-show="Show Social Security number" data-label-hide="Hide Social Security number" aria-controls="ssn1" aria-label="Show Social Security number" aria-pressed="false">
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-nds-password-icon-show><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#not-visible-hide"></use></svg>
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" hidden data-nds-password-icon-hide><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#visible-show"></use></svg>
    </button>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
