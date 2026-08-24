---
title: Tooltip
lead: >
  Tooltips show a short, informative message when a user focuses or hovers over
  an element.
---

## Tooltip

A tooltip pairs a trigger with a bubble. The bubble becomes visible when the
`is-set` and `is-visible` classes are applied to `.usa-tooltip__body`; the
examples below add those classes so the bubble paints statically.

### Top

{% capture example %}
<span class="usa-tooltip">
  <button type="button" class="usa-tooltip__trigger" aria-describedby="tooltip-top">
    Hover for details
  </button>
  <span id="tooltip-top" class="usa-tooltip__body usa-tooltip__body--top is-set is-visible" role="tooltip">
    Additional context appears here.
  </span>
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Bottom

{% capture example %}
<span class="usa-tooltip">
  <button type="button" class="usa-tooltip__trigger" aria-describedby="tooltip-bottom">
    Hover for details
  </button>
  <span id="tooltip-bottom" class="usa-tooltip__body usa-tooltip__body--bottom is-set is-visible" role="tooltip">
    Additional context appears here.
  </span>
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Left

{% capture example %}
<span class="usa-tooltip">
  <button type="button" class="usa-tooltip__trigger" aria-describedby="tooltip-left">
    Hover for details
  </button>
  <span id="tooltip-left" class="usa-tooltip__body usa-tooltip__body--left is-set is-visible" role="tooltip">
    Additional context appears here.
  </span>
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Right

{% capture example %}
<span class="usa-tooltip">
  <button type="button" class="usa-tooltip__trigger" aria-describedby="tooltip-right">
    Hover for details
  </button>
  <span id="tooltip-right" class="usa-tooltip__body usa-tooltip__body--right is-set is-visible" role="tooltip">
    Additional context appears here.
  </span>
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Wrapping long text

Add `usa-tooltip__body--wrap` to let a longer message wrap onto multiple lines.

{% capture example %}
<span class="usa-tooltip">
  <button type="button" class="usa-tooltip__trigger" aria-describedby="tooltip-wrap">
    Hover for details
  </button>
  <span id="tooltip-wrap" class="usa-tooltip__body usa-tooltip__body--top usa-tooltip__body--wrap is-set is-visible" role="tooltip">
    This message is long enough to wrap onto more than one line inside the tooltip bubble.
  </span>
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
