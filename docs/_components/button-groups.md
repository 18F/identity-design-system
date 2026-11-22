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

Segments share a perimeter stroke, without internal dividers or an exterior
shadow. Each uses the corresponding standalone button's size and label style.
If a label wraps, all segments grow to match the tallest one.

{% capture example %}
{% assign styles = 'Primary,Secondary,Tertiary' | split: ',' %}
{% assign sizes = 'Large,Medium,Small' | split: ',' %}
<div style="max-width: 27rem; margin-inline: auto;">
  {% for style in styles %}
  <h3>{{ style }}</h3>
  {% for size in sizes %}
  <small>{{ size }}</small>
  <ul class="usa-button-group usa-button-group--segmented margin-bottom-2" aria-label="{{ style }}, {{ size }}">
    {% for segment in (1..3) %}
    <li class="usa-button-group__item">
      <button type="button" class="usa-button{% unless style == 'Primary' %} usa-button--{{ style | downcase }}{% endunless %}{% if size == 'Large' %} usa-button--lg{% elsif size == 'Small' %} usa-button--sm{% endif %}">Label</button>
    </li>
    {% endfor %}
  </ul>
  {% endfor %}
  {% endfor %}
  <h3>Wrapping labels</h3>
  <ul class="usa-button-group usa-button-group--segmented" aria-label="Account actions" style="max-width: 16rem;">
    {% assign actions = 'View account details,Save a copy,Print' | split: ',' %}
    {% for action in actions %}
    <li class="usa-button-group__item">
      <button type="button" class="usa-button usa-button--sm">{{ action }}</button>
    </li>
    {% endfor %}
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
