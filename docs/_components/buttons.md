---
title: Buttons
lead: >
  Use buttons to signal actions.
subnav:
  - text: Button sizes and states
    href: "#button-sizes-and-states"
  - text: Button sizes
    href: "#button-sizes"
  - text: Button widths
    href: "#button-widths"
---

{% include helpers/base-component.html component="button" %}

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
