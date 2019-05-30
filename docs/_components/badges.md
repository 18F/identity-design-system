---
title: Badges
lead: >
  Badges are used to encourage user behavior throughout the site.
---

Badges can help signal to the user that they had completed a workflow desired by Login.gov. Primarily, these are used on our user account page to encourage more secure practices. 

Badges are comprised with a div using the `verification-badge` class and then a `span` with a small svg image and the text of the badge.

## An unphishable badge example

{% capture example %}
<div class="lg-verification-badge">
    <span>
        <img src="{{ site.baseurl }}/assets/img/alerts/unphishable.svg" width="16" height="16" class="text-middle" alt="unphishable icon" id="unphishable_badge" />
        Unphishable
    </span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## An verified account badge example

{% capture example %}
<div class="lg-verification-badge">
    <span>
        <img src="{{ site.baseurl }}/assets/img/alerts/success-badge.svg" width="16" height="16" class="text-middle" alt="verification icon" id="verified_account_badge" />
        Verified Account
    </span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}



