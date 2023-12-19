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
