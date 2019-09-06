---
title: Buttons
lead: >
  Use buttons to signal actions.
subnav:
  - text: Standard Buttons
    href: "#standard-buttons"
  - text: Other Buttons
    href: "#other-buttons"
---

## Standard Buttons

Use the standard button styles to convey the most important action on you want the users to take. For actions outside of the top two actions, use the [other buttons](#other-buttons). See the [USWDS Button Usage](https://v2.designsystem.digital.gov/components/button/) for more on how to use buttons.

Note: the  vertical alignment of a button is governed by the [layout grid](/layout).

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

##### Success

```html
<button class="usa-button usa-button--success">
```

<button class="usa-button usa-button--success">Default</button>
<button class="usa-button usa-button--success usa-button--hover">Hover</button>
<button class="usa-button usa-button--success usa-button--active">Active</button>
<button class="usa-button usa-button--success usa-focus">Focus</button>
<button class="usa-button usa-button--success" disabled>Disabled</button>

##### Danger

```html
<button class="usa-button usa-button--danger">
```

<button class="usa-button usa-button--danger">Default</button>
<button class="usa-button usa-button--danger usa-button--hover">Hover</button>
<button class="usa-button usa-button--danger usa-button--active">Active</button>
<button class="usa-button usa-button--danger usa-focus">Focus</button>
<button class="usa-button usa-button--danger" disabled>Disabled</button>

## Other Buttons

Use these buttons if the actions are not among the top two actions in a view, use an other button to convey action.

##### Function

```html
<button class="usa-button usa-button--inverse usa-button--small">
```

<button class="usa-button usa-button--inverse usa-button--small">Default</button>
<button class="usa-button usa-button--inverse usa-button--small usa-button--hover">Hover</button>
<button class="usa-button usa-button--inverse usa-button--small usa-button--active">Active</button>
<button class="usa-button usa-button--inverse usa-button--small usa-focus">Focus</button>
<button class="usa-button usa-button--inverse usa-button--small" disabled>Disabled</button>

##### Tertiary

```html
<button class="usa-button usa-button--inverse usa-button--tiny">
```

<button class="usa-button usa-button--inverse usa-button--tiny">Default</button>
<button class="usa-button usa-button--inverse usa-button--tiny usa-button--hover">Hover</button>
<button class="usa-button usa-button--inverse usa-button--tiny usa-button--active">Active</button>
<button class="usa-button usa-button--inverse usa-button--tiny usa-focus">Focus</button>
<button class="usa-button usa-button--inverse usa-button--tiny" disabled>Disabled</button>
