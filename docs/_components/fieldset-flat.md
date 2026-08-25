---
title: Fieldset (flat)
lead: A flat fieldset primitive with its own legend and hint styling.
---

## Flat fieldset

The `.fieldset` component groups related form controls with a
`.fieldset__legend` and an optional `.fieldset__hint`. It is a flat alternative
to the USWDS `.usa-fieldset` and `.usa-legend`, which remain available.

{% capture example %}
<fieldset class="fieldset">
  <legend class="fieldset__legend">Shipping address</legend>
  <p class="fieldset__hint">Enter the address where you want your order delivered.</p>
  <label class="usa-label" for="street">Street address</label>
  <input class="usa-input" id="street" type="text">
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
