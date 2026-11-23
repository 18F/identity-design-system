---
title: Radio Buttons
lead: Radio buttons allow users to select exactly one choice from a group.
---

{% include helpers/base-component.html component="radio-buttons" stylesheet="radio" %}

## Default

{% capture example %}
{% include helpers/radio-group.html variant="default" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Bordered

{% capture example %}
{% include helpers/radio-group.html variant="bordered" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Tile

{% capture example %}
{% include helpers/radio-group.html variant="tile" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Flat radio group

{% capture example %}
{% include helpers/radio-group.html variant="flat" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}

## State reference

These independent samples show appearance, not a single choice group. Use one of the groups above for form markup.

{% capture example %}
{% assign states = "Unselected,Focused,Selected,Selected focused,Disabled,Disabled selected,Hovered" | split: "," %}
<fieldset class="usa-fieldset usa-radio-group usa-radio-group--plain">
  <legend class="usa-legend usa-legend--label">Radio states</legend>
  {% for state in states %}
  {% assign key = state | downcase %}
  <div>
    <span class="usa-sr-only">{{ state }}</span>
    <div inert>
      <input id="radio-state-{{ forloop.index }}" class="usa-radio__input{% if key contains 'focused' %} usa-focus{% endif %}" type="radio"{% if key == 'selected' or key == 'selected focused' or key == 'disabled selected' %} checked{% endif %}{% if key contains 'disabled' %} disabled{% endif %}>
      <label class="usa-radio__label{% if key == 'hovered' %} usa-radio__label--hover{% endif %}" for="radio-state-{{ forloop.index }}">{{ state }}</label>
    </div>
  </div>
  {% endfor %}
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
