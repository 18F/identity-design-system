---
title: Fieldset
lead: The fieldset and legend elements make it easier for those who use screen readers to navigate the form.
---

{% include helpers/base-component.html component="form" stylesheet="fieldset" %}

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-legend">Full name</legend>

  <div class="usa-form-group usa-input-group--floating">
    <input id="c985" name="first_name" autocomplete="given-name" type="text" class="usa-input" placeholder=" ">
    <label for="c985" class="usa-label">First name</label>
  </div>

  <div class="usa-form-group usa-input-group--floating">
    <input id="a2d8" name="last_name" autocomplete="family-name" type="text" class="usa-input" placeholder=" ">
    <label for="a2d8" class="usa-label">Last name</label>
  </div>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Label legend

Add the `usa-legend--label` variant to render the legend as a bold, sentence-case
form label instead of the default Heading/XS legend. Use it for grouped
controls that read better with a plain heading, with an optional `usa-hint`.

{% capture example %}
<fieldset class="usa-fieldset" aria-describedby="shipping-address-hint">
  <legend class="usa-legend usa-legend--label">Shipping address</legend>
  <span id="shipping-address-hint" class="usa-hint">Enter the address where you want your order delivered.</span>

  <div class="usa-form-group usa-input-group--floating">
    <input id="street" name="street_address" autocomplete="shipping street-address" type="text" class="usa-input" placeholder=" ">
    <label for="street" class="usa-label">Street address</label>
  </div>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
