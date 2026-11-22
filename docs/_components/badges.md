---
title: Badges
lead: >
  Badges identify or emphasize an item without implying a status.
---

Use Primary for the most prominent label, Secondary for a quieter label, or
Tertiary for an outline. Badges are informational, not buttons.
For conditions such as success or warning, use [Status badges]({{ site.baseurl }}/status-badge/).

## Comparison

{% capture example %}
{% include helpers/badge-comparison.html levels="primary,secondary,tertiary" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Dark surface

{% capture example %}
{% include helpers/badge-comparison.html levels="primary,secondary,tertiary" dark=true %}
{% endcapture %}
{% include helpers/code-example.html code=example %}
