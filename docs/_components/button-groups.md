---
title: Button Groups
---

{% include helpers/base-component.html component="button-group" %}

## Default

A horizontal row of standalone buttons separated by a fixed gap.

{% capture example %}
<ul class="usa-button-group">
  <li class="usa-button-group__item">
    <button type="button" class="usa-button">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--secondary">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--tertiary">Button</button>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Segmented

The buttons join into a single control: the outer corners keep the pill radius,
the joined inner edges are squared, and the segments share one elevated surface.

### Primary

{% capture example %}
<ul class="usa-button-group usa-button-group--segmented">
  <li class="usa-button-group__item">
    <button type="button" class="usa-button">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button">Button</button>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Secondary

{% capture example %}
<ul class="usa-button-group usa-button-group--segmented">
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--secondary">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--secondary">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--secondary">Button</button>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Tertiary

{% capture example %}
<ul class="usa-button-group usa-button-group--segmented">
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--tertiary">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--tertiary">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--tertiary">Button</button>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Sizes

Segments follow the button sizes — large, medium (default), and small.

{% capture example %}
<ul class="usa-button-group usa-button-group--segmented">
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--lg">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--lg">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--lg">Button</button>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}

{% capture example %}
<ul class="usa-button-group usa-button-group--segmented">
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--sm">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--sm">Button</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="usa-button usa-button--sm">Button</button>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}
