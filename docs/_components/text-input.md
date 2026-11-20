---
title: Text input
lead: A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.
---

{% include helpers/base-component.html component="text-input" stylesheet="usa-input" %}

## Floating label text input

This is the library text input, as rendered by login.gov's `NDS::InputComponent`.
A `.usa-input` wrapper holds the visually hidden `.usa-input__label`, a
`.usa-input__shell` with the real `.usa-input__control`, an aria-hidden
`.usa-input__floating-label` that reads as the placeholder until the field is
focused or filled, and a `.usa-input__error` region. Give the control
`placeholder=" "` so `:placeholder-shown` tracks emptiness.

The interactive states can't be shown statically: **hovered** darkens the border
to `base-darkest`; **focus** draws a 2px `base-darkest` border, floats the label,
and shows a `primary` caret; **focus - filled** is the same with a value.

### Default

{% capture example %}
<div class="usa-input">
  <label class="usa-input__label" for="ti-default">Label</label>
  <div class="usa-input__shell">
    <input id="ti-default" type="text" class="usa-input__control usa-input__control--floating" placeholder=" ">
    <span class="usa-input__floating-label" aria-hidden="true">Label</span>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Filled

{% capture example %}
<div class="usa-input">
  <label class="usa-input__label" for="ti-filled">Label</label>
  <div class="usa-input__shell">
    <input id="ti-filled" type="text" class="usa-input__control usa-input__control--floating" placeholder=" " value="Input">
    <span class="usa-input__floating-label" aria-hidden="true">Label</span>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Read only

{% capture example %}
<div class="usa-input">
  <label class="usa-input__label" for="ti-readonly">Label</label>
  <div class="usa-input__shell">
    <input id="ti-readonly" type="text" class="usa-input__control usa-input__control--floating" placeholder=" " value="Input" readonly>
    <span class="usa-input__floating-label" aria-hidden="true">Label</span>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Error

Set `aria-invalid="true"` on the control and add `.usa-input__error--visible` to show the message.

{% capture example %}
<div class="usa-input">
  <label class="usa-input__label" for="ti-error">Label</label>
  <div class="usa-input__shell">
    <input id="ti-error" type="text" class="usa-input__control usa-input__control--floating" placeholder=" " aria-invalid="true" aria-describedby="ti-error-error">
    <span class="usa-input__floating-label" aria-hidden="true">Label</span>
  </div>
  <p class="usa-input__error usa-input__error--visible" id="ti-error-error"><span class="usa-input__error-inner">Error message</span></p>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With icon

Password fields add `.usa-input--password`, `.usa-input__control--password`, and
a trailing 20px `.usa-input__toggle` that reveals the value. The states match the
plain field.

#### Default

{% capture example %}
<div class="usa-input usa-input--password">
  <label class="usa-input__label" for="ti-icon-default">Password</label>
  <div class="usa-input__shell">
    <input id="ti-icon-default" type="password" class="usa-input__control usa-input__control--password usa-input__control--floating" placeholder=" ">
    <span class="usa-input__floating-label" aria-hidden="true">Password</span>
    <button type="button" class="usa-input__toggle" aria-controls="ti-icon-default" aria-label="Show password" aria-pressed="false">
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-nds-password-icon-show><path fill="currentColor" d="m1 2.42 3.15 3.15C2.05 7.56 1 10 1 10s3 7 9 7c1.66 0 3.08-.54 4.27-1.31L17.58 19l1.41-1.42L2.41 1zm6.3 6.3c-.19.39-.3.82-.3 1.28 0 1.66 1.34 3 3 3 .46 0 .89-.11 1.28-.3l.44.44 1.1 1.09c-.83.46-1.77.77-2.82.77-3.54 0-5.87-3.42-6.76-5 .44-.78 1.22-1.99 2.31-3.02l1.74 1.74zM10 5c3.54 0 5.87 3.42 6.76 5-.29.52-.76 1.25-1.36 1.98l1.42 1.42C18.27 11.68 19 10 19 10s-3-7-9-7c-1.09 0-2.07.25-2.96.63L8.6 5.19C9.04 5.07 9.51 5 10 5"/></svg>
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" hidden data-nds-password-icon-hide><g fill="currentColor"><path d="M10 3c-6 0-9 7-9 7s3 7 9 7 9-7 9-7-3-7-9-7m0 12c-3.54 0-5.87-3.42-6.76-5C4.13 8.41 6.46 5 10 5s5.87 3.42 6.76 5c-.89 1.59-3.22 5-6.76 5"/><path d="M10 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3"/></g></svg>
    </button>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

#### Filled

{% capture example %}
<div class="usa-input usa-input--password">
  <label class="usa-input__label" for="ti-icon-filled">Password</label>
  <div class="usa-input__shell">
    <input id="ti-icon-filled" type="password" class="usa-input__control usa-input__control--password usa-input__control--floating" placeholder=" " value="Input">
    <span class="usa-input__floating-label" aria-hidden="true">Password</span>
    <button type="button" class="usa-input__toggle" aria-controls="ti-icon-filled" aria-label="Show password" aria-pressed="false">
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-nds-password-icon-show><path fill="currentColor" d="m1 2.42 3.15 3.15C2.05 7.56 1 10 1 10s3 7 9 7c1.66 0 3.08-.54 4.27-1.31L17.58 19l1.41-1.42L2.41 1zm6.3 6.3c-.19.39-.3.82-.3 1.28 0 1.66 1.34 3 3 3 .46 0 .89-.11 1.28-.3l.44.44 1.1 1.09c-.83.46-1.77.77-2.82.77-3.54 0-5.87-3.42-6.76-5 .44-.78 1.22-1.99 2.31-3.02l1.74 1.74zM10 5c3.54 0 5.87 3.42 6.76 5-.29.52-.76 1.25-1.36 1.98l1.42 1.42C18.27 11.68 19 10 19 10s-3-7-9-7c-1.09 0-2.07.25-2.96.63L8.6 5.19C9.04 5.07 9.51 5 10 5"/></svg>
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" hidden data-nds-password-icon-hide><g fill="currentColor"><path d="M10 3c-6 0-9 7-9 7s3 7 9 7 9-7 9-7-3-7-9-7m0 12c-3.54 0-5.87-3.42-6.76-5C4.13 8.41 6.46 5 10 5s5.87 3.42 6.76 5c-.89 1.59-3.22 5-6.76 5"/><path d="M10 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3"/></g></svg>
    </button>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

#### Read only

{% capture example %}
<div class="usa-input usa-input--password">
  <label class="usa-input__label" for="ti-icon-readonly">Password</label>
  <div class="usa-input__shell">
    <input id="ti-icon-readonly" type="password" class="usa-input__control usa-input__control--password usa-input__control--floating" placeholder=" " value="Input" readonly>
    <span class="usa-input__floating-label" aria-hidden="true">Password</span>
    <button type="button" class="usa-input__toggle" aria-controls="ti-icon-readonly" aria-label="Show password" aria-pressed="false">
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-nds-password-icon-show><path fill="currentColor" d="m1 2.42 3.15 3.15C2.05 7.56 1 10 1 10s3 7 9 7c1.66 0 3.08-.54 4.27-1.31L17.58 19l1.41-1.42L2.41 1zm6.3 6.3c-.19.39-.3.82-.3 1.28 0 1.66 1.34 3 3 3 .46 0 .89-.11 1.28-.3l.44.44 1.1 1.09c-.83.46-1.77.77-2.82.77-3.54 0-5.87-3.42-6.76-5 .44-.78 1.22-1.99 2.31-3.02l1.74 1.74zM10 5c3.54 0 5.87 3.42 6.76 5-.29.52-.76 1.25-1.36 1.98l1.42 1.42C18.27 11.68 19 10 19 10s-3-7-9-7c-1.09 0-2.07.25-2.96.63L8.6 5.19C9.04 5.07 9.51 5 10 5"/></svg>
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" hidden data-nds-password-icon-hide><g fill="currentColor"><path d="M10 3c-6 0-9 7-9 7s3 7 9 7 9-7 9-7-3-7-9-7m0 12c-3.54 0-5.87-3.42-6.76-5C4.13 8.41 6.46 5 10 5s5.87 3.42 6.76 5c-.89 1.59-3.22 5-6.76 5"/><path d="M10 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3"/></g></svg>
    </button>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

#### Error

{% capture example %}
<div class="usa-input usa-input--password">
  <label class="usa-input__label" for="ti-icon-error">Password</label>
  <div class="usa-input__shell">
    <input id="ti-icon-error" type="password" class="usa-input__control usa-input__control--password usa-input__control--floating" placeholder=" " aria-invalid="true" aria-describedby="ti-icon-error-error">
    <span class="usa-input__floating-label" aria-hidden="true">Password</span>
    <button type="button" class="usa-input__toggle" aria-controls="ti-icon-error" aria-label="Show password" aria-pressed="false">
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-nds-password-icon-show><path fill="currentColor" d="m1 2.42 3.15 3.15C2.05 7.56 1 10 1 10s3 7 9 7c1.66 0 3.08-.54 4.27-1.31L17.58 19l1.41-1.42L2.41 1zm6.3 6.3c-.19.39-.3.82-.3 1.28 0 1.66 1.34 3 3 3 .46 0 .89-.11 1.28-.3l.44.44 1.1 1.09c-.83.46-1.77.77-2.82.77-3.54 0-5.87-3.42-6.76-5 .44-.78 1.22-1.99 2.31-3.02l1.74 1.74zM10 5c3.54 0 5.87 3.42 6.76 5-.29.52-.76 1.25-1.36 1.98l1.42 1.42C18.27 11.68 19 10 19 10s-3-7-9-7c-1.09 0-2.07.25-2.96.63L8.6 5.19C9.04 5.07 9.51 5 10 5"/></svg>
      <svg class="usa-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" hidden data-nds-password-icon-hide><g fill="currentColor"><path d="M10 3c-6 0-9 7-9 7s3 7 9 7 9-7 9-7-3-7-9-7m0 12c-3.54 0-5.87-3.42-6.76-5C4.13 8.41 6.46 5 10 5s5.87 3.42 6.76 5c-.89 1.59-3.22 5-6.76 5"/><path d="M10 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3"/></g></svg>
    </button>
  </div>
  <p class="usa-input__error usa-input__error--visible" id="ti-icon-error-error"><span class="usa-input__error-inner">Error message</span></p>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Text Input

### Default

{% capture example %}
<label for="fd85" class="usa-label">Text input</label>
<input id="fd85" type="text" class="usa-input">
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Big

{% capture example %}
<label for="tlkx" class="usa-label">Text input</label>
<input id="tlkx" type="text" class="usa-input usa-input--big">
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Textarea

### Default

{% capture example %}
<label for="e8c5" class="usa-label">Textarea (multiline) input</label>
<textarea id="e8c5" type="text" class="usa-textarea"></textarea>
{% endcapture %}
{% include helpers/code-example.html code=example %}

#### Big

{% capture example %}
<label for="p8n0" class="usa-label">Textarea (multiline) input</label>
<textarea id="p8n0" type="text" class="usa-textarea usa-textarea--big"></textarea>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Format constraints

When enforcing a specific text input pattern, provide a hint in the form of an example.

{% capture example %}
<label for="kvgx" class="usa-label">Social Security number</label>
<div id="kvgx-hint" class="usa-hint">Example: 000-123-4567</div>
<input id="kvgx" type="text" class="usa-input" aria-describedby="kvgx-hint" pattern="^\d{3}-?\d{2}-?\d{4}$">
{% endcapture %}
{% include helpers/code-example.html code=example %}
