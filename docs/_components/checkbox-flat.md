---
title: Checkbox (flat)
lead: A flat checkbox family for acknowledgments and selection cards.
---

## Flat checkbox

The `.checkbox` component pairs a visually hidden `.checkbox__input` with a
`.checkbox__label` that draws the control. It is a flat alternative to the
USWDS `.usa-checkbox`, which remains available. Group related checkboxes with
`.checkbox-group`.

{% capture example %}
<div class="checkbox">
  <input id="cf01" class="checkbox__input" type="checkbox" name="cf01">
  <label for="cf01" class="checkbox__label">Remember this browser</label>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Tile

Add `checkbox__input--tile` to render each option as a selectable card.

{% capture example %}
<div class="checkbox-group">
  <div class="checkbox">
    <input id="cf10" class="checkbox__input checkbox__input--tile" type="checkbox" name="cf10">
    <label for="cf10" class="checkbox__label">
      <span class="checkbox__label-text">Text message</span>
      <span class="checkbox__label-description">Get a code sent to your phone.</span>
    </label>
  </div>
  <div class="checkbox">
    <input id="cf11" class="checkbox__input checkbox__input--tile" type="checkbox" name="cf11" checked>
    <label for="cf11" class="checkbox__label">
      <span class="checkbox__label-text">Phone call</span>
      <span class="checkbox__label-description">Get a code by an automated call.</span>
    </label>
  </div>
  <div class="checkbox">
    <input id="cf12" class="checkbox__input checkbox__input--tile" type="checkbox" name="cf12" disabled>
    <label for="cf12" class="checkbox__label">
      <span class="checkbox__label-text">Security key</span>
      <span class="checkbox__label-description">Currently unavailable.</span>
    </label>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Bordered

Add `checkbox__input--bordered` for a compact bordered option that shrinks to
its content.

{% capture example %}
<div class="checkbox">
  <input id="cf20" class="checkbox__input checkbox__input--bordered" type="checkbox" name="cf20">
  <label for="cf20" class="checkbox__label">Save my recovery codes</label>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Illustrated

Pair a tile with `checkbox__label--illustrated` and a `checkbox__image` to lead
each option with an icon or illustration.

{% capture example %}
<div class="checkbox-group">
  <div class="checkbox">
    <input id="cf30" class="checkbox__input checkbox__input--tile" type="checkbox" name="cf30">
    <label for="cf30" class="checkbox__label checkbox__label--illustrated">
      <img class="checkbox__image" src="{{ site.baseurl }}/assets/img/sprite.svg" alt="">
      <span class="checkbox__label--text">
        <span class="checkbox__label-text">Authentication app</span>
        <span class="checkbox__label-description">Use an app to generate codes.</span>
      </span>
    </label>
  </div>
  <div class="checkbox">
    <input id="cf31" class="checkbox__input checkbox__input--tile" type="checkbox" name="cf31" checked>
    <label for="cf31" class="checkbox__label checkbox__label--illustrated">
      <img class="checkbox__image" src="{{ site.baseurl }}/assets/img/sprite.svg" alt="">
      <span class="checkbox__label--text">
        <span class="checkbox__label-text">Face or touch unlock</span>
        <span class="checkbox__label-description">Use your device biometrics.</span>
      </span>
    </label>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
