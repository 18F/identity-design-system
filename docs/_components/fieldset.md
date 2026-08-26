---
title: Fieldset
lead: The fieldset and legend elements make it easier for those who use screen readers to navigate the form.
---

{% include helpers/base-component.html component="form" stylesheet="fieldset" %}

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Full name</legend>

  <label for="c985" class="usa-label">First name</label>
  <input id="c985" type="text" class="usa-input">

  <label for="a2d8" class="usa-label">Last name</label>
  <input id="a2d8" type="text" class="usa-input">
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Label legend

Add the `usa-legend--label` variant to render the legend as a bold, sentence-case
form label instead of the default uppercase micro-legend. Use it for grouped
controls that read better with a plain heading, with an optional `usa-hint`.

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend usa-legend--label">Shipping address</legend>
  <span class="usa-hint">Enter the address where you want your order delivered.</span>

  <label for="street" class="usa-label">Street address</label>
  <input id="street" type="text" class="usa-input">
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
