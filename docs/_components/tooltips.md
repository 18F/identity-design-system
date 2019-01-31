---
title: Tooltips
lead: >
  Tooltips are used to display help text to the user in an unobtrusive way
---

Tooltips can be useful means to display information to a user, most typically in forms, without adding
clutter to the visual presentation of your user experience.

Before using a tooltip, it is important to consider if the information the tooltip is intended to convey
makes more sense as a label for a given form field or section.

All tooltips must include a `tabindex` and `aria-label` property. This ensures that the tooltips display correctly
to the user and can be triggered by a mouse, keyboard, or assistive device. When using a mouse, tooltips can be triggered
by hovering, or clicking in the case of a mobile device.

All tooltips require the `tooltip` class to function, additional classes are used to control the tooltip's position.
The `usa-tooltip-large` class can also be used to control the width of the tooltip bubble.

For all options, see the code examples below.


## Using the tooltip with an icon

{% capture icon-tip %}
<span class="usa-tooltip usa-tooltip-top usa-tooltip-large" aria-label="this tooltip includes an icon" tabindex="0">
  <img src="{{ site.baseurl }}/assets/img/tooltip.svg" width="16" height="16" class="text-middle" alt="tooltip help icon" />
</span>
{% endcapture %}

{{ icon-tip }}


```html
{{ icon-tip }}
```

## Decorating other elements with a tooltip

As long as the proper classes are applied, any HTML element can be decorated with a tooltip.

{% capture tip-top %}
<a class="usa-tooltip usa-tooltip-top" aria-label="top tip" tabindex="0" href="#">
  top-aligned tooltip
</a>
{% endcapture %}


{% include helpers/code-example.html code=tip-top %}
<br/>

{% capture tip-left %}
<p class="usa-tooltip usa-tooltip-left" aria-label="left tip" tabindex="0">
  left-aligned tooltip
</p>
{% endcapture %}

{{ tip-left }}
{% include helpers/code-example.html code=tip-left %}
<br/>

{% capture tip-bottom %}
<p class="usa-tooltip usa-tooltip-bottom" aria-label="bottom tip" tabindex="0">
  bottom-aligned tooltip
</p>
{% endcapture %}

{{ tip-bottom }}
{% include helpers/code-example.html code=tip-bottom %}
<br/>

{% capture tip-right %}
<p class="usa-tooltip usa-tooltip-right" aria-label="right tip" tabindex="0">
  right-aligned tooltip
</p>
{% endcapture %}

{{ tip-right }}
{% include helpers/code-example.html code=tip-right %}
<br/>
