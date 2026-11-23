---
title: Date fields
lead: A three-column grid for entering a month, day, and year.
---

## Date fields

The `.date-fields` layout arranges three form groups in an even three-column
grid for month, day, and year entry. The form supplies the group legend and
any hint appropriate to the date being requested.

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Date</legend>
  <div class="date-fields">
    <div class="usa-form-group">
      <label class="usa-label" for="date-month">Month</label>
      <input class="usa-input" id="date-month" name="month" placeholder="MM" inputmode="numeric" maxlength="2" pattern="[0-9]*">
    </div>
    <div class="usa-form-group">
      <label class="usa-label" for="date-day">Day</label>
      <input class="usa-input" id="date-day" name="day" placeholder="DD" inputmode="numeric" maxlength="2" pattern="[0-9]*">
    </div>
    <div class="usa-form-group">
      <label class="usa-label" for="date-year">Year</label>
      <input class="usa-input" id="date-year" name="year" placeholder="YYYY" inputmode="numeric" maxlength="4" pattern="[0-9]*">
    </div>
  </div>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
