---
title: Button Groups
---

{% include helpers/base-component.html component="button-group" %}

## Segmented

### Default

{% capture example %}
<ul class="usa-button-group usa-button-group--segmented">
  <li class="usa-button-group__item">
    <button type="button" class="usa-button">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--outline">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--outline">Button</button>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Big

{% capture example %}
<ul class="usa-button-group usa-button-group--segmented">
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--big">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--big usa-button--outline">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--big usa-button--outline">Button</button>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}
