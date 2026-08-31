---
title: Select
lead: A select component allows users to choose one option from a temporary modal menu.
---

{% include helpers/base-component.html component="select" %}

## Default

{% capture example %}
<label for="ab84" class="usa-label">Dropdown label</label>
<div class="usa-combo-box">
  <select id="ab84" class="usa-select">
    <option value>- Select -</option>
    <option value="value1">Option A</option>
    <option value="value2">Option B</option>
    <option value="value3">Option C</option>
  </select>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
