---
title: Dashboard home
lead: The signed-in landing page with a greeting, connected services, and suggestions.
---

## Dashboard home

The dashboard owns the greeting and page layout. It renders the same agency lists,
seals, and actions as the [Connected services]({{ site.baseurl }}/connected-services/) example.

{% capture example %}
<div class="dashboard-home connected-services-page">
  <h1 class="dashboard-home__greeting">Good morning</h1>
  {% include helpers/connected-services.html compact_month=true %}
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Authorized service

The authorization switch is a separate discovery row, not a Connect or Disconnect action.
Existing `.discovery-service` row classes remain supported for older markup.

`.discovery-service--authorized` shows only the service name and a switch
(`.usa-checkbox__input--switch`). The switch label is visually hidden and
names the service.

{% capture example %}
<div class="discovery__list">
  <ul class="discovery__rows">
    <li class="discovery-service discovery-service--authorized">
      <img class="agency-seal discovery-service__logo" src="{{ site.baseurl }}/img/agency-seals/medicare.webp" width="48" height="48" alt="">
      <div class="discovery-service__content">
        <p class="discovery-service__title">Medicare.gov</p>
      </div>
      <div class="discovery-service__actions usa-checkbox">
        <input id="discovery-service-authorized-1" class="usa-checkbox__input usa-checkbox__input--switch" type="checkbox" role="switch">
        <label for="discovery-service-authorized-1" class="usa-checkbox__label"><span class="usa-sr-only">Share data with Medicare.gov</span></label>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
