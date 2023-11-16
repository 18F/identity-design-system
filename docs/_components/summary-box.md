---
title: Summary Box
lead: >
  A summary box highlights key information from a longer page or displays next steps.
---

{% include helpers/base-component.html component="summary-box" %}

## Default

{% capture example %}
<div
  class="usa-summary-box"
  role="region"
  aria-labelledby="summary-box-key-information"
>
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading" id="summary-box-key-information">
      Key information
    </h3>
    <div class="usa-summary-box__text">
      <ul class="usa-list">
        <li>
          If you are under a winter storm warning,
          <a class="usa-summary-box__link" href="">find shelter</a> right away.
        </li>
        <li>
          Sign up for
          <a class="usa-summary-box__link" href=""
            >your community’s warning system</a
          >.
        </li>
        <li>
          Learn the signs of, and basic treatments for,
          <a class="usa-summary-box__link" href="">frostbite</a> and
          <a class="usa-summary-box__link" href="">hypothermia</a>.
        </li>
        <li>
          Gather emergency supplies for your
          <a class="usa-summary-box__link" href="">home</a> and your
          <a class="usa-summary-box__link" href="">car</a>.
        </li>
      </ul>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
