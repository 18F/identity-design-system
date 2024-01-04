---
title: Radio Buttons
lead: Radio buttons allow users to select exactly one choice from a group.
---

{% include helpers/base-component.html component="radio-buttons" stylesheet="radio" %}

## Default

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="fa61" class="usa-radio__input" type="radio" name="fa61">
      <label for="fa61" class="usa-radio__label">Option - Unselected</label>
    </li>
    <li>
      <input id="zeh4" class="usa-radio__input usa-focus" type="radio" name="zeh4">
      <label for="zeh4" class="usa-radio__label">Option - Unselected Focus</label>
    </li>
    <li>
      <input id="a786" class="usa-radio__input" type="radio" name="a786" checked>
      <label for="a786" class="usa-radio__label">Option - Selected</label>
    </li>
    <li>
      <input id="s3vb" class="usa-radio__input usa-focus" type="radio" name="s3vb" checked>
      <label for="s3vb" class="usa-radio__label">Option - Selected Focus</label>
    </li>
    <li>
      <input id="b306" class="usa-radio__input" type="radio" name="b306" disabled>
      <label for="b306" class="usa-radio__label">Option - Disabled</label>
    </li>
    <li>
      <input id="306b" class="usa-radio__input" type="radio" name="306b" disabled checked>
      <label for="306b" class="usa-radio__label">Option - Disabled and Selected</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Bordered

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="a7e9" class="usa-radio__input usa-radio__input--bordered" type="radio" name="a7e9">
      <label for="a7e9" class="usa-radio__label">Option - Unselected</label>
    </li>
    <li>
      <input id="rzb8" class="usa-radio__input usa-radio__input--bordered usa-focus" type="radio" name="rzb8">
      <label for="rzb8" class="usa-radio__label">Option - Unselected Focus</label>
    </li>
    <li>
      <input id="ahfa" class="usa-radio__input usa-radio__input--bordered" type="radio" name="ahfa" checked>
      <label for="ahfa" class="usa-radio__label">Option - Selected</label>
    </li>
    <li>
      <input id="rkg9" class="usa-radio__input usa-radio__input--bordered usa-focus" type="radio" name="rkg9" checked>
      <label for="rkg9" class="usa-radio__label">Option - Selected Focus</label>
    </li>
    <li>
      <input id="db6f" class="usa-radio__input usa-radio__input--bordered" type="radio" name="db6f" disabled>
      <label for="db6f" class="usa-radio__label">Option - Disabled</label>
    </li>
    <li>
      <input id="b6fd" class="usa-radio__input usa-radio__input--bordered" type="radio" name="b6fd" disabled checked>
      <label for="b6fd" class="usa-radio__label">Option - Disabled and Selected</label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Tile

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="a8c1" class="usa-radio__input usa-radio__input--tile" type="radio" name="a8c1">
      <label for="a8c1" class="usa-radio__label">Option - Unselected<span class="usa-radio__label-description">Support text</span></label>
    </li>
    <li>
      <input id="g6pz" class="usa-radio__input usa-radio__input--tile" type="radio" name="g6pz">
      <label for="g6pz" class="usa-radio__label usa-radio__label--illustrated">
        <img alt="" class="usa-radio__image" src="{{ site.baseurl }}/img/fingerprint-icon.svg">
        <div class="usa-radio__label--text">
          Option - Illustration
          <span class="usa-radio__label-description">Support text</span>
        </div>
      </label>
    </li>
    <li>
      <input id="t6wh" class="usa-radio__input usa-radio__input--tile usa-focus" type="radio" name="t6wh">
      <label for="t6wh" class="usa-radio__label">Option - Unselected Focus<span class="usa-radio__label-description">Support text</span></label>
    </li>
    <li>
      <input id="b4ed" class="usa-radio__input usa-radio__input--tile" type="radio" name="b4ed" checked>
      <label for="b4ed" class="usa-radio__label">Option - Selected<span class="usa-radio__label-description">Support text</span></label>
    </li>
    <li>
      <input id="v9h3" class="usa-radio__input usa-radio__input--tile usa-focus" type="radio" name="v9h3" checked>
      <label for="v9h3" class="usa-radio__label">Option - Selected Focus<span class="usa-radio__label-description">Support text</span></label>
    </li>
    <li>
      <input id="b93f" class="usa-radio__input usa-radio__input--tile" type="radio" name="b93f" disabled>
      <label for="b93f" class="usa-radio__label">Option - Disabled<span class="usa-radio__label-description">Support text</span></label>
    </li>
    <li>
      <input id="93fb" class="usa-radio__input usa-radio__input--tile" type="radio" name="93fb" disabled checked>
      <label for="93fb" class="usa-radio__label">Option - Disabled and Selected<span class="usa-radio__label-description">Support text</span></label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
