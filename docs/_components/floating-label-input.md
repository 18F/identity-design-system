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

### Read only

{% capture example %}
<div class="usa-form-group usa-input-group--floating">
  <input id="fli3" type="text" class="usa-input" placeholder=" " value="Passwords App" readonly>
  <label for="fli3" class="usa-label">App nickname</label>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Error

Add `.usa-input--error` (or `aria-invalid="true"`) and follow the label with a `.usa-error-message`.

{% capture example %}
<div class="usa-form-group usa-input-group--floating">
  <input id="fli4" type="text" class="usa-input usa-input--error" placeholder=" " aria-invalid="true" aria-describedby="fli4-error">
  <label for="fli4" class="usa-label">App nickname</label>
  <span class="usa-error-message" id="fli4-error" role="alert">
    <svg class="usa-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M13.2 18h-2.4v-7.2h2.4zm.24-10.56c0 .795-.36 1.44-1.44 1.44s-1.44-.645-1.44-1.44S10.92 6 12 6s1.44.645 1.44 1.44"/><path fill="currentColor" fill-rule="evenodd" d="M12 1.2C6 1.2 1.2 6 1.2 12S6 22.8 12 22.8 22.8 18 22.8 12 18 1.2 12 1.2m0 2.4c4.68 0 8.4 3.72 8.4 8.4s-3.72 8.4-8.4 8.4-8.4-3.72-8.4-8.4S7.32 3.6 12 3.6" clip-rule="evenodd"/></svg>
    Error message
  </span>
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
    <input id="ssn1" name="ssn" type="text" inputmode="numeric" autocomplete="off" class="usa-input__control usa-input__control--ssn usa-input__control--floating" placeholder="123 - 45 - 6789" data-nds-ssn-incomplete="Enter a nine-digit Social Security number">
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

### SSN states

The SSN field uses the floating-label states. While focused and empty, the
control shows its `placeholder` (`123 - 45 - 6789`) in 45% ink under the
floated label. Hovered and focused states match the text input.

#### Filled

{% capture example %}
<div class="usa-input usa-input--ssn">
  <label class="usa-input__label" for="ssn2">Social Security number</label>
  <div class="usa-input__shell">
    <input id="ssn2" name="ssn" type="text" inputmode="numeric" autocomplete="off" class="usa-input__control usa-input__control--ssn usa-input__control--floating" placeholder="123 - 45 - 6789" value="•••-••-••••" data-nds-ssn-incomplete="Enter a nine-digit Social Security number">
    <input type="hidden" data-nds-ssn-value value="123456789">
    <span class="usa-input__floating-label" aria-hidden="true">Social Security number</span>
    <button type="button" class="usa-input__toggle" data-nds-ssn-toggle data-label-show="Show Social Security number" data-label-hide="Hide Social Security number" aria-controls="ssn2" aria-label="Show Social Security number" aria-pressed="false">
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-nds-password-icon-show><path fill="currentColor" d="m1 2.42 3.15 3.15C2.05 7.56 1 10 1 10s3 7 9 7c1.66 0 3.08-.54 4.27-1.31L17.58 19l1.41-1.42L2.41 1zm6.3 6.3c-.19.39-.3.82-.3 1.28 0 1.66 1.34 3 3 3 .46 0 .89-.11 1.28-.3l.44.44 1.1 1.09c-.83.46-1.77.77-2.82.77-3.54 0-5.87-3.42-6.76-5 .44-.78 1.22-1.99 2.31-3.02l1.74 1.74zM10 5c3.54 0 5.87 3.42 6.76 5-.29.52-.76 1.25-1.36 1.98l1.42 1.42C18.27 11.68 19 10 19 10s-3-7-9-7c-1.09 0-2.07.25-2.96.63L8.6 5.19C9.04 5.07 9.51 5 10 5"/></svg>
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" hidden data-nds-password-icon-hide><g fill="currentColor"><path d="M10 3c-6 0-9 7-9 7s3 7 9 7 9-7 9-7-3-7-9-7m0 12c-3.54 0-5.87-3.42-6.76-5C4.13 8.41 6.46 5 10 5s5.87 3.42 6.76 5c-.89 1.59-3.22 5-6.76 5"/><path d="M10 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3"/></g></svg>
    </button>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

#### Read only

{% capture example %}
<div class="usa-input usa-input--ssn">
  <label class="usa-input__label" for="ssn3">Social Security number</label>
  <div class="usa-input__shell">
    <input id="ssn3" name="ssn" type="text" inputmode="numeric" autocomplete="off" class="usa-input__control usa-input__control--ssn usa-input__control--floating" placeholder="123 - 45 - 6789" value="•••-••-••••" readonly data-nds-ssn-incomplete="Enter a nine-digit Social Security number">
    <input type="hidden" data-nds-ssn-value value="123456789">
    <span class="usa-input__floating-label" aria-hidden="true">Social Security number</span>
    <button type="button" class="usa-input__toggle" data-nds-ssn-toggle data-label-show="Show Social Security number" data-label-hide="Hide Social Security number" aria-controls="ssn3" aria-label="Show Social Security number" aria-pressed="false">
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-nds-password-icon-show><path fill="currentColor" d="m1 2.42 3.15 3.15C2.05 7.56 1 10 1 10s3 7 9 7c1.66 0 3.08-.54 4.27-1.31L17.58 19l1.41-1.42L2.41 1zm6.3 6.3c-.19.39-.3.82-.3 1.28 0 1.66 1.34 3 3 3 .46 0 .89-.11 1.28-.3l.44.44 1.1 1.09c-.83.46-1.77.77-2.82.77-3.54 0-5.87-3.42-6.76-5 .44-.78 1.22-1.99 2.31-3.02l1.74 1.74zM10 5c3.54 0 5.87 3.42 6.76 5-.29.52-.76 1.25-1.36 1.98l1.42 1.42C18.27 11.68 19 10 19 10s-3-7-9-7c-1.09 0-2.07.25-2.96.63L8.6 5.19C9.04 5.07 9.51 5 10 5"/></svg>
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" hidden data-nds-password-icon-hide><g fill="currentColor"><path d="M10 3c-6 0-9 7-9 7s3 7 9 7 9-7 9-7-3-7-9-7m0 12c-3.54 0-5.87-3.42-6.76-5C4.13 8.41 6.46 5 10 5s5.87 3.42 6.76 5c-.89 1.59-3.22 5-6.76 5"/><path d="M10 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3"/></g></svg>
    </button>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

#### Error

{% capture example %}
<div class="usa-input usa-input--ssn">
  <label class="usa-input__label" for="ssn4">Social Security number</label>
  <div class="usa-input__shell">
    <input id="ssn4" name="ssn" type="text" inputmode="numeric" autocomplete="off" class="usa-input__control usa-input__control--ssn usa-input__control--floating" placeholder="123 - 45 - 6789" aria-invalid="true" aria-describedby="ssn4-error" data-nds-ssn-incomplete="Enter a nine-digit Social Security number">
    <input type="hidden" data-nds-ssn-value>
    <span class="usa-input__floating-label" aria-hidden="true">Social Security number</span>
    <button type="button" class="usa-input__toggle" data-nds-ssn-toggle data-label-show="Show Social Security number" data-label-hide="Hide Social Security number" aria-controls="ssn4" aria-label="Show Social Security number" aria-pressed="false">
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-nds-password-icon-show><path fill="currentColor" d="m1 2.42 3.15 3.15C2.05 7.56 1 10 1 10s3 7 9 7c1.66 0 3.08-.54 4.27-1.31L17.58 19l1.41-1.42L2.41 1zm6.3 6.3c-.19.39-.3.82-.3 1.28 0 1.66 1.34 3 3 3 .46 0 .89-.11 1.28-.3l.44.44 1.1 1.09c-.83.46-1.77.77-2.82.77-3.54 0-5.87-3.42-6.76-5 .44-.78 1.22-1.99 2.31-3.02l1.74 1.74zM10 5c3.54 0 5.87 3.42 6.76 5-.29.52-.76 1.25-1.36 1.98l1.42 1.42C18.27 11.68 19 10 19 10s-3-7-9-7c-1.09 0-2.07.25-2.96.63L8.6 5.19C9.04 5.07 9.51 5 10 5"/></svg>
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" hidden data-nds-password-icon-hide><g fill="currentColor"><path d="M10 3c-6 0-9 7-9 7s3 7 9 7 9-7 9-7-3-7-9-7m0 12c-3.54 0-5.87-3.42-6.76-5C4.13 8.41 6.46 5 10 5s5.87 3.42 6.76 5c-.89 1.59-3.22 5-6.76 5"/><path d="M10 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3"/></g></svg>
    </button>
  </div>
  <p class="usa-input__error usa-input__error--visible" id="ssn4-error"><span class="usa-input__error-inner">Error message</span></p>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
