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

## Dates

Three text fields are the easiest way for users to enter most dates.

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Date of birth</legend>
  <div class="usa-memorable-date">
    <div class="usa-form-group usa-form-group--month">
      <label for="f5bf" class="usa-label">Month</label>
      <input id="f5bf" class="usa-input usa-input--inline" aria-describedby="d7d4" type="number" min="1" max="12">
    </div>
    <div class="usa-form-group usa-form-group--day">
      <label for="b0fe" class="usa-label">Day</label>
      <input id="b0fe" class="usa-input usa-input--inline" aria-describedby="d7d4" type="number" min="1" max="31">
    </div>
    <div class="usa-form-group usa-form-group--year">
      <label for="dc41" class="usa-label">Year</label>
      <input id="dc41" class="usa-input usa-input--inline" aria-describedby="d7d4" type="number" min="1900" max="2000">
    </div>
  </div>
  <span class="usa-form-hint" id="d7d4">Example: 04 28 1986</span>
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

Three styles of radio buttons are provided. Always label the grouping of items using a fieldset and legend for screen readers, using the `usa-sr-only` class. Do not use the label for visual rendering, as it has rendering quirks, unfortunately.

### Simple

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="fa61" class="usa-radio__input" type="radio" name="de1a">
      <label for="fa61" class="usa-radio__label">Option 1</label>
    </li>
    <li>
      <input id="a786" class="usa-radio__input" type="radio" name="de1a" checked>
      <label for="a786" class="usa-radio__label">Option 2</label>
    </li>
    <li>
      <input id="b306" class="usa-radio__input" type="radio" name="de1a" disabled>
      <label for="b306" class="usa-radio__label">Option 3</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Normal

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list grid-row grid-gap-md">
    <li class="grid-col">
      <input id="a7e9" class="usa-radio__input" type="radio" name="a69d">
      <label for="a7e9" class="usa-radio__label usa-radio-bordered">Option 1</label>
    </li>
    <li class="grid-col">
      <input id="b7d5" class="usa-radio__input" type="radio" name="a69d" checked>
      <label for="b7d5" class="usa-radio__label usa-radio-bordered">Option 2</label>
    </li>
    <li class="grid-col">
      <input id="db6f" class="usa-radio__input" type="radio" name="a69d" disabled>
      <label for="db6f" class="usa-radio__label usa-radio-bordered">Option 3</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Large

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="a8c1" class="usa-radio__input" type="radio" name="d815">
      <label for="a8c1" class="usa-radio__label usa-radio-bordered usa-radio-large">
        <!-- Use the accurate heading level to maintain the document outline -->
        <h4 class="usa-radio-header">Option 1</h4>
        <p>Button support text</p>
      </label>
    </li>
    <li>
      <input id="b4ed" class="usa-radio__input" type="radio" name="d815" checked>
      <label for="b4ed" class="usa-radio__label usa-radio-bordered usa-radio-large">
        <h4 class="usa-radio-header">Option 2</h4>
        <p>Button support text</p>
      </label>
    </li>
    <li>
      <input id="b93f" class="usa-radio__input" type="radio" name="d815" disabled>
      <label for="b93f" class="usa-radio__label usa-radio-bordered usa-radio-large">
        <h4 class="usa-radio-header">Option 3</h4>
        <p>Button support text</p>
      </label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Checkboxes

Three styles of checkboxes are provided as well. Always label the grouping of items using a fieldset and legend for screen readers, using the `usa-sr-only` class. Do not use the label for visual rendering, as it has rendering quirks, unfortunately.

### Simple

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="dee5" class="usa-checkbox__input" type="checkbox" name="e189">
      <label for="dee5" class="usa-checkbox__label">Option 1</label>
    </li>
    <li>
      <input id="b711" class="usa-checkbox__input" type="checkbox" name="e189" checked>
      <label for="b711" class="usa-checkbox__label">Option 2</label>
    </li>
    <li>
      <input id="badc" class="usa-checkbox__input" type="checkbox" name="e189" disabled>
      <label for="badc" class="usa-checkbox__label">Option 3</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Normal

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list grid-row grid-gap-md">
    <li class="grid-col">
      <input id="d30c" class="usa-checkbox__input" type="checkbox" name="a792">
      <label for="d30c" class="usa-checkbox__label usa-checkbox-bordered">Option 1</label>
    </li>
    <li class="grid-col">
      <input id="a123" class="usa-checkbox__input" type="checkbox" name="a792" checked>
      <label for="a123" class="usa-checkbox__label usa-checkbox-bordered">Option 2</label>
    </li>
    <li class="grid-col">
      <input id="c6b3" class="usa-checkbox__input" type="checkbox" name="a792" disabled>
      <label for="c6b3" class="usa-checkbox__label usa-checkbox-bordered">Option 3</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Large

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="c288" class="usa-checkbox__input" type="checkbox" name="befb">
      <label for="c288" class="usa-checkbox__label usa-checkbox-bordered usa-checkbox-large">
        <!-- Use the accurate heading level to maintain the document outline -->
        <h4 class="usa-checkbox-header">Option 1</h4>
        <p>Button support text</p>
      </label>
    </li>
    <li>
      <input id="e484" class="usa-checkbox__input" type="checkbox" name="befb" checked>
      <label for="e484" class="usa-checkbox__label usa-checkbox-bordered usa-checkbox-large">
        <h4 class="usa-checkbox-header">Option 2</h4>
        <p>Button support text</p>
      </label>
    </li>
    <li>
      <input id="ea84" class="usa-checkbox__input" type="checkbox" name="befb" disabled>
      <label for="ea84" class="usa-checkbox__label usa-checkbox-bordered usa-checkbox-large">
        <h4 class="usa-checkbox-header">Option 3</h4>
        <p>Button support text</p>
      </label>
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

<label for="e9a4" class="usa-label">Text input validation example</label>
<input id="e9a4" type="text" class="usa-input usa-input-error">
<span class="usa-input-error-message" role="alert">Error message text.</span>

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
<span class="usa-input--error-message" role="alert">Error message text.</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
    <button class="usa-accordion__close-button">Close</button>
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
      <input id="e30e" class="usa-input usa-input--inline usa-input--error" aria-describedby="f9e5" type="number" min="1" max="12">
    </div>
    <div class="usa-form-group usa-form-group--day">
      <label for="b857" class="usa-label">Day</label>
      <input id="b857" class="usa-input usa-input--inline usa-input--error" aria-describedby="f9e5" type="number" min="1" max="31">
    </div>
    <div class="usa-form-group usa-form-group--year">
      <label for="a5dc" class="usa-label">Year</label>
      <input id="a5dc" class="usa-input usa-input--inline usa-input--error" aria-describedby="f9e5" type="number" min="1900" max="2000">
    </div>
  </div>
  <span class="usa-form-hint" id="f9e5">Example: 04 28 1986</span>
  <span class="usa-input--error-message" role="alert">Error message text.</span>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
    <button class="usa-accordion__close-button">Close</button>
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
<span class="usa-input--error-message" role="alert">Error message text.</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
    <button class="usa-accordion__close-button">Close</button>
  </div>
</div>

#### Radio buttons and checkboxes

For radio buttons and checkboxes, simply add an error message directly after the input list. Do not apply `.usa-input--error` to the effected inputs.

<div class="usa-accordion usa-accordion--bordered">
  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-radio-small">
      Radio buttons (small)
    </button>
  </h3>
  <div id="errored-radio-small" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
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
<span class="usa-input--error-message usa-input--error-message-with-icon" role="alert">Error message text.</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
    <button class="usa-accordion__close-button">Close</button>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-radio-normal">
      Radio buttons (normal)
    </button>
  </h3>
  <div id="errored-radio-normal" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list grid-row grid-gap-md">
    <li class="grid-col">
      <input id="e5a0" class="usa-radio__input" type="radio" name="de9e">
      <label for="e5a0" class="usa-radio__label usa-radio-bordered">Option 1</label>
    </li>
    <li class="grid-col">
      <input id="c1a1" class="usa-radio__input" type="radio" name="de9e" checked>
      <label for="c1a1" class="usa-radio__label usa-radio-bordered">Option 2</label>
    </li>
    <li class="grid-col">
      <input id="b8da" class="usa-radio__input" type="radio" name="de9e" disabled>
      <label for="b8da" class="usa-radio__label usa-radio-bordered">Option 3</label>
    </li>
  </ul>
</fieldset>
<span class="usa-input--error-message usa-input--error-message-with-icon" role="alert">Error message text.</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
    <button class="usa-accordion__close-button">Close</button>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-radio-large">
      Radio buttons (large)
    </button>
  </h3>
  <div id="errored-radio-large" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="fdf0" class="usa-radio__input" type="radio" name="ceb9">
      <label for="fdf0" class="usa-radio__label usa-radio-bordered usa-radio-large">
        <!-- Use the accurate heading level to maintain the document outline -->
        <h4 class="usa-radio-header">Option 1</h4>
        <p>Button support text</p>
      </label>
    </li>
    <li>
      <input id="d546" class="usa-radio__input" type="radio" name="ceb9" checked>
      <label for="d546" class="usa-radio__label usa-radio-bordered usa-radio-large">
        <h4 class="usa-radio-header">Option 2</h4>
        <p>Button support text</p>
      </label>
    </li>
    <li>
      <input id="b2bb" class="usa-radio__input" type="radio" name="ceb9" disabled>
      <label for="b2bb" class="usa-radio__label usa-radio-bordered usa-radio-large">
        <h4 class="usa-radio-header">Option 3</h4>
        <p>Button support text</p>
      </label>
    </li>
  </ul>
</fieldset>
<span class="usa-input--error-message usa-input--error-message-with-icon" role="alert">Error message text.</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
    <button class="usa-accordion__close-button">Close</button>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-checkbox-small">
      Checkboxes (small)
    </button>
  </h3>
  <div id="errored-checkbox-small" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
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
<span class="usa-input--error-message usa-input--error-message-with-icon" role="alert">Error message text.</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
    <button class="usa-accordion__close-button">Close</button>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-checkbox-normal">
      Checkboxes (normal)
    </button>
  </h3>
  <div id="errored-checkbox-normal" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list grid-row grid-gap-md">
    <li class="grid-col">
      <input id="ac05" class="usa-checkbox__input" type="checkbox" name="a4b3">
      <label for="ac05" class="usa-checkbox__label usa-checkbox-bordered">Option 1</label>
    </li>
    <li class="grid-col">
      <input id="bce9" class="usa-checkbox__input" type="checkbox" name="a4b3" checked>
      <label for="bce9" class="usa-checkbox__label usa-checkbox-bordered">Option 2</label>
    </li>
    <li class="grid-col">
      <input id="a677" class="usa-checkbox__input" type="checkbox" name="a4b3" disabled>
      <label for="a677" class="usa-checkbox__label usa-checkbox-bordered">Option 3</label>
    </li>
  </ul>
</fieldset>
<span class="usa-input--error-message usa-input--error-message-with-icon" role="alert">Error message text.</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
    <button class="usa-accordion__close-button">Close</button>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-controls="errored-checkbox-large">
      Checkboxes (large)
    </button>
  </h3>
  <div id="errored-checkbox-large" class="usa-accordion__container">
    <div class="usa-accordion__content">
{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="b340" class="usa-checkbox__input" type="checkbox" name="b998">
      <label for="b340" class="usa-checkbox__label usa-checkbox-bordered usa-checkbox-large">
        <!-- Use the accurate heading level to maintain the document outline -->
        <h4 class="usa-checkbox-header">Option 1</h4>
        <p>Button support text</p>
      </label>
    </li>
    <li>
      <input id="aafb" class="usa-checkbox__input" type="checkbox" name="b998" checked>
      <label for="aafb" class="usa-checkbox__label usa-checkbox-bordered usa-checkbox-large">
        <h4 class="usa-checkbox-header">Option 2</h4>
        <p>Button support text</p>
      </label>
    </li>
    <li>
      <input id="dc6c" class="usa-checkbox__input" type="checkbox" name="b998" disabled>
      <label for="dc6c" class="usa-checkbox__label usa-checkbox-bordered usa-checkbox-large">
        <h4 class="usa-checkbox-header">Option 3</h4>
        <p>Button support text</p>
      </label>
    </li>
  </ul>
</fieldset>
<span class="usa-input--error-message usa-input--error-message-with-icon" role="alert">Error message text.</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
    </div>
    <button class="usa-accordion__close-button">Close</button>
  </div>
</div>
