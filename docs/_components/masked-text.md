---
title: Masked text
lead: Displays a value that can be revealed or hidden with a toggle.
---

## Masked text

The `.masked-text` component shows a value alongside a toggle that reveals or
hides it. The `.masked-text__toggle` checkbox swaps the `--masked` and
`--revealed` icons through sibling selectors, so it works without JavaScript.
Add `.masked-text--toggleable` when the toggle is present.

{% capture example %}
<span class="masked-text masked-text--toggleable">
  <span class="masked-text__value">••••••••</span>
  <input class="masked-text__toggle usa-sr-only" id="reveal-secret" type="checkbox">
  <label class="masked-text__icon-toggle" for="reveal-secret">
    <span class="usa-sr-only">Show value</span>
    <svg class="usa-icon masked-text__icon masked-text__icon--masked" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#visibility"></use></svg>
    <svg class="usa-icon masked-text__icon masked-text__icon--revealed" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#visibility_off"></use></svg>
  </label>
</span>
{% endcapture %}
{% include helpers/code-example.html code=example %}
