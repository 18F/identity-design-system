---
title: Checkbox
lead: Checkboxes allow users to select one or more options from a list.
---

{% include helpers/base-component.html component="checkbox" %}

## Default

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="dee5" class="usa-checkbox__input" type="checkbox" name="dee5">
      <label for="dee5" class="usa-checkbox__label">Option - Unchecked</label>
    </li>
    <li>
      <input id="nhjq" class="usa-checkbox__input usa-focus" type="checkbox" name="nhjq">
      <label for="nhjq" class="usa-checkbox__label">Option - Unchecked Focus</label>
    </li>
    <li>
      <input id="b711" class="usa-checkbox__input" type="checkbox" name="b711" checked>
      <label for="b711" class="usa-checkbox__label">Option - Checked</label>
    </li>
    <li>
      <input id="ojqb" class="usa-checkbox__input usa-focus" type="checkbox" name="ojqb" checked>
      <label for="ojqb" class="usa-checkbox__label">Option - Checked Focus</label>
    </li>
    <li>
      <input id="badc" class="usa-checkbox__input" type="checkbox" name="badc" disabled>
      <label for="badc" class="usa-checkbox__label">Option - Disabled</label>
    </li>
    <li>
      <input id="adcb" class="usa-checkbox__input" type="checkbox" name="adcb" disabled checked>
      <label for="adcb" class="usa-checkbox__label">Option - Disabled and Checked</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Bordered

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="d30c" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="d30c">
      <label for="d30c" class="usa-checkbox__label">Option - Unchecked</label>
    </li>
    <li>
      <input id="lipc" class="usa-checkbox__input usa-checkbox__input--bordered usa-focus" type="checkbox" name="lipc">
      <label for="lipc" class="usa-checkbox__label">Option - Unchecked Focus</label>
    </li>
    <li>
      <input id="a123" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="a123" checked>
      <label for="a123" class="usa-checkbox__label">Option - Checked</label>
    </li>
    <li>
      <input id="xqgt" class="usa-checkbox__input usa-checkbox__input--bordered usa-focus" type="checkbox" name="xqgt" checked>
      <label for="xqgt" class="usa-checkbox__label">Option - Checked Focus</label>
    </li>
    <li>
      <input id="c6b3" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="c6b3" disabled>
      <label for="c6b3" class="usa-checkbox__label">Option - Disabled</label>
    </li>
    <li>
      <input id="6b3c" class="usa-checkbox__input usa-checkbox__input--bordered" type="checkbox" name="6b3c" disabled checked>
      <label for="6b3c" class="usa-checkbox__label">Option - Disabled and Checked</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Tile

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="c288" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="c288">
      <label for="c288" class="usa-checkbox__label">Option - Unchecked<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
    <li>
      <input id="hx88" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="hx88">
        <label for="hx88" class="usa-checkbox__label usa-checkbox__label--illustrated">
        <div class="usa-checkbox__image">
          <img alt="" src="{{ site.baseurl }}/img/fingerprint-icon.svg">
        </div>
        <div class="usa-checkbox__label--text">
          Option - Illustration
          <span class="usa-checkbox__label-description">Support text</span>
        </div>
      </label>
    </li>
    <li>
      <input id="u22j" class="usa-checkbox__input usa-checkbox__input--tile usa-focus" type="checkbox" name="u22j">
      <label for="u22j" class="usa-checkbox__label">Option - Unchecked Focus<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
    <li>
      <input id="e484" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="e484" checked>
      <label for="e484" class="usa-checkbox__label">Option - Checked<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
    <li>
      <input id="afeg" class="usa-checkbox__input usa-checkbox__input--tile usa-focus" type="checkbox" name="afeg" checked>
      <label for="afeg" class="usa-checkbox__label">Option - Checked Focus<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
    <li>
      <input id="ea84" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="ea84" disabled>
      <label for="ea84" class="usa-checkbox__label">Option - Disabled<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
    <li>
      <input id="a84e" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" name="a84e" disabled checked>
      <label for="a84e" class="usa-checkbox__label">Option - Disabled and Checked<span class="usa-checkbox__label-description">Support text</span></label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
