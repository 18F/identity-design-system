---
title: Buttons
lead: >
  Use buttons to signal actions.
subnav:
  - text: Button sizes and states
    href: "#button-sizes-and-states"
  - text: Button widths
    href: "#button-widths"
---

{% include helpers/base-component.html component="button" %}

## Button sizes and states

### Default

### Primary

{% include helpers/embed.html embed="buttons/default-primary" %}

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
