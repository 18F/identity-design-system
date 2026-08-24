---
title: Status page icon
lead: >
  A status page icon is a large, centered illustration used on confirmation
  and status screens.
---

## Status page icon

Apply `.status-page__icon` to a large icon or illustration to give it a
consistent size on status screens.

{% capture example %}
<svg class="status-page__icon text-primary" role="img" aria-label="Success">
  <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
</svg>
{% endcapture %}
{% include helpers/code-example.html code=example %}
