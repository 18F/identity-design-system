---
title: Icon
lead: >
  Icons use the USWDS icon sizing contract and stay aligned when placed
  alongside text in flex rows.
---

## Icon

Apply `.usa-icon` to an inline SVG that references the icon sprite. The icon
keeps its alignment next to adjacent text.

{% capture example %}
<span class="display-flex flex-align-center">
  <svg class="usa-icon" aria-hidden="true" role="img">
    <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#lock"></use>
  </svg>
  <span class="margin-left-1">Secure</span>
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
