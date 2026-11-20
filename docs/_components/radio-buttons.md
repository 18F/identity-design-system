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

The hovered state (blue circle) appears when the pointer is over an enabled
option, so it can't be shown statically.

## With description

Add a `usa-radio__label-description` inside the label. The label text then
reads as the option title, in the semibold weight.

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Group label</legend>
  <ul class="usa-input-list">
    <li>
      <input id="rd01" class="usa-radio__input" type="radio" name="rd01">
      <label for="rd01" class="usa-radio__label">Option - Unselected<span class="usa-radio__label-description">Description text</span></label>
    </li>
    <li>
      <input id="rd02" class="usa-radio__input usa-focus" type="radio" name="rd02">
      <label for="rd02" class="usa-radio__label">Option - Unselected Focus<span class="usa-radio__label-description">Description text</span></label>
    </li>
    <li>
      <input id="rd03" class="usa-radio__input" type="radio" name="rd03" checked>
      <label for="rd03" class="usa-radio__label">Option - Selected<span class="usa-radio__label-description">Description text</span></label>
    </li>
    <li>
      <input id="rd04" class="usa-radio__input usa-focus" type="radio" name="rd04" checked>
      <label for="rd04" class="usa-radio__label">Option - Selected Focus<span class="usa-radio__label-description">Description text</span></label>
    </li>
    <li>
      <input id="rd05" class="usa-radio__input" type="radio" name="rd05" disabled>
      <label for="rd05" class="usa-radio__label">Option - Disabled<span class="usa-radio__label-description">Description text</span></label>
    </li>
    <li>
      <input id="rd06" class="usa-radio__input" type="radio" name="rd06" disabled checked>
      <label for="rd06" class="usa-radio__label">Option - Disabled and Selected<span class="usa-radio__label-description">Description text</span></label>
    </li>
  </ul>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Bordered

A bordered option draws the radio and its label in a full-width card. The
card keeps the same surface and hairline in every state.

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

## Flat radio group

The flat radio group wraps its options in a single bordered surface with a
divider between each choice. It uses its own `.radio-group` / `.radio` /
`.radio__label` / `.radio__input` classes and is separate from the
`.usa-radio` styles above.

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">How should we contact you?</legend>
  <div class="radio-group">
    <div class="radio">
      <input id="rf-email" class="radio__input usa-sr-only" type="radio" name="rf-contact" checked>
      <label for="rf-email" class="radio__label">Email</label>
    </div>
    <div class="radio">
      <input id="rf-text" class="radio__input usa-sr-only" type="radio" name="rf-contact">
      <label for="rf-text" class="radio__label">Text message</label>
    </div>
    <div class="radio">
      <input id="rf-phone" class="radio__input usa-sr-only" type="radio" name="rf-contact">
      <label for="rf-phone" class="radio__label">Phone call</label>
    </div>
    <div class="radio">
      <input id="rf-none" class="radio__input usa-sr-only" type="radio" name="rf-contact" disabled>
      <label for="rf-none" class="radio__label">Do not contact me</label>
    </div>
  </div>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
