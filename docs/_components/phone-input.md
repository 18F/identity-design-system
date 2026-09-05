---
title: Phone number input
lead: >
  A phone number input pairs a country selector with a floating-label
  telephone field inside a single pill-shaped control.
---

The country selector is a `<details>` disclosure whose open panel is a styled
`.popover-menu` of radio options — so the menu matches the design system in
every browser (never the native `<select>` popup) and the field still submits
with JavaScript disabled. The number field uses the floating-label pattern:
render the input BEFORE its `.usa-phone-input__label` (the label must be the
input's next sibling) and give the input `placeholder=" "` so
`:placeholder-shown` tracks emptiness.

## Default

{% capture example %}
<div class="usa-phone-input">
  <details class="usa-phone-input__country">
    <summary class="usa-phone-input__country-toggle">
      <span class="usa-phone-input__country-code">+1</span>
      <svg class="usa-icon usa-phone-input__country-chevron" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
    </summary>
    <div class="popover-menu popover-menu--left usa-phone-input__country-list">
      <label class="popover-menu__item usa-phone-input__country-option">
        <input type="radio" class="usa-phone-input__country-radio usa-sr-only" name="phone-country" value="US" checked>
        United States
        <span class="usa-phone-input__country-option-dial">+1</span>
      </label>
      <label class="popover-menu__item usa-phone-input__country-option">
        <input type="radio" class="usa-phone-input__country-radio usa-sr-only" name="phone-country" value="GB">
        United Kingdom
        <span class="usa-phone-input__country-option-dial">+44</span>
      </label>
      <label class="popover-menu__item usa-phone-input__country-option">
        <input type="radio" class="usa-phone-input__country-radio usa-sr-only" name="phone-country" value="FR">
        France
        <span class="usa-phone-input__country-option-dial">+33</span>
      </label>
    </div>
  </details>
  <span class="usa-phone-input__field">
    <input id="pi1" type="tel" class="usa-phone-input__input" placeholder=" ">
    <label for="pi1" class="usa-phone-input__label">Phone number</label>
  </span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Filled

The label stays floated whenever the field holds a value.

{% capture example %}
<div class="usa-phone-input">
  <details class="usa-phone-input__country">
    <summary class="usa-phone-input__country-toggle">
      <span class="usa-phone-input__country-code">+1</span>
      <svg class="usa-icon usa-phone-input__country-chevron" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
    </summary>
    <div class="popover-menu popover-menu--left usa-phone-input__country-list">
      <label class="popover-menu__item usa-phone-input__country-option">
        <input type="radio" class="usa-phone-input__country-radio usa-sr-only" name="phone-country-2" value="US" checked>
        United States
        <span class="usa-phone-input__country-option-dial">+1</span>
      </label>
    </div>
  </details>
  <span class="usa-phone-input__field">
    <input id="pi2" type="tel" class="usa-phone-input__input" placeholder=" " value="(602) 901 - 9304">
    <label for="pi2" class="usa-phone-input__label">Phone number</label>
  </span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
