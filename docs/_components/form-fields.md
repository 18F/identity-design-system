---
title: Form fields
subnav:
  - text: Text
    href: "#text"
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

{% include helpers/base-component.html component="form-controls" stylesheet="inputs" %}

## Text

{% capture example %}
<label for="fd85" class="usa-label">Text input</label>
<input id="fd85" type="text" class="usa-input">
{% endcapture %}
{% include helpers/code-example.html code=example %}

{% capture example %}
<label for="e8c5" class="usa-label">Textarea (multiline) input</label>
<textarea id="e8c5" type="text" class="usa-textarea"></textarea>
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

Three text fields are the easiest way for users to enter most dates.

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Date of birth</legend>
  <div class="usa-memorable-date">
    <div class="usa-form-group usa-form-group--month">
      <label for="f5bf" class="usa-label">Month</label>
      <input id="f5bf" class="usa-input" aria-describedby="d7d4" type="text" maxlength="2" pattern="[0-9]*" inputmode="numeric">
    </div>
    <div class="usa-form-group usa-form-group--day">
      <label for="b0fe" class="usa-label">Day</label>
      <input id="b0fe" class="usa-input" aria-describedby="d7d4" type="text" maxlength="2" pattern="[0-9]*" inputmode="numeric">
    </div>
    <div class="usa-form-group usa-form-group--year">
      <label for="dc41" class="usa-label">Year</label>
      <input id="dc41" class="usa-input" aria-describedby="d7d4" type="text" minlength="4" maxlength="4" pattern="[0-9]*" inputmode="numeric">
    </div>
  </div>
  <span class="usa-form-hint" id="d7d4">Example: 4 28 1986</span>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Dropdowns

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
      <input id="abc123" class="usa-radio__input usa-radio__input--tile" type="radio" name="abc123">
      <label for="abc123" class="usa-radio__label usa-radio__label--illustrated">
      <div class="usa-radio__image">
        <img alt="" src="{{ site.baseurl}}/assets/img/fingerprint-icon.svg">
      </div>
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
      <input id="abc123" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="abc123">
        <label for="abc123" class="usa-checkbox__label usa-checkbox__label--illustrated">
        <div class="usa-checkbox__image">
          <img alt="" src="{{ site.baseurl}}/assets/img/fingerprint-icon.svg">        
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
  <legend class="usa-legend">Date of birth</legend>
  <div class="usa-memorable-date">
    <div class="usa-form-group usa-form-group--month">
      <label for="e30e" class="usa-label">Month</label>
      <input id="e30e" class="usa-input usa-input--error" aria-describedby="f9e5" type="text" maxlength="2" pattern="[0-9]*" inputmode="numeric">
    </div>
    <div class="usa-form-group usa-form-group--day">
      <label for="b857" class="usa-label">Day</label>
      <input id="b857" class="usa-input usa-input--error" aria-describedby="f9e5" type="text" maxlength="2" pattern="[0-9]*" inputmode="numeric">
    </div>
    <div class="usa-form-group usa-form-group--year">
      <label for="a5dc" class="usa-label">Year</label>
      <input id="a5dc" class="usa-input usa-input--error" aria-describedby="f9e5" type="text" minlength="4" maxlength="4" pattern="[0-9]*" inputmode="numeric">
    </div>
  </div>
  <span class="usa-form-hint" id="f9e5">Example: 4 28 1986</span>
  <span class="usa-error-message" role="alert">Error message text</span>
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
