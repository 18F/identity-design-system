---
title: Layout utilities
lead: >
  Stack utilities arrange content in a vertical column with consistent spacing,
  and the page transition adds motion between navigations.
---

## Stack

`.stack` lays out its children in a vertical column with a consistent gap. Use
`.form`, `.actions`, and `.links` for the same column layout with spacing tuned
to their context.

{% capture example %}
<div class="stack">
  <div class="card"><div class="card__body"><p class="card__title">First</p></div></div>
  <div class="card"><div class="card__body"><p class="card__title">Second</p></div></div>
  <div class="card"><div class="card__body"><p class="card__title">Third</p></div></div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Custom gap

Add a `--gap-*` modifier to set the spacing between children, where the number
is the spacing token.

{% capture example %}
<div class="stack stack--gap-24">
  <div class="card"><div class="card__body"><p class="card__title">First</p></div></div>
  <div class="card"><div class="card__body"><p class="card__title">Second</p></div></div>
  <div class="card"><div class="card__body"><p class="card__title">Third</p></div></div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Alignment

Add a `--align-*` modifier to control cross-axis alignment: `--align-center`,
`--align-start`, or `--align-stretch`.

{% capture example %}
<div class="stack stack--align-center">
  <button type="button" class="usa-button">Continue</button>
  <button type="button" class="usa-button usa-button--outline">Cancel</button>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Page transition

In browsers that support same-origin cross-document view transitions, the NDS
stylesheet enables a brief root transition between pages even without a shell
attribute. Legacy pages navigate normally without this effect.

Add `data-nds-page-transition` to the page shell to animate its direct
`.auth-page__main` and `.auth-page__footer-wrapper` children separately. The
main content exits and enters with a small vertical movement; the footer
crossfades. With Reduce Motion enabled, these animations do not play.
The effect occurs during navigation, so there is no static example here.
