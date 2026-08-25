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
