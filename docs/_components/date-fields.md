---
title: Date fields
lead: A single date input, or a three-column grid for entering a month, day, and year.
---

## Date input

The library date input is a single floating-label text input (see
[Text input]({{ site.baseurl }}/text-input/)) whose `placeholder` gives the
format. The placeholder stays hidden behind the label until the field is
focused, then shows as `MM / DD / YYYY` in 45% ink under the floated label.
Hovered and focused states match the text input.

### Default

{% capture example %}
<div class="usa-input">
  <label class="usa-input__label" for="date-input-default">Date of birth</label>
  <div class="usa-input__shell">
    <input id="date-input-default" type="text" inputmode="numeric" autocomplete="bday" class="usa-input__control usa-input__control--floating" placeholder="MM / DD / YYYY">
    <span class="usa-input__floating-label" aria-hidden="true">Date of birth</span>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Filled

{% capture example %}
<div class="usa-input">
  <label class="usa-input__label" for="date-input-filled">Date of birth</label>
  <div class="usa-input__shell">
    <input id="date-input-filled" type="text" inputmode="numeric" autocomplete="bday" class="usa-input__control usa-input__control--floating" placeholder="MM / DD / YYYY" value="04 / 19 / 1988">
    <span class="usa-input__floating-label" aria-hidden="true">Date of birth</span>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Read only

{% capture example %}
<div class="usa-input">
  <label class="usa-input__label" for="date-input-readonly">Date of birth</label>
  <div class="usa-input__shell">
    <input id="date-input-readonly" type="text" inputmode="numeric" autocomplete="bday" class="usa-input__control usa-input__control--floating" placeholder="MM / DD / YYYY" value="04 / 19 / 1988" readonly>
    <span class="usa-input__floating-label" aria-hidden="true">Date of birth</span>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Error

{% capture example %}
<div class="usa-input">
  <label class="usa-input__label" for="date-input-error">Date of birth</label>
  <div class="usa-input__shell">
    <input id="date-input-error" type="text" inputmode="numeric" autocomplete="bday" class="usa-input__control usa-input__control--floating" placeholder="MM / DD / YYYY" aria-invalid="true" aria-describedby="date-input-error-error">
    <span class="usa-input__floating-label" aria-hidden="true">Date of birth</span>
  </div>
  <p class="usa-input__error usa-input__error--visible" id="date-input-error-error"><span class="usa-input__error-inner">Error message</span></p>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Date fields

The `.date-fields` layout arranges three form groups in an even three-column
grid for month, day, and year entry.

{% capture example %}
<fieldset class="fieldset">
  <legend class="fieldset__legend">Date of birth</legend>
  <p class="fieldset__hint">For example: 04 28 1986</p>
  <div class="date-fields">
    <div class="usa-form-group">
      <label class="usa-label" for="date-month">Month</label>
      <input class="usa-input" id="date-month" inputmode="numeric" maxlength="2" pattern="[0-9]*">
    </div>
    <div class="usa-form-group">
      <label class="usa-label" for="date-day">Day</label>
      <input class="usa-input" id="date-day" inputmode="numeric" maxlength="2" pattern="[0-9]*">
    </div>
    <div class="usa-form-group">
      <label class="usa-label" for="date-year">Year</label>
      <input class="usa-input" id="date-year" inputmode="numeric" maxlength="4" pattern="[0-9]*">
    </div>
  </div>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
