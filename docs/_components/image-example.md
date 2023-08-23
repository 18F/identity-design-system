---
title: Image Example
lead: An image example displays an image with a do/don't header to help users upload  images correctly.
---

This is not a component in the USWDS design system.

## Image Example Do


{% capture example %}
<div class="usa-image-example--correct">
  <figure class="usa-image-example__figure">
    <img alt="correct example, use dark background" src="{{ site.baseurl }}/img/ID-dos-donts_ID_do-02.png" />
    <figcaption class="usa-image-example__figcaption">
      <ul class="usa-icon-list usa-icon-list--size-md">
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check_circle"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content">
            <span class="image-example__do-dont">DO: </span>Use a solid, dark background, but make the text longer for testing the way the word wrap behaves.
          </div>
        </li>
      </ul>
    </figcaption>
  </figure>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Image Example Don't

{% capture example %}
<div class="usa-image-example usa-image-example--incorrect">
  <figure class="usa-image-example__figure">
    <img alt="incorrect example, dont use light colored background" class="usa-image-example__img--bordered" src="{{ site.baseurl }}/img/ID-dos-donts_ID_dont-02.png" />
    <figcaption class="usa-image-example__figcaption">
      <ul class="usa-icon-list usa-icon-list--size-md">
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#cancel"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content">
            <span class="image-example__do-dont">DON'T: </span>Use a white background, but make the text longer for testing the way the word wrap behaves.
          </div>
        </li>
      </ul>
    </figcaption>
  </figure>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}