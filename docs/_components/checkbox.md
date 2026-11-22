---
title: Checkbox
lead: Checkboxes allow users to select one or more options from a list.
---

{% include helpers/base-component.html component="checkbox" %}

## Default

Compare each state with and without supporting text. Focus and hover samples show their treatment without requiring interaction.

{% capture example %}
{% include helpers/checkbox-states.html variant="default" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Bordered

A label-only row with a subtle perimeter. Selecting it changes the control, not the row surface.

{% capture example %}
{% include helpers/checkbox-states.html variant="bordered" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Tile

The bordered row with supporting text. The illustration example uses the same control and text hierarchy.

{% capture example %}
{% include helpers/checkbox-states.html variant="tile" %}
<small>Illustrated tile</small>
<input id="checkbox-illustrated" class="usa-checkbox__input usa-checkbox__input--tile" type="checkbox" aria-labelledby="illustrated-title" aria-describedby="illustrated-description">
<label for="checkbox-illustrated" class="usa-checkbox__label usa-checkbox__label--illustrated">
  <span class="usa-checkbox__image"><img alt="" src="{{ site.baseurl }}/assets/img/nds-icons/library/fingerprint.svg"></span>
  <span class="usa-checkbox__label--text"><span id="illustrated-title">Face or touch unlock</span><span id="illustrated-description" class="usa-checkbox__label-description">Sign in on a supported device.</span></span>
</label>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Indeterminate

Use a mixed state for a partial selection. The component initializes `data-indeterminate` as the native checkbox property; activating it returns to a normal checked or unchecked state.

{% capture example %}
{% include helpers/checkbox-states.html variant="mixed" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Switch

Use a native checkbox with `role="switch"` for an on/off setting. Its checked property supplies the accessible state.
The disabled On switch keeps its blue track and mutes the thumb. Both disabled
states retain their thumb position; the label stays clickable only when enabled.

{% capture example %}
{% assign states = 'Off,On,Disabled on,Disabled off,Off hover,On hover,Off focus,On focus' | split: ',' %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Switch states</legend>
  {% for state in states %}
  {% assign key = state | downcase %}
  {% assign id = key | slugify | prepend: 'checkbox-switch-' %}
  <div class="margin-bottom-2">
    <small>{{ state }}</small>
    <input id="{{ id }}" type="checkbox" role="switch" class="usa-checkbox__input usa-checkbox__input--switch{% if key contains 'focus' %} usa-focus{% endif %}"{% if key contains 'on' %} checked{% endif %}{% if key contains 'disabled' %} disabled{% endif %}>
    <label for="{{ id }}" class="usa-checkbox__label{% if key contains 'hover' %} usa-checkbox__label--hover{% endif %}">Email notifications</label>
  </div>
  {% endfor %}
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
