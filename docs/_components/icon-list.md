---
title: Icon List
lead: An icon list reinforces the meaning and visibility of individual list items with a leading icon.
---

{% include helpers/base-component.html component="icon-list" %}

## Default

{% capture example %}
    <ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      <h2 class="usa-icon-list__title">Donate cash when possible.</h2>
      <p>
        Financial contributions to recognized disaster relief organizations are
        the fastest, most flexible and most effective method of donating.
        Organizations on the ground know what items and quantities are needed,
        often buy in bulk with discounts and, if possible, purchase through
        businesses local to the disaster, which supports economic recovery.
      </p>
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      <h2 class="usa-icon-list__title">Confirm what donations are needed.</h2>
      <p>
        Unneeded and unsolicited goods burden local organizations’ ability to
        meet survivors’ confirmed needs, drawing away valuable volunteer labor,
        transportation and warehouse space.
      </p>
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      <h2 class="usa-icon-list__title">
        Talk to trusted organizations about volunteering.
      </h2>
      <p>
        Financial contributions to recognized disaster relief organizations are
        the fastest, most flexible and most effective method of donating.
        Organizations on the ground know what items and quantities are needed,
        often buy in bulk with discounts and, if possible, purchase through
        businesses local to the disaster, which supports economic recovery.
      </p>
    </div>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Simple 

{% capture example %}
    <ul class="usa-icon-list">
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">
      Wash your hands for 20 seconds with soap
    </div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-green">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="/assets/img/sprite.svg#check_circle"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Stay six feet away from others</div>
  </li>
  <li class="usa-icon-list__item">
    <div class="usa-icon-list__icon text-red">
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="/assets/img/sprite.svg#cancel"></use>
      </svg>
    </div>
    <div class="usa-icon-list__content">Avoid large gatherings</div>
  </li>
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}