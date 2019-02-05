---
title: Alerts
lead: >
  Alerts keep users informed of important and sometimes time-sensitive changes.
subnav:
  - text: Limiting Alert Width
    href: "#limiting-alert-width"
  - text: Types of Alerts
    href: "#types-of-alerts"
---

# Limiting Alert Width

If desired for aesthetics, the background coloring for alerts can be constrained to the width of a paragraph by appending the `usa-alert-paragraph` class to the `usa-alert` container.

<div class="usa-alert usa-alert-paragraph">
  <div class="usa-alert-body">
    <p>This “Other”-styled alert is constrained to the width of a paragraph. It works well when an alert is displayed in the context of a larger document, with paragraphs of text before or after it.</p>
  </div>
</div>

Without the `usa-alert-paragraph` class, alert messages can look a little silly when used with paragraph text:

<div class="usa-alert">
  <div class="usa-alert-body">
    <p>This “Other”-styled alert is full width. It can look a little silly when combined with paragraph-width text.</p>
  </div>
</div>

This is a following paragraph, to demostrate the width of the above alert message more clearly.

# Types of Alerts

## Success

{% capture example %}
<div class="usa-alert usa-alert-success">
  <div class="usa-alert-body">
    <p class="usa-alert-text">Banner text</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Warning

{% capture example %}
<div class="usa-alert usa-alert-warning">
  <div class="usa-alert-body">
    <p class="usa-alert-text">Banner text</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Error

{% capture example %}
<div class="usa-alert usa-alert-error">
  <div class="usa-alert-body">
    <p class="usa-alert-text">Banner text</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Information

{% capture example %}
<div class="usa-alert usa-alert-info">
  <div class="usa-alert-body">
    <p class="usa-alert-text">Banner text</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Other

{% capture example %}
<div class="usa-alert">
  <div class="usa-alert-body">
    <p class="usa-alert-text">Banner text</p>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
