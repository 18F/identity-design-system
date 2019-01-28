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

All tooltips require the `hint` class to function, additional classes are used to control the tooltip's position.

For all options, see the code examples below.


## Using the tooltip with an icon

{% capture icon-tip %}
<span class="hint hint--top hint--no-animate" aria-label="this tooltip includes an icon" tabindex="0">
  <img src="{{ site.baseurl }}/assets/img/tooltip.svg" width="16" height="16" class="px1 img-tooltip" alt="tooltip help icon" />
</span>
{% endcapture %}

{{ icon-tip }}


```html
{{ icon-tip }}
```

## Decorating other elements with a tooltip

As long as the proper classes are applied, any HTML element can be decorated with a tooltip.

{% capture tip-top %}
<a class="hint hint--top hint--no-animate" aria-label="top tip" tabindex="0" href="#">top-aligned tooltip</a>
{% endcapture %}
{{ tip-top }}
```html
{{ tip-top }}
```
<br/>
{% capture tip-left %}
<p class="hint hint--left hint--no-animate" aria-label="left tip" tabindex="0">left-aligned tooltip</p>
{% endcapture %}
{{ tip-left }}
```html
{{ tip-left }}
```
<br/>
{% capture tip-bottom %}
<p class="hint hint--bottom hint--no-animate" aria-label="bottom tip" tabindex="0">bottom-aligned tooltip</p>
{% endcapture %}
{{ tip-bottom }}
```html
{{ icon-bottom }}
```
<br/>
{% capture tip-right %}
<p class="hint hint--right hint--no-animate" aria-label="right tip" tabindex="0">right-aligned tooltip</p>
{% endcapture %}
{{ tip-right }}
```html
{{ tip-right }}
```
<br/>
