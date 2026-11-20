---
title: Select
lead: A select component allows users to choose one option from a temporary modal menu.
---

{% include helpers/base-component.html component="select" %}

## Floating label

The library dropdown shows its label inside the control like a placeholder and
floats it to the top once an option is chosen. Wrap the label and the
`.usa-combo-box` in a `.usa-form-group.usa-input-group--floating` and give the
combo-box `data-placeholder=" "` (and `data-default-value` for a preselected option). The open menu is a rounded card (16px radius,
4px padding, `shadow-large`, at most 300px tall) 4px below the control; option
rows are 12px-radius Body/M rows.

The interactive states can't be shown statically: **hovered** darkens the border
to `base-darkest`; **active** (open) draws a 2px `base-darkest` stroke, flips the
chevron up, and opens the menu while the label stays resting; **active -
hovered** also tints the hovered row `base-lightest`.

### Default

{% capture example %}
<div class="usa-form-group usa-input-group--floating">
  <label for="select-floating-default" class="usa-label">Label</label>
  <div class="usa-combo-box" data-placeholder=" ">
    <select id="select-floating-default" class="usa-select" name="select-floating-default">
    <option value></option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
    <option value="option5">Option 5</option>
    <option value="option6">Option 6</option>
    <option value="option7">Option 7</option>
    </select>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Filled

{% capture example %}
<div class="usa-form-group usa-input-group--floating">
  <label for="select-floating-filled" class="usa-label">Label</label>
  <div class="usa-combo-box" data-placeholder=" " data-default-value="option3">
    <select id="select-floating-filled" class="usa-select" name="select-floating-filled">
    <option value></option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
    <option value="option5">Option 5</option>
    <option value="option6">Option 6</option>
    <option value="option7">Option 7</option>
    </select>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Visible label

### Default

{% capture example %}
<label for="ab84" class="usa-label">Dropdown label</label>
<div class="usa-combo-box" data-placeholder="- Select -">
  <select id="ab84" class="usa-select">
    <option value>- Select -</option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </select>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
