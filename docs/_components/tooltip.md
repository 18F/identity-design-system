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

### Positions

The message bubble (`usa-tooltip__body`) in each of its four positions, shown
statically. The pointer sits on the side facing the trigger: a `--top` bubble
points down, `--bottom` points up, `--left` points right, and `--right` points
left. The live examples below show the bubbles on hover or focus.

<div class="margin-y-3" style="display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; padding: 0.5rem;">
  <span class="usa-tooltip__body usa-tooltip__body--top is-set is-visible" style="position: relative;">Tooltip</span>
  <span class="usa-tooltip__body usa-tooltip__body--bottom is-set is-visible" style="position: relative;">Tooltip</span>
  <span class="usa-tooltip__body usa-tooltip__body--left is-set is-visible" style="position: relative;">Tooltip</span>
  <span class="usa-tooltip__body usa-tooltip__body--right is-set is-visible" style="position: relative;">Tooltip</span>
</div>

### Top

{% capture example %}
<button type="button" class="usa-button usa-tooltip" data-position="top" title="Additional context appears here.">
  Hover for details
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Bottom

{% capture example %}
<button type="button" class="usa-button usa-tooltip" data-position="bottom" title="Additional context appears here.">
  Hover for details
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Left

{% capture example %}
<button type="button" class="usa-button usa-tooltip" data-position="left" title="Additional context appears here.">
  Hover for details
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Right

{% capture example %}
<button type="button" class="usa-button usa-tooltip" data-position="right" title="Additional context appears here.">
  Hover for details
</button>
{% endcapture %}
{% include helpers/code-example.html code=example %}
