---
title: Buttons
lead: >
  Use buttons to signal actions.
subnav:
  - text: Variants, sizes, and icons
    href: "#variants-sizes-and-icons"
  - text: Icon buttons
    href: "#icon-buttons"
  - text: Button sizes and states
    href: "#button-sizes-and-states"
  - text: Button sizes
    href: "#button-sizes"
  - text: Button widths
    href: "#button-widths"
---

{% include helpers/base-component.html component="button" %}

{%- assign button_variants = "Primary:,Secondary:usa-button--secondary,Tertiary:usa-button--tertiary,Outline:usa-button--outline,Destructive:usa-button--danger" | split: "," -%}
{%- assign button_sizes = "Large:usa-button--lg,Medium:usa-button--md,Small:usa-button--sm" | split: "," -%}
{%- assign button_states = "Default:,Hover:usa-button--hover,Pressed:usa-button--active,Focus:usa-focus,Disabled:disabled" | split: "," -%}
{%- capture button_icon -%}<svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#add"></use></svg>{%- endcapture -%}

## Variants, sizes, and icons

Every variant comes in three sizes (`usa-button--lg` 56px, `usa-button--md` 44px, the default, and
`usa-button--sm` 36px) and three icon placements: none, `usa-button--icon-left`, and
`usa-button--icon-right`. The icon modifiers tighten the padding on the icon side. Destructive
buttons use `usa-button--danger`. Hover, pressed, and focus are shown with the
`usa-button--hover`, `usa-button--active`, and `usa-focus` state classes.

{% capture example %}
<button class="usa-button usa-button--icon-left">
  {{ button_icon }}
  Label
</button>
<button class="usa-button usa-button--icon-right">
  Label
  {{ button_icon }}
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

{% for variant in button_variants -%}
{%- assign variant_parts = variant | split: ":" %}
### {{ variant_parts[0] }}
{% if variant_parts[0] == "Secondary" %}
Secondary hover and pressed (a `base-lighter` fill with ink text) are not shown here: the
`usa-button--hover` and `usa-button--active` state classes have no secondary treatment in the
default stylesheet, where they fail color contrast. The secondary icon buttons below show them.
{% endif %}
<div>
{%- for size in button_sizes -%}
{%- assign size_parts = size | split: ":" %}
<h4>{{ size_parts[0] }}</h4>
{%- for placement in (1..3) %}
<div class="margin-bottom-2" style="display: flex; flex-wrap: wrap; align-items: center; gap: 1rem;">
{%- for state in button_states -%}
{%- assign state_parts = state | split: ":" -%}
{%- if variant_parts[0] == "Secondary" -%}{%- if state_parts[1] == "usa-button--hover" or state_parts[1] == "usa-button--active" -%}{%- continue -%}{%- endif -%}{%- endif -%}
{%- if state_parts[1] == "disabled" -%}{%- assign state_class = "" -%}{%- assign state_attr = " disabled" -%}{%- else -%}{%- assign state_class = state_parts[1] -%}{%- assign state_attr = "" -%}{%- endif -%}
{%- if placement == 2 -%}{%- assign icon_class = "usa-button--icon-left" -%}{%- elsif placement == 3 -%}{%- assign icon_class = "usa-button--icon-right" -%}{%- else -%}{%- assign icon_class = "" -%}{%- endif %}
  <button class="usa-button {{ variant_parts[1] }} {{ size_parts[1] }} {{ icon_class }} {{ state_class }}"{{ state_attr }}>{% if placement == 2 %}{{ button_icon }}{% endif %}{{ state_parts[0] }}{% if placement == 3 %}{{ button_icon }}{% endif %}</button>
{%- endfor %}
</div>
{%- endfor -%}
{%- endfor %}
</div>
{% endfor %}

## Icon buttons

Add `usa-button--icon-only` to a button that holds a single icon and no visible label. It renders
as a circle as wide as the size's height. Give it an accessible name with `aria-label`.

{% capture example %}
<button class="usa-button usa-button--icon-only" aria-label="Add">
  {{ button_icon }}
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

{% for variant in button_variants limit: 4 -%}
{%- assign variant_parts = variant | split: ":" %}
### {{ variant_parts[0] }} icon button

<div>
{%- for size in button_sizes -%}
{%- assign size_parts = size | split: ":" %}
<div class="margin-bottom-2" style="display: flex; flex-wrap: wrap; align-items: center; gap: 1rem;">
{%- for state in button_states -%}
{%- assign state_parts = state | split: ":" -%}
{%- if state_parts[1] == "disabled" -%}{%- assign state_class = "" -%}{%- assign state_attr = " disabled" -%}{%- else -%}{%- assign state_class = state_parts[1] -%}{%- assign state_attr = "" -%}{%- endif %}
  <button class="usa-button {{ variant_parts[1] }} {{ size_parts[1] }} usa-button--icon-only {{ state_class }}" aria-label="{{ size_parts[0] }} {{ state_parts[0] }}"{{ state_attr }}>{{ button_icon }}</button>
{%- endfor %}
</div>
{%- endfor %}
</div>
{% endfor %}

## Button sizes and states

### Default

### Primary

```html
<button class="usa-button">
```

<div>
  <button class="usa-button">Default</button>
  <button class="usa-button usa-button--hover">Hover</button>
  <button class="usa-button usa-button--active">Active</button>
  <button class="usa-button usa-focus">Focus</button>
  <button class="usa-button" disabled>Disabled</button>
</div>

### Outline

```html
<button class="usa-button usa-button--outline">
```

<div>
  <button class="usa-button usa-button--outline">Default</button>
  <button class="usa-button usa-button--outline usa-button--hover">Hover</button>
  <button class="usa-button usa-button--outline usa-button--active">Active</button>
  <button class="usa-button usa-button--outline usa-focus">Focus</button>
  <button class="usa-button usa-button--outline" disabled>Disabled</button>
</div>

### Danger

```html
<button class="usa-button usa-button--danger">
```

<div>
  <button class="usa-button usa-button--danger">Default</button>
  <button class="usa-button usa-button--danger usa-button--hover">Hover</button>
  <button class="usa-button usa-button--danger usa-button--active">Active</button>
  <button class="usa-button usa-button--danger usa-focus">Focus</button>
  <button class="usa-button usa-button--danger" disabled>Disabled</button>
</div>

### Danger Outline

```html
<button class="usa-button usa-button--danger usa-button--outline">
```

<div>
  <button class="usa-button usa-button--danger usa-button--outline">Default</button>
  <button class="usa-button usa-button--danger usa-button--outline usa-button--hover">Hover</button>
  <button class="usa-button usa-button--danger usa-button--outline usa-button--active">Active</button>
  <button class="usa-button usa-button--danger usa-button--outline usa-focus">Focus</button>
  <button class="usa-button usa-button--danger usa-button--outline" disabled>Disabled</button>
</div>

### Unstyled

```html
<button class="usa-button usa-button--unstyled">
```

<div>
  {% include helpers/unstyled-button.html text="Default" %}
  {% include helpers/unstyled-button.html text="Hover" extra_classes="usa-button--hover" %}
  {% include helpers/unstyled-button.html text="Active" extra_classes="usa-button--active" %}
  {% include helpers/unstyled-button.html text="Focus" extra_classes="usa-focus" %}
  {% include helpers/unstyled-button.html text="Disabled" extra_attributes="disabled" %}
</div>

### Big

### Primary

```html
<button class="usa-button usa-button--big">
```

<div>
  <button class="usa-button usa-button--big">Default</button>
  <button class="usa-button usa-button--big usa-button--hover">Hover</button>
  <button class="usa-button usa-button--big usa-button--active">Active</button>
  <button class="usa-button usa-button--big usa-focus">Focus</button>
  <button class="usa-button usa-button--big" disabled>Disabled</button>
</div>

### Outline

```html
<button class="usa-button usa-button--big usa-button--outline">
```

<div>
  <button class="usa-button usa-button--big usa-button--outline">Default</button>
  <button class="usa-button usa-button--big usa-button--outline usa-button--hover">Hover</button>
  <button class="usa-button usa-button--big usa-button--outline usa-button--active">Active</button>
  <button class="usa-button usa-button--big usa-button--outline usa-focus">Focus</button>
  <button class="usa-button usa-button--big usa-button--outline" disabled>Disabled</button>
</div>

### Danger

```html
<button class="usa-button usa-button--big usa-button--danger">
```

<div>
  <button class="usa-button usa-button--big usa-button--danger">Default</button>
  <button class="usa-button usa-button--big usa-button--danger usa-button--hover">Hover</button>
  <button class="usa-button usa-button--big usa-button--danger usa-button--active">Active</button>
  <button class="usa-button usa-button--big usa-button--danger usa-focus">Focus</button>
  <button class="usa-button usa-button--big usa-button--danger" disabled>Disabled</button>
</div>

### Danger Outline

```html
<button class="usa-button usa-button--big usa-button--danger usa-button--outline">
```

<div>
  <button class="usa-button usa-button--big usa-button--danger usa-button--outline">Default</button>
  <button class="usa-button usa-button--big usa-button--danger usa-button--outline usa-button--hover">Hover</button>
  <button class="usa-button usa-button--big usa-button--danger usa-button--outline usa-button--active">Active</button>
  <button class="usa-button usa-button--big usa-button--danger usa-button--outline usa-focus">Focus</button>
  <button class="usa-button usa-button--big usa-button--danger usa-button--outline" disabled>Disabled</button>
</div>

### Unstyled

```html
<button class="usa-button usa-button--unstyled">
```

<div>
  {% include helpers/unstyled-button.html text="Default" extra_classes="usa-button--big" %}
  {% include helpers/unstyled-button.html text="Hover" extra_classes="usa-button--hover usa-button--big" %}
  {% include helpers/unstyled-button.html text="Active" extra_classes="usa-button--active usa-button--big" %}
  {% include helpers/unstyled-button.html text="Focus" extra_classes="usa-focus usa-button--big" %}
  {% include helpers/unstyled-button.html text="Disabled" extra_attributes="disabled" extra_classes="usa-button--big" %}
</div>

### Secondary

```html
<button class="usa-button usa-button--secondary">
```

<div>
  <button class="usa-button usa-button--secondary">Default</button>
  <button class="usa-button usa-button--secondary usa-focus">Focus</button>
  <button class="usa-button usa-button--secondary" disabled>Disabled</button>
</div>

### Tertiary

```html
<button class="usa-button usa-button--tertiary">
```

<div>
  <button class="usa-button usa-button--tertiary">Default</button>
  <button class="usa-button usa-button--tertiary usa-button--hover">Hover</button>
  <button class="usa-button usa-button--tertiary usa-button--active">Active</button>
  <button class="usa-button usa-button--tertiary usa-focus">Focus</button>
  <button class="usa-button usa-button--tertiary" disabled>Disabled</button>
</div>

### Quaternary

```html
<button class="usa-button usa-button--quaternary">
```

<div>
  <button class="usa-button usa-button--quaternary">Default</button>
  <button class="usa-button usa-button--quaternary usa-button--hover">Hover</button>
  <button class="usa-button usa-button--quaternary usa-button--active">Active</button>
  <button class="usa-button usa-button--quaternary usa-focus">Focus</button>
  <button class="usa-button usa-button--quaternary" disabled>Disabled</button>
</div>

### Ghost

```html
<button class="usa-button usa-button--ghost">
```

<div>
  <button class="usa-button usa-button--ghost">Default</button>
  <button class="usa-button usa-button--ghost usa-button--hover">Hover</button>
  <button class="usa-button usa-button--ghost usa-button--active">Active</button>
  <button class="usa-button usa-button--ghost usa-focus">Focus</button>
  <button class="usa-button usa-button--ghost" disabled>Disabled</button>
</div>

## Button sizes

The `usa-button--big` modifier is equivalent to `usa-button--lg`.

### Small

```html
<button class="usa-button usa-button--sm">
```

<div>
  <button class="usa-button usa-button--sm">Default</button>
  <button class="usa-button usa-button--sm usa-button--hover">Hover</button>
  <button class="usa-button usa-button--sm usa-button--active">Active</button>
  <button class="usa-button usa-button--sm usa-focus">Focus</button>
  <button class="usa-button usa-button--sm" disabled>Disabled</button>
</div>

### Medium

```html
<button class="usa-button usa-button--md">
```

<div>
  <button class="usa-button usa-button--md">Default</button>
  <button class="usa-button usa-button--md usa-button--hover">Hover</button>
  <button class="usa-button usa-button--md usa-button--active">Active</button>
  <button class="usa-button usa-button--md usa-focus">Focus</button>
  <button class="usa-button usa-button--md" disabled>Disabled</button>
</div>

### Large

```html
<button class="usa-button usa-button--lg">
```

<div>
  <button class="usa-button usa-button--lg">Default</button>
  <button class="usa-button usa-button--lg usa-button--hover">Hover</button>
  <button class="usa-button usa-button--lg usa-button--active">Active</button>
  <button class="usa-button usa-button--lg usa-focus">Focus</button>
  <button class="usa-button usa-button--lg" disabled>Disabled</button>
</div>

## Button widths

### Flexible width

Default button width for desktop viewports.

```html
<button class="usa-button">
```

<button class="usa-button">Default</button>

<button class="usa-button usa-button--big">Default</button>

Use `usa-button--flexible-width` to set flexible width buttons for mobile.

```html
<button class="usa-button usa-button--flexible-width">
```

<button class="usa-button usa-button--flexible-width">Default</button>

<button class="usa-button usa-button--flexible-width usa-button--big">Default</button>

### Minimum width

Use `usa-button--wide` to set a minimum button width for desktop viewports.

```html
<button class="usa-button usa-button--wide">
```

<button class="usa-button usa-button--wide">Default</button>

<button class="usa-button usa-button--wide usa-button--big">Default</button>

### Full width

All buttons default to full width for mobile viewports.

Use `usa-button--full-width` to set full-width buttons for desktop viewports.

```html
<button class="usa-button use-button--full-width">
```

<button class="usa-button usa-button--full-width">Default</button>

<button class="usa-button usa-button--full-width usa-button--big">Default</button>
