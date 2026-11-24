---
title: Image Example
lead: Image examples pair photos with Do and Don't captions to explain how to take an acceptable photo.
---

NDS uses text labels without icons. The legacy theme also shows a check or error
icon beside the label.

## Image Example Do

{% capture example %}
<div class="usa-image-example usa-image-example--correct">
  <figure class="usa-image-example__figure">
    <img class="usa-image-example__image" alt="ID card on a solid dark background" src="{{ site.baseurl }}/img/ID-dos-donts_ID_do-02.png" />
    <figcaption class="usa-image-example__figcaption">
      <ul class="usa-icon-list usa-icon-list--size-md">
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#check-circle"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content">
            <span class="image-example__do-dont">DO: </span>Use a solid, dark background.
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
    <img alt="ID card on a white background" class="usa-image-example__image usa-image-example__image--bordered" src="{{ site.baseurl }}/img/ID-dos-donts_ID_dont-02.png" />
    <figcaption class="usa-image-example__figcaption">
      <ul class="usa-icon-list usa-icon-list--size-md">
        <li class="usa-icon-list__item">
          <div class="usa-icon-list__icon">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#error"></use>
            </svg>
          </div>
          <div class="usa-icon-list__content">
            <span class="image-example__do-dont">DON'T: </span>Use a white background.
          </div>
        </li>
      </ul>
    </figcaption>
  </figure>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
