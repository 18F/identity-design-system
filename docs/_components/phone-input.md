---
title: Phone number input
lead: >
  A phone number input pairs a country selector with a floating-label
  telephone field inside a single pill-shaped control.
---

The country selector is a `<details>` disclosure whose open panel is a styled
`.popover-menu` of radio options — so the menu matches the design system in
every browser (never the native `<select>` popup) and the field still submits
with JavaScript disabled. The `phoneInput` behavior (`phoneInput.on()`)
progressively enhances the control: choosing a country updates the `+N` dial
code shown on the toggle and closes the disclosure. The number field uses the
floating-label pattern:
render the input BEFORE its `.usa-phone-input__label` (the label must be the
input's next sibling) and give the input a `placeholder` (the
`(000) 000 - 0000` format hint, or `" "`) so `:placeholder-shown` tracks
emptiness. The placeholder only shows while the field is focused.

## Default

The option list is supplied by the consuming app (login.gov renders it from its
supported-country data), one `.usa-phone-input__country-option` per country.

{% capture example %}
<div class="usa-phone-input">
  <details class="usa-phone-input__country">
    <summary class="usa-phone-input__country-toggle">
      <span class="usa-phone-input__country-code">+1</span>
      <svg class="usa-icon usa-phone-input__country-chevron" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 12.2322L4.70711 6.93934L3.29289 8.35355L10 15.0607L16.7071 8.35355L15.2929 6.93934L10 12.2322Z"/></svg>
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
    <input id="pi1" type="tel" class="usa-phone-input__input" placeholder="(000) 000 - 0000">
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
      <svg class="usa-icon usa-phone-input__country-chevron" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 12.2322L4.70711 6.93934L3.29289 8.35355L10 15.0607L16.7071 8.35355L15.2929 6.93934L10 12.2322Z"/></svg>
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
    <input id="pi2" type="tel" class="usa-phone-input__input" placeholder="(000) 000 - 0000" value="(602) 906 - 5822">
    <label for="pi2" class="usa-phone-input__label">Phone number</label>
  </span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Read only

A read-only number sits on the disabled-light surface and does not react to hover.

{% capture example %}
<div class="usa-phone-input">
  <details class="usa-phone-input__country">
    <summary class="usa-phone-input__country-toggle">
      <span class="usa-phone-input__country-code">+1</span>
      <svg class="usa-icon usa-phone-input__country-chevron" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 12.2322L4.70711 6.93934L3.29289 8.35355L10 15.0607L16.7071 8.35355L15.2929 6.93934L10 12.2322Z"/></svg>
    </summary>
    <div class="popover-menu popover-menu--left usa-phone-input__country-list">
      <label class="popover-menu__item usa-phone-input__country-option">
        <input type="radio" class="usa-phone-input__country-radio usa-sr-only" name="phone-country-3" value="US" checked>
        United States
        <span class="usa-phone-input__country-option-dial">+1</span>
      </label>
    </div>
  </details>
  <span class="usa-phone-input__field">
    <input id="pi3" type="tel" class="usa-phone-input__input" placeholder="(000) 000 - 0000" value="(602) 906 - 5822" readonly>
    <label for="pi3" class="usa-phone-input__label">Phone number</label>
  </span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Error

Set `aria-invalid="true"` on the number field to turn the pill red, and follow
the pill with a `.usa-error-message`.

{% capture example %}
<div class="usa-phone-input">
  <details class="usa-phone-input__country">
    <summary class="usa-phone-input__country-toggle">
      <span class="usa-phone-input__country-code">+1</span>
      <svg class="usa-icon usa-phone-input__country-chevron" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 12.2322L4.70711 6.93934L3.29289 8.35355L10 15.0607L16.7071 8.35355L15.2929 6.93934L10 12.2322Z"/></svg>
    </summary>
    <div class="popover-menu popover-menu--left usa-phone-input__country-list">
      <label class="popover-menu__item usa-phone-input__country-option">
        <input type="radio" class="usa-phone-input__country-radio usa-sr-only" name="phone-country-4" value="US" checked>
        United States
        <span class="usa-phone-input__country-option-dial">+1</span>
      </label>
    </div>
  </details>
  <span class="usa-phone-input__field">
    <input id="pi4" type="tel" class="usa-phone-input__input" placeholder="(000) 000 - 0000" aria-invalid="true" aria-describedby="pi4-error">
    <label for="pi4" class="usa-phone-input__label">Phone number</label>
  </span>
</div>
<span class="usa-error-message" id="pi4-error" role="alert">
  <svg class="usa-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M13.2 18h-2.4v-7.2h2.4zm.24-10.56c0 .795-.36 1.44-1.44 1.44s-1.44-.645-1.44-1.44S10.92 6 12 6s1.44.645 1.44 1.44"/><path fill="currentColor" fill-rule="evenodd" d="M12 1.2C6 1.2 1.2 6 1.2 12S6 22.8 12 22.8 22.8 18 22.8 12 18 1.2 12 1.2m0 2.4c4.68 0 8.4 3.72 8.4 8.4s-3.72 8.4-8.4 8.4-8.4-3.72-8.4-8.4S7.32 3.6 12 3.6" clip-rule="evenodd"/></svg>
  Error message
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Interactive states

These can't be shown statically: **hovered** darkens the pill border to
`base-darkest`; **focused** draws a 2px `base-darkest` stroke, floats the label,
and shows the `(000) 000 - 0000` placeholder in 45% ink with a `primary` caret;
**focused filled** is the same with a value.
