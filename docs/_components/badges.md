---
title: Badges
lead: >
  Badges are used to encourage user behavior throughout the site.
---

Badges can help signal to the user that they had completed a workflow desired by Login.gov. Primarily, these are used on our user account page to encourage more secure practices.

Badges are comprised with a div using the `lg-verification-badge` class and a small SVG image alongside a `span` of text.

## An unphishable badge example

The unphishable badge is used to indicate that an account is only using security keys as its MFA method.

{% capture example %}
<div class="lg-verification-badge">
  <svg class="usa-icon text-success" aria-hidden="true" focusable="false" role="img">
    <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#lock"></use>
  </svg>
  Unphishable
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## A verified account badge example

A verfied account badge is used to indicate that an account has completed the identity verification process.

{% capture example %}
<div class="lg-verification-badge">
  <svg class="usa-icon text-success" aria-hidden="true" focusable="false" role="img">
    <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
  </svg>
  Verified Account
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
