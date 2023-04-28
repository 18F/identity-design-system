---
title: Form fields
subnav:
  - text: Text Input
    href: "#text-input"
  - text: Textarea
    href: "#textarea"
  - text: Dates
    href: "#dates"
  - text: Dropdowns
    href: "#dropdowns"
  - text: Radio buttons
    href: "#radio-buttons"
  - text: Checkboxes
    href: "#checkboxes"
  - text: Form field groups
    href: "#form-field-groups"
  - text: Form validation errors
    href: "#form-validation-errors"
---

{% include helpers/base-component.html component="form-controls" stylesheet="uswds-form-controls" %}

### Text Input

#### Default

{% capture example %}
<label for="fd85" class="usa-label">Text input</label>
<input id="fd85" type="text" class="usa-input">
{% endcapture %}
{% include helpers/code-example.html code=example %}

#### Big

{% capture example %}
<label for="tlkx" class="usa-label">Text input</label>
<input id="tlkx" type="text" class="usa-input usa-input--big">
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Textarea

#### Default

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

## Dates

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-label">Date of Birth</legend>
  <span class="usa-hint" id="d7d4">Example: January 19 2000</span>
  <div class="usa-memorable-date">
    <div class="usa-form-group usa-form-group--month usa-form-group--select">
      <label class="usa-label" for="f5bf">Month</label>
      <select
        class="usa-select"
        id="f5bf"
        aria-describedby="d7d4"
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
      <label class="usa-label" for="b0fe">Day</label>
      <input
        class="usa-input"
        aria-describedby="d7d4"
        id="b0fe"
        maxlength="2"
        pattern="[0-9]*"
        inputmode="numeric"
        value=""
      />
    </div>
    <div class="usa-form-group usa-form-group--year">
      <label class="usa-label" for="dc41">Year</label>
      <input
        class="usa-input"
        aria-describedby="d7d4"
        id="dc41"
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

## Dropdowns

### Default

{% capture example %}
<label for="ab84" class="usa-label">Dropdown label</label>
<select id="ab84" class="usa-select">
  <option value>- Select -</option>
  <option value="value1">Option A</option>
  <option value="value2">Option B</option>
  <option value="value3">Option C</option>
</select>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Big

{% capture example %}
<label for="vg01" class="usa-label">Dropdown label</label>
<select id="vg01" class="usa-select usa-select--big">
  <option value>- Select -</option>
  <option value="value1">Option A</option>
  <option value="value2">Option B</option>
  <option value="value3">Option C</option>
</select>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Radio buttons

Three styles of radio buttons are provided.

### Default

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="fa61" class="usa-radio__input" type="radio" name="fa61">
      <label for="fa61" class="usa-radio__label">Option - Unselected</label>
    </li>
    <li>
      <input id="zeh4" class="usa-radio__input usa-focus" type="radio" name="zeh4">
      <label for="zeh4" class="usa-radio__label">Option - Unselected Focus</label>
    </li>
    <li>
      <input id="a786" class="usa-radio__input" type="radio" name="a786" checked>
      <label for="a786" class="usa-radio__label">Option - Selected</label>
    </li>
    <li>
      <input id="s3vb" class="usa-radio__input usa-focus" type="radio" name="s3vb" checked>
      <label for="s3vb" class="usa-radio__label">Option - Selected Focus</label>
    </li>
    <li>
      <input id="b306" class="usa-radio__input" type="radio" name="b306" disabled>
      <label for="b306" class="usa-radio__label">Option - Disabled</label>
    </li>
    <li>
      <input id="306b" class="usa-radio__input" type="radio" name="306b" disabled checked>
      <label for="306b" class="usa-radio__label">Option - Disabled and Selected</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Bordered

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="a7e9" class="usa-radio__input usa-radio__input--bordered" type="radio" name="a7e9">
      <label for="a7e9" class="usa-radio__label">Option - Unselected</label>
    </li>
    <li>
      <input id="rzb8" class="usa-radio__input usa-radio__input--bordered usa-focus" type="radio" name="rzb8">
      <label for="rzb8" class="usa-radio__label">Option - Unselected Focus</label>
    </li>
    <li>
      <input id="ahfa" class="usa-radio__input usa-radio__input--bordered" type="radio" name="ahfa" checked>
      <label for="ahfa" class="usa-radio__label">Option - Selected</label>
    </li>
    <li>
      <input id="rkg9" class="usa-radio__input usa-radio__input--bordered usa-focus" type="radio" name="rkg9" checked>
      <label for="rkg9" class="usa-radio__label">Option - Selected Focus</label>
    </li>
    <li>
      <input id="db6f" class="usa-radio__input usa-radio__input--bordered" type="radio" name="db6f" disabled>
      <label for="db6f" class="usa-radio__label">Option - Disabled</label>
    </li>
    <li>
      <input id="b6fd" class="usa-radio__input usa-radio__input--bordered" type="radio" name="b6fd" disabled checked>
      <label for="b6fd" class="usa-radio__label">Option - Disabled and Selected</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Tile

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="a8c1" class="usa-radio__input usa-radio__input--tile" type="radio" name="a8c1">
      <label for="a8c1" class="usa-radio__label">Option - Unselected<span class="usa-radio__label-description">Support text</span></label>
    </li>
    <li>
      <input id="g6pz" class="usa-radio__input usa-radio__input--tile" type="radio" name="g6pz">
      <label for="g6pz" class="usa-radio__label usa-radio__label--illustrated">
        <img alt="" class="usa-radio__image" src="{{ site.baseurl }}/img/fingerprint-icon.svg">
        <div class="usa-radio__label--text">
          Option - Illustration
          <span class="usa-radio__label-description">Support text</span>
        </div>
      </label>
    </li>
    <li>
      <input id="t6wh" class="usa-radio__input usa-radio__input--tile usa-focus" type="radio" name="t6wh">
      <label for="t6wh" class="usa-radio__label">Option - Unselected Focus<span class="usa-radio__label-description">Support text</span></label>
    </li>
    <li>
      <input id="b4ed" class="usa-radio__input usa-radio__input--tile" type="radio" name="b4ed" checked>
      <label for="b4ed" class="usa-radio__label">Option - Selected<span class="usa-radio__label-description">Support text</span></label>
    </li>
    <li>
      <input id="v9h3" class="usa-radio__input usa-radio__input--tile usa-focus" type="radio" name="v9h3" checked>
      <label for="v9h3" class="usa-radio__label">Option - Selected Focus<span class="usa-radio__label-description">Support text</span></label>
    </li>
    <li>
      <input id="b93f" class="usa-radio__input usa-radio__input--tile" type="radio" name="b93f" disabled>
      <label for="b93f" class="usa-radio__label">Option - Disabled<span class="usa-radio__label-description">Support text</span></label>
    </li>
    <li>
      <input id="93fb" class="usa-radio__input usa-radio__input--tile" type="radio" name="93fb" disabled checked>
      <label for="93fb" class="usa-radio__label">Option - Disabled and Selected<span class="usa-radio__label-description">Support text</span></label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Checkboxes

Three styles of checkboxes are provided as well.

### Default

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="dee5" class="usa-checkbox__input" type="checkbox" name="dee5">
      <label for="dee5" class="usa-checkbox__label">Option - Unchecked</label>
    </li>
    <li>
      <input id="nhjq" class="usa-checkbox__input usa-focus" type="checkbox" name="nhjq">
      <label for="nhjq" class="usa-checkbox__label">Option - Unchecked Focus</label>
    </li>
    <li>
      <input id="b711" class="usa-checkbox__input" type="checkbox" name="b711" checked>
      <label for="b711" class="usa-checkbox__label">Option - Checked</label>
    </li>
    <li>
      <input id="ojqb" class="usa-checkbox__input usa-focus" type="checkbox" name="ojqb" checked>
      <label for="ojqb" class="usa-checkbox__label">Option - Checked Focus</label>
    </li>
    <li>
      <input id="badc" class="usa-checkbox__input" type="checkbox" name="badc" disabled>
      <label for="badc" class="usa-checkbox__label">Option - Disabled</label>
    </li>
    <li>
      <input id="adcb" class="usa-checkbox__input" type="checkbox" name="adcb" disabled checked>
      <label for="adcb" class="usa-checkbox__label">Option - Disabled and Checked</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Bordered

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="d30c" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="d30c">
      <label for="d30c" class="usa-checkbox__label">Option - Unchecked</label>
    </li>
    <li>
      <input id="lipc" class="usa-checkbox__input usa-checkbox__input--bordered usa-focus" type="checkbox" name="lipc">
      <label for="lipc" class="usa-checkbox__label">Option - Unchecked Focus</label>
    </li>
    <li>
      <input id="a123" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="a123" checked>
      <label for="a123" class="usa-checkbox__label">Option - Checked</label>
    </li>
    <li>
      <input id="xqgt" class="usa-checkbox__input usa-checkbox__input--bordered usa-focus" type="checkbox" name="xqgt" checked>
      <label for="xqgt" class="usa-checkbox__label">Option - Checked Focus</label>
    </li>
    <li>
      <input id="c6b3" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="c6b3" disabled>
      <label for="c6b3" class="usa-checkbox__label">Option - Disabled</label>
    </li>
    <li>
      <input id="6b3c" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="6b3c" disabled checked>
      <label for="6b3c" class="usa-checkbox__label">Option - Disabled and Checked</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Tile

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="c288" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="c288">
      <label for="c288" class="usa-checkbox__label">Option - Unchecked<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
    <li>
      <input id="hx88" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="hx88">
        <label for="hx88" class="usa-checkbox__label usa-checkbox__label--illustrated">
        <div class="usa-checkbox__image">
          <img alt="" src="{{ site.baseurl }}/img/fingerprint-icon.svg">
        </div>
        <div class="usa-checkbox__label--text">
          Option - Illustration
          <span class="usa-checkbox__label-description">Support text</span>
        </div>
      </label>
    </li>
    <li>
      <input id="u22j" class="usa-checkbox__input usa-checkbox__input--tile usa-focus" type="checkbox" name="u22j">
      <label for="u22j" class="usa-checkbox__label">Option - Unchecked Focus<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
    <li>
      <input id="e484" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="e484" checked>
      <label for="e484" class="usa-checkbox__label">Option - Checked<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
    <li>
      <input id="afeg" class="usa-checkbox__input usa-checkbox__input--tile usa-focus" type="checkbox" name="afeg" checked>
      <label for="afeg" class="usa-checkbox__label">Option - Checked Focus<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
    <li>
      <input id="ea84" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="ea84" disabled>
      <label for="ea84" class="usa-checkbox__label">Option - Disabled<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
    <li>
      <input id="a84e" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="a84e" disabled checked>
      <label for="a84e" class="usa-checkbox__label">Option - Disabled and Checked<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Form field groups

The fieldsets inputs default to a new line, unless the grid system is used to create
a grid row.

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Full name</legend>

  <label for="c985" class="usa-label">First name</label>
  <input id="c985" type="text" class="usa-input">

  <label for="a2d8" class="usa-label">Last name</label>
  <input id="a2d8" type="text" class="usa-input">
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

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
