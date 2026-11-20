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
the joined inner edges are squared, and a 1px hairline outlines the group. The
segments share the width equally. Use primary, secondary, or tertiary buttons,
and a button size modifier on every segment: large (`usa-button--lg`), medium
(the default), or small (`usa-button--sm`).

{%- assign group_styles = "Primary:,Secondary:usa-button--secondary,Tertiary:usa-button--tertiary" | split: "," -%}
{%- assign group_sizes = "Large:usa-button--lg,Medium:,Small:usa-button--sm" | split: "," -%}
{% for style in group_styles -%}
{%- assign style_parts = style | split: ":" %}

### {{ style_parts[0] }}

{% for size in group_sizes -%}
{%- assign size_parts = size | split: ":" -%}
{%- assign button_class = "usa-button " | append: style_parts[1] | append: " " | append: size_parts[1] | replace: "  ", " " | strip -%}
{% capture example %}
<ul class="usa-button-group usa-button-group--segmented">
  <li class="usa-button-group__item">
    <button type="button" class="{{ button_class }}">{{ size_parts[0] }}</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="{{ button_class }}">{{ size_parts[0] }}</button>
  </li>
  <li class="usa-button-group__item">
    <button type="button" class="{{ button_class }}">{{ size_parts[0] }}</button>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}
{% endfor %}
{%- endfor %}
