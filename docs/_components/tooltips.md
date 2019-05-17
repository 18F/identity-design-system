---
title: Tooltips
lead: >
  Tooltips are used to display help text to the user in an unobtrusive way.
---

Tooltips can be useful means to display information to a user, most typically in forms, without adding clutter to the visual presentation of your user experience.

**Before using a tooltip,** it is important to consider if the information the tooltip is intended to convey makes more sense as a label for a given form field or section.

**All tooltips must include a `tabindex` and `aria-label` property.** This ensures that the tooltips display correctly to the user and can be triggered by a mouse, keyboard, or assistive device. Tooltips can be triggered by hovering when using a mouse, tapping in the case of a mobile device, or focusing by tab key.

## Using the tooltip with an icon

{% capture example %}
<span class="usa-tooltip usa-tooltip--top" aria-label="Hello there! You look nice today." tabindex="0">
  <img src="{{ site.baseurl }}/assets/img/tooltip.svg" width="16" height="16" class="text-middle" alt="Help icon" />
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Large tooltips

Add the class `.usa-tooltip--large` to enhance!

{% capture example %}
<div class="usa-tooltip usa-tooltip--top usa-tooltip--large bg-primary-lightest padding-1" aria-label="Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all [folks] are created equal." tabindex="0">
  This element has a lot of tooltip text.
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Positioning tooltips

As long as the proper classes are applied, any HTML element can be decorated with a tooltip.

{% capture example %}
<div class="usa-tooltip usa-tooltip--top bg-primary-lightest padding-1" aria-label="Right here, in fact." tabindex="0">
  This element has a tooltip above it.
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

{% capture example %}
<div class="usa-tooltip usa-tooltip--left bg-primary-lightest padding-1" aria-label="Everything you own in the box to the left!" tabindex="0">
  This element has a tooltip to the left, to the left.
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

{% capture example %}
<div class="usa-tooltip usa-tooltip--bottom bg-primary-lightest padding-1" aria-label="Down low! ✋" tabindex="0">
  This element has a tooltip below it.
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

{% capture example %}
<div class="usa-tooltip usa-tooltip--right bg-primary-lightest padding-1" aria-label="… I ran out of jokes." tabindex="0">
  This element has a tooltip to the right of it.
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
