---
title: Tooltip
lead: >
  Tooltips show a short, informative message when a user focuses or hovers over
  an element.
---

{% include helpers/base-component.html component="tooltip" %}

## Tooltip

A tooltip pairs a trigger with a short message. Add the `usa-tooltip` class and
a `title` to the trigger; the message appears when the trigger is hovered or
focused. Use `data-position` to choose which side the message appears on.

{% assign tooltip_copy = "Additional context appears here." %}

### Top

{% capture example %}
<button type="button" class="usa-button usa-tooltip" data-position="top" title="{{ tooltip_copy }}">
  Hover for details
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Bottom

{% capture example %}
<button type="button" class="usa-button usa-tooltip" data-position="bottom" title="{{ tooltip_copy }}">
  Hover for details
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Left

{% capture example %}
<button type="button" class="usa-button usa-tooltip" data-position="left" title="{{ tooltip_copy }}">
  Hover for details
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Right

{% capture example %}
<button type="button" class="usa-button usa-tooltip" data-position="right" title="{{ tooltip_copy }}">
  Hover for details
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}
