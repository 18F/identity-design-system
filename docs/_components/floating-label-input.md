---
title: Floating label input
lead: >
  A floating label input shows its label inside the control like a placeholder,
  then floats it above the value once the field is focused or filled.
---

## Floating label input

Render the control BEFORE its `.usa-label` (the label must be the input's next
sibling) and give the input `placeholder=" "` so `:placeholder-shown` tracks
emptiness. Wrap both in a `.usa-form-group.usa-input-group--floating`.

{% capture example %}
<div class="usa-form-group usa-input-group--floating">
  <input id="fli1" type="text" class="usa-input" placeholder=" ">
  <label for="fli1" class="usa-label">App nickname</label>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Filled

The label stays floated whenever the field holds a value.

{% capture example %}
<div class="usa-form-group usa-input-group--floating">
  <input id="fli2" type="text" class="usa-input" placeholder=" " value="Passwords App">
  <label for="fli2" class="usa-label">App nickname</label>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
