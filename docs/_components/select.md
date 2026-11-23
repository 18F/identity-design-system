---
title: Select
lead: Choose one option from a list. This Select does not accept typed text or filter the options.
---

{% include helpers/base-component.html component="select" %}

## Default

{% capture example %}
<div class="usa-form-group usa-input-group--floating">
<label for="ab84" class="usa-label">Dropdown label</label>
<div class="usa-combo-box" data-select-only data-placeholder=" ">
  <select id="ab84" name="selection" class="usa-select">
    <option value>- Select -</option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </select>
</div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
