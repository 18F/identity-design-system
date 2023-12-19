---
title: Validation
lead: Stating validation requirements up front, with live feedback, means users won’t be left guessing.
---

{% include helpers/base-component.html component="validation" %}

## Form validation errors

{% capture example %}
<span class="usa-error-message" role="alert">
  Error message text
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

{% capture example %}
<span class="usa-success-message" role="alert">
  Success message text
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

{% capture example %}

<label for="e9a4" class="usa-label">Text input validation example</label>
<input id="e9a4" type="text" class="usa-input usa-input--error">
<span class="usa-error-message" role="alert">Error message text</span>

{% endcapture %}
{% include helpers/code-example.html code=example %}

### Examples of form validation error for other input types

Follow the same pattern of applying `.usa-input--error` to the effected input and append the error message in the appropriate span.

<div class="usa-accordion usa-accordion--bordered">
  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-textarea">
      Textarea (multiline) input
    </button>
  </h3>
  <div id="errored-textarea" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}
<label for="a37c" class="usa-label">Textarea (multiline) input</label>
<textarea id="a37c" type="text" class="usa-textarea usa-input--error"></textarea>
<span class="usa-error-message" role="alert">Error message text</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-dates">
      Dates
    </button>
  </h3>
  <div id="errored-dates" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}

<fieldset class="usa-fieldset">
  <legend class="usa-label">Date of Birth</legend>
  <span class="usa-hint" id="f9e5">Example: January 19 2000</span>
  <div class="usa-memorable-date">
    <div class="usa-form-group usa-form-group--month usa-form-group--select">
      <label class="usa-label" for="e30e">Month</label>
      <select
        class="usa-select"
        id="e30e"
        aria-describedby="f9e5"
      >
        <option value>- Select -</option>
        <option value="1">01 - January</option>
        <option value="2">02 - February</option>
        <option value="3">03 - March</option>
        <option value="4">04 - April</option>
        <option value="5">05 - May</option>
        <option value="6">06 - June</option>
        <option value="7">07 - July</option>
        <option value="8">08 - August</option>
        <option value="9">09 - September</option>
        <option value="10">10 - October</option>
        <option value="11">11 - November</option>
        <option value="12">12 - December</option>
      </select>
    </div>
    <div class="usa-form-group usa-form-group--day">
      <label class="usa-label" for="b857">Day</label>
      <input
        class="usa-input"
        aria-describedby="f9e5"
        id="b857"
        maxlength="2"
        pattern="[0-9]*"
        inputmode="numeric"
        value=""
      />
    </div>
    <div class="usa-form-group usa-form-group--year">
      <label class="usa-label" for="a5dc">Year</label>
      <input
        class="usa-input"
        aria-describedby="f9e5"
        id="a5dc"
        minlength="4"
        maxlength="4"
        pattern="[0-9]*"
        inputmode="numeric"
        value=""
      />
    </div>
  </div>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-dropdowns">
      Dropdowns
    </button>
  </h3>
  <div id="errored-dropdowns" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}
<label for="d8e1" class="usa-label">Dropdown label</label>
<select id="d8e1" class="usa-select usa-input--error">
  <option value>- Select -</option>
  <option value="value1">Option A</option>
  <option value="value2">Option B</option>
  <option value="value3">Option C</option>
</select>
<span class="usa-error-message" role="alert">Error message text</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
  </div>
</div>

#### Radio buttons and checkboxes

For radio buttons and checkboxes, simply add an error message directly after the input list. Do not apply `.usa-input--error` to the effected inputs.

<div class="usa-accordion usa-accordion--bordered">
  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-radio-small">
      Radio buttons
    </button>
  </h3>
  <div id="errored-radio-small" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="f5c3" class="usa-radio__input" type="radio" name="c8ff">
      <label for="f5c3" class="usa-radio__label">Option 1</label>
    </li>
    <li>
      <input id="b6bf" class="usa-radio__input" type="radio" name="c8ff" checked>
      <label for="b6bf" class="usa-radio__label">Option 2</label>
    </li>
    <li>
      <input id="bdfd" class="usa-radio__input" type="radio" name="c8ff" disabled>
      <label for="bdfd" class="usa-radio__label">Option 3</label>
    </li>
  </ul>
</fieldset>
<span class="usa-error-message" role="alert">Error message text</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-checkbox-small">
      Checkboxes
    </button>
  </h3>
  <div id="errored-checkbox-small" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="f5c1" class="usa-checkbox__input" type="checkbox" name="b851">
      <label for="f5c1" class="usa-checkbox__label">Option 1</label>
    </li>
    <li>
      <input id="d21f" class="usa-checkbox__input" type="checkbox" name="b851" checked>
      <label for="d21f" class="usa-checkbox__label">Option 2</label>
    </li>
    <li>
      <input id="c30e" class="usa-checkbox__input" type="checkbox" name="b851" disabled>
      <label for="c30e" class="usa-checkbox__label">Option 3</label>
    </li>
  </ul>
</fieldset>
<span class="usa-error-message" role="alert">Error message text</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
  </div>
</div>
