---
title: Date fields
lead: A three-column grid for entering a month, day, and year.
---

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
