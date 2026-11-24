---
title: Tags
lead: Tags are static text labels, not buttons or status indicators.
---

## Base

Use a base tag for a neutral label. In NDS it uses the Secondary
[badge]({{ site.baseurl }}/badges/) style. Default matches the Small badge;
Big uses Medium badge spacing with 12px corners and keeps the same label size.

### Default

{% capture example %}
<span class="usa-tag">Optional</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Big

{% capture example %}
<span class="usa-tag usa-tag--big">Optional</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Informative

Use an informative tag to emphasize a label like “Recommended” or “New feature.”
In NDS it uses the Primary badge style. For success, warning, or error conditions,
use a [status badge]({{ site.baseurl }}/status-badge/) instead.

### Default

{% capture example %}
<span class="usa-tag usa-tag--informative">Recommended</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Big

{% capture example %}
<span class="usa-tag usa-tag--informative usa-tag--big">Recommended</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
