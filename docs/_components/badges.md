---
title: Badges
lead: >
  Badges are used to encourage user behavior throughout the site.
---

Badges can help signal to the user that they had completed a workflow desired by Login.gov. Primarily, these are used on our user account page to encourage more secure practices.

Badges are comprised with a div using the `lg-verification-badge` class and a small SVG image alongside a `span` of text.

## An unphishable badge example

The unphishable badge is used to indicate that an account is only using security keys as its MFA method.

{% include helpers/embed.html embed="badges/unphishable" %}

## A verified account badge example

A verfied account badge is used to indicate that an account has completed the identity verification process.

{% include helpers/embed.html embed="badges/verified-account" %}
