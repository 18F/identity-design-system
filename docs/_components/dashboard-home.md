---
title: Dashboard home
lead: The signed-in dashboard landing layout with a greeting and service discovery list.
---

## Dashboard home

The `.dashboard-home` layout stacks a `.dashboard-home__greeting` above a
`.discovery` section. The discovery list uses `.discovery__list` as a panel and
renders each service as a `.discovery-service` row with a mark or logo, content,
and actions.

{% capture example %}
<div class="dashboard-home">
  <h1 class="dashboard-home__greeting">Welcome back, Alex</h1>
  <section class="discovery" aria-labelledby="discovery-heading">
    <div class="discovery__header">
      <h2 class="discovery__heading" id="discovery-heading">Explore services</h2>
      <p class="discovery__description">Sign in to participating government services with your account.</p>
    </div>
    <div class="discovery__list">
      <ul class="discovery__rows">
        <li class="discovery-service">
          <span class="discovery-service__mark" aria-hidden="true">SA</span>
          <div class="discovery-service__content">
            <p class="discovery-service__title">Sample Agency</p>
            <p class="discovery-service__description">Apply for and manage benefits.</p>
          </div>
          <div class="discovery-service__actions">
            <a class="usa-button" href="#">Sign in</a>
          </div>
        </li>
        <li class="discovery-service">
          <span class="discovery-service__mark" aria-hidden="true">EX</span>
          <div class="discovery-service__content">
            <p class="discovery-service__title">Example Service</p>
            <p class="discovery-service__description">View your application status.</p>
          </div>
          <div class="discovery-service__actions">
            <a class="usa-button" href="#">Sign in</a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Row states

Add a state modifier to a `.discovery-service` row to match the agency's
relationship to the account. Stateful rows keep their trailing control inline
at every width; on narrow viewports the mark shrinks to 40px and the title
truncates to one line.

### Disconnected

`.discovery-service--disconnected` shows the service description and a
secondary "Connect" link. On narrow viewports the link collapses to an
external-link icon; its text stays available to assistive technology.

{% capture example %}
<div class="discovery__list">
  <ul class="discovery__rows">
    <li class="discovery-service discovery-service--disconnected">
      <span class="discovery-service__mark" aria-hidden="true">SA</span>
      <div class="discovery-service__content">
        <p class="discovery-service__title">Sample Agency</p>
        <p class="discovery-service__description">Apply for and manage benefits.</p>
      </div>
      <div class="discovery-service__actions">
        <a class="usa-button usa-button--secondary discovery-service__connect" href="#">
          <span class="discovery-service__connect-label">Connect<span class="usa-sr-only"> to Sample Agency</span></span>
          <svg class="usa-icon discovery-service__connect-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#launch"></use></svg>
        </a>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Connected

`.discovery-service--connected` lists when the account connected and the email
it shared, with an icon-only secondary button that opens the row's actions.

{% capture example %}
<div class="discovery__list">
  <ul class="discovery__rows">
    <li class="discovery-service discovery-service--connected">
      <span class="discovery-service__mark" aria-hidden="true">SA</span>
      <div class="discovery-service__content">
        <p class="discovery-service__title">Sample Agency</p>
        <p class="discovery-service__description">Connected January 28, 2026 at 1:56 PM</p>
        <p class="discovery-service__description">alex@example.com</p>
      </div>
      <div class="discovery-service__actions">
        <button type="button" class="usa-button usa-button--secondary usa-button--icon-only">
          <span class="usa-sr-only">Actions for Sample Agency</span>
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#more_horiz"></use></svg>
        </button>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Authorized

`.discovery-service--authorized` shows only the service name and a switch
(`.usa-checkbox__input--switch`). The switch label is visually hidden and
names the service.

{% capture example %}
<div class="discovery__list">
  <ul class="discovery__rows">
    <li class="discovery-service discovery-service--authorized">
      <span class="discovery-service__mark" aria-hidden="true">SA</span>
      <div class="discovery-service__content">
        <p class="discovery-service__title">Sample Agency</p>
      </div>
      <div class="discovery-service__actions usa-checkbox">
        <input id="discovery-service-authorized-1" class="usa-checkbox__input usa-checkbox__input--switch" type="checkbox" role="switch" aria-checked="false">
        <label for="discovery-service-authorized-1" class="usa-checkbox__label"><span class="usa-sr-only">Share data with Sample Agency</span></label>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
