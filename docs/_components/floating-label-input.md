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
<div class="usa-form-group usa-input-group--floating">
  <input id="fli1" type="text" class="usa-input" placeholder=" ">
  <label for="fli1" class="usa-label">App nickname</label>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Filled

The label stays floated whenever the field holds a value.

{% capture example %}
<div class="usa-form-group usa-input-group--floating">
  <input id="fli2" type="text" class="usa-input" placeholder=" " value="Passwords App">
  <label for="fli2" class="usa-label">App nickname</label>
</div>
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
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-nds-password-icon-show><path fill="currentColor" d="m1 2.42 3.15 3.15C2.05 7.56 1 10 1 10s3 7 9 7c1.66 0 3.08-.54 4.27-1.31L17.58 19l1.41-1.42L2.41 1zm6.3 6.3c-.19.39-.3.82-.3 1.28 0 1.66 1.34 3 3 3 .46 0 .89-.11 1.28-.3l.44.44 1.1 1.09c-.83.46-1.77.77-2.82.77-3.54 0-5.87-3.42-6.76-5 .44-.78 1.22-1.99 2.31-3.02l1.74 1.74zM10 5c3.54 0 5.87 3.42 6.76 5-.29.52-.76 1.25-1.36 1.98l1.42 1.42C18.27 11.68 19 10 19 10s-3-7-9-7c-1.09 0-2.07.25-2.96.63L8.6 5.19C9.04 5.07 9.51 5 10 5"/></svg>
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" hidden data-nds-password-icon-hide><g fill="currentColor"><path d="M10 3c-6 0-9 7-9 7s3 7 9 7 9-7 9-7-3-7-9-7m0 12c-3.54 0-5.87-3.42-6.76-5C4.13 8.41 6.46 5 10 5s5.87 3.42 6.76 5c-.89 1.59-3.22 5-6.76 5"/><path d="M10 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3"/></g></svg>
    </button>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
