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

Setting the `data-nds-page-transition` attribute on a page shell opts it into an
animated transition between navigations: the main region eases out and the next
one eases in, while the top chrome and footer stay in place. It has no visible
resting state, and it respects `prefers-reduced-motion`. This behavior applies
across full page navigations, so it is not shown as a static example here.
