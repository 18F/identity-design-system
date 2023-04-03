---
title: Alerts
lead: >
  Alerts keep users informed of important and sometimes time-sensitive changes.
subnav:
  - text: Types of Alerts
    href: "#types-of-alerts"
---

{% include helpers/base-component.html component="alert" stylesheet="alerts" %}

## Alert Usage

In the application user interface, alerts should be used whenever a user initiates an action and returns to the same place once the action is complete or fails.

If the action is part of a flow, meaning the user will advance to another step or fail out, a separate screen or view should be used to indicate success of failure.

Visit the [USWDS Alerts component](https://designsystem.digital.gov/components/alert/) page for more information and usage examples

## Types of Alerts

### Success

{% capture example %}
<div class="usa-alert usa-alert--success">
  <div class="usa-alert__body">
    <p class="usa-alert__text">Banner text</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Warning

{% capture example %}
<div class="usa-alert usa-alert--warning">
  <div class="usa-alert__body">
    <p class="usa-alert__text">Banner text</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Error

{% capture example %}
<div class="usa-alert usa-alert--error">
  <div class="usa-alert__body">
    <p class="usa-alert__text">Banner text</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Information

{% capture example %}
<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <p class="usa-alert__text">Banner text</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Other

{% capture example %}
<div class="usa-alert usa-alert--other">
  <div class="usa-alert__body">
    <p class="usa-alert__text">Banner text</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
