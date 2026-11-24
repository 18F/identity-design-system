---
title: Status badges
lead: >
  Status badges label an item with a short, color-coded status.
---

Status badges use the same `.badge` component as [Badges]({{ site.baseurl }}/badges/).
Use text or a recognizable icon to communicate the condition, not color alone.
Give icon-only badges an accessible name describing what the status means.

## Comparison

{% capture example %}
{% include helpers/badge-comparison.html levels="info,success,warning,error" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Dark surface

{% capture example %}
{% include helpers/badge-comparison.html levels="info,success,warning,error" dark=true %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Usage examples

{% capture example %}
<span class="badge badge--success">
  <svg class="usa-icon" aria-hidden="true"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#check-circle"></use></svg>
  Verified account
</span>
<span class="badge badge--success">
  <svg class="usa-icon" aria-hidden="true"><use href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#lock"></use></svg>
  Unphishable
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
