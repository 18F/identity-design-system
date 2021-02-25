---
title: Buttons
lead: >
  Use buttons to signal actions.
subnav:
  - text: Standard Buttons
    href: "#standard-buttons"
  - text: Button Widths
    href: "#button-widths"
---

{% include helpers/base-component.html component="button" stylesheet="buttons" %}

## Standard Buttons

Use the standard button styles to convey the most important action on you want the users to take. See the [USWDS Button Usage](https://v2.designsystem.digital.gov/components/button/) for more on how to use buttons.

### Primary

```html
<button class="usa-button">
```

<button class="usa-button">Default</button>
<button class="usa-button usa-button--hover">Hover</button>
<button class="usa-button usa-button--active">Active</button>
<button class="usa-button usa-focus">Focus</button>
<button class="usa-button" disabled>Disabled</button>

### Secondary

```html
<button class="usa-button usa-button--outline">
```

<button class="usa-button usa-button--outline">Default</button>
<button class="usa-button usa-button--outline usa-button--hover">Hover</button>
<button class="usa-button usa-button--outline usa-button--active">Active</button>
<button class="usa-button usa-button--outline usa-focus">Focus</button>
<button class="usa-button usa-button--outline" disabled>Disabled</button>

### Danger

```html
<button class="usa-button usa-button--danger">
```

<button class="usa-button usa-button--danger">Default</button>
<button class="usa-button usa-button--danger usa-button--hover">Hover</button>
<button class="usa-button usa-button--danger usa-button--active">Active</button>
<button class="usa-button usa-button--danger usa-focus">Focus</button>
<button class="usa-button usa-button--danger" disabled>Disabled</button>

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

## Button Widths

### Flexible width

Default button width for desktop viewports.

```html
<button class="usa-button">
```

<button class="usa-button">Default</button>

<button class="usa-button usa-button--big">Default</button>

### Minimum width

Use to set a minimum button width for desktop viewports.

```html
<button class="usa-button usa-button--wide">
```

<button class="usa-button usa-button--wide">Default</button>

<button class="usa-button usa-button--wide usa-button--big">Default</button>

### Full width

All buttons default to full width for mobile viewports.

```html
<button class="usa-button use-button--full-width">
```

<button class="usa-button usa-button--full-width">Default</button>

<button class="usa-button usa-button--full-width usa-button--big">Default</button>
