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
  <img src="{{ site.baseurl }}/assets/img/alerts/unphishable.svg" width="16" height="16" class="text-middle" alt="unphishable icon" id="unphishable_badge" />
  <span>Unphishable</span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## A verified account badge example

A verfied account badge is used to indicate that an account has completed the identity verification process.

{% capture example %}
<div class="lg-verification-badge">
  <img src="{{ site.baseurl }}/assets/img/alerts/success-badge.svg" width="16" height="16" class="text-middle" alt="verification icon" id="verified_account_badge" />
  <span>Verified Account</span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
