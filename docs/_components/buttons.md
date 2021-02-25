---
title: Buttons
lead: >
  Use buttons to signal actions.
subnav:
  - text: Standard Buttons
    href: "#standard-buttons"
---

{% include helpers/base-component.html component="button" stylesheet="buttons" %}

## Standard Buttons

Use the standard button styles to convey the most important action on you want the users to take. See the [USWDS Button Usage](https://v2.designsystem.digital.gov/components/button/) for more on how to use buttons.

##### Primary

```html
<button class="usa-button">
```

<button class="usa-button">Default</button>
<button class="usa-button usa-button--hover">Hover</button>
<button class="usa-button usa-button--active">Active</button>
<button class="usa-button usa-focus">Focus</button>
<button class="usa-button" disabled>Disabled</button>

##### Secondary

```html
<button class="usa-button usa-button--outline">
```

<button class="usa-button usa-button--outline">Default</button>
<button class="usa-button usa-button--outline usa-button--hover">Hover</button>
<button class="usa-button usa-button--outline usa-button--active">Active</button>
<button class="usa-button usa-button--outline usa-focus">Focus</button>
<button class="usa-button usa-button--outline" disabled>Disabled</button>

##### Danger

```html
<button class="usa-button usa-button--danger">
```

<button class="usa-button usa-button--danger">Default</button>
<button class="usa-button usa-button--danger usa-button--hover">Hover</button>
<button class="usa-button usa-button--danger usa-button--active">Active</button>
<button class="usa-button usa-button--danger usa-focus">Focus</button>
<button class="usa-button usa-button--danger" disabled>Disabled</button>

##### Unstyled

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
