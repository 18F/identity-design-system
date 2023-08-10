---
title: Image Example
lead: An image example displays an image with a do/don't header to help users upload  images correctly.
---

This is not a component in the USWDS design system.

## Image Example Do


{% capture example %}
<div class="image-example">
  <div class='grid-row flex-row flex-align-center'>
    <div class='tablet:grid-col-5'>
      <img class="bottom-border-green" src="{{ site.baseurl }}/img/ID-dos-donts_ID_do-02.png" />
    </div>
  </div>
  <div class='grid-row flex-row flex-align-center'>
    <div class='tablet:grid-col-5'>
  <ul class="usa-icon-list usa-icon-list--size-md">
    <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-green">
        <svg class="usa-icon" aria-hidden="true" role="img">
          <use xlink:href="/assets/img/sprite.svg#check_circle"></use>
        </svg>
      </div>
      <div class="usa-icon-list__content">
        <span class="text-green">DO: </span><span>Use a solid, dark background. Make the text longer for testing the way the word wrap behaves.</span>
      </div>
    </li>
  </ul>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}


{% capture example %}
<div class="image-example">
  <img class="bottom-border-green" src="{{ site.baseurl }}/img/ID-dos-donts_ID_do-02.png" />
  <ul class="usa-icon-list usa-icon-list--size-md">
    <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-green">
        <svg class="usa-icon" aria-hidden="true" role="img">
          <use xlink:href="/assets/img/sprite.svg#check_circle"></use>
        </svg>
      </div>
      <div class="usa-icon-list__content">
        <span class="text-green">DO: </span><span>Use a solid, dark background. Make the text longer for testing the way the word wrap behaves.</span>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Image Example Dont

{% capture example %}
<div class="image-example">
  <img class="bottom-border-red" src="{{ site.baseurl }}/img/ID-dos-donts_ID_dont-02.png" />
  <ul class="usa-icon-list usa-icon-list--size-md">
    <li class="usa-icon-list__item">
      <div class="usa-icon-list__icon text-red">
        <svg class="usa-icon" aria-hidden="true" role="img">
          <use xlink:href="/assets/img/sprite.svg#cancel"></use>
        </svg>
      </div>
      <div class="usa-icon-list__content">
        <span class="text-red">DON'T: </span><span>Use a white background. Make the text longer for testing the way the word wrap behaves.</span>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}