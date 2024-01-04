---
title: Select
lead: A select component allows users to choose one option from a temporary modal menu.
---

{% include helpers/base-component.html component="select" %}

## Default

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

## Big

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
