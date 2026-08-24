---
title: Status badges
lead: >
  Status badges label an item with a short, color-coded status.
---

## Status badges

The `.badge` component is a small inline pill that labels an item with a short
status. Pair the base `.badge` class with a color level, and optionally the
`.badge--dark` surface variant or the square `.badge--icon-only` form.

### Color levels

{% capture example %}
<span class="badge badge--primary">Primary</span>
<span class="badge badge--secondary">Secondary</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--error">Error</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--info">Info</span>
<span class="badge badge--tertiary">Tertiary</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Dark surface

Add `.badge--dark` to any level when the badge sits on a dark background.

{% capture example %}
<span class="badge badge--primary badge--dark">Primary</span>
<span class="badge badge--secondary badge--dark">Secondary</span>
<span class="badge badge--success badge--dark">Success</span>
<span class="badge badge--tertiary badge--dark">Tertiary</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With icon

{% capture example %}
<span class="badge badge--success">
  <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
  Verified
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Icon only

Use `.badge--icon-only` for a square badge that contains a single icon. Provide
an accessible label so the meaning is announced to assistive technology.

{% capture example %}
<span class="badge badge--success badge--icon-only" role="img" aria-label="Verified">
  <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
