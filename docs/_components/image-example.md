---
title: Image Example
lead: An image example displays an image with a do/don't header to help users upload  images correctly.
---

This is not a component in the USWDS design system.

## Image Example Do

{% capture example %}
<div>
  <img style="border-bottom: .5rem solid green;" src="{{ site.baseurl }}/img/ID-dos-donts_ID_do-02.png" />
  <ul class="usa-icon-list usa-icon-list--size-md">
    <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-green">
        <svg class="usa-icon" aria-hidden="true" role="img">
          <use xlink:href="/assets/img/sprite.svg#check_circle"></use>
        </svg>
      </div>
      <div class="usa-icon-list__content">
        <span style="color: green">DO: </span><span>Use a solid, dark background</span>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Image Example Dont

{% capture example %}
<div>
  <img style="border-bottom: .5rem solid red;" src="{{ site.baseurl }}/img/ID-dos-donts_ID_dont-02.png" />
  <ul class="usa-icon-list usa-icon-list--size-md">
    <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-red">
        <svg class="usa-icon" aria-hidden="true" role="img">
          <use xlink:href="/assets/img/sprite.svg#cancel"></use>
        </svg>
      </div>
      <div class="usa-icon-list__content">
        <span style="color: red">DON'T: </span><span>Use a white background</span>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}