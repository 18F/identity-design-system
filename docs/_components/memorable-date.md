---
title: Memorable date
lead: A select for month followed by two text fields is the easiest way for users to enter most dates.
---

{% include helpers/base-component.html component="memorable-date" %}

The form supplies the date question and any hint. If collecting a date of birth,
use the `bday-month`, `bday-day`, and `bday-year` autocomplete tokens. Associate
any group hint with the fieldset using `aria-describedby`.

{% capture example %}
<fieldset class="usa-fieldset">
  <legend class="usa-sr-only">Date</legend>
  <div class="usa-memorable-date">
    <div class="usa-form-group usa-form-group--month usa-form-group--select">
      <label class="usa-label" for="f5bf">Month</label>
      <select
        class="usa-select"
        id="f5bf"
        name="month"
      >
        <option value>- Select -</option>
        <option value="1">01 - January</option>
        <option value="2">02 - February</option>
        <option value="3">03 - March</option>
        <option value="4">04 - April</option>
        <option value="5">05 - May</option>
        <option value="6">06 - June</option>
        <option value="7">07 - July</option>
        <option value="8">08 - August</option>
        <option value="9">09 - September</option>
        <option value="10">10 - October</option>
        <option value="11">11 - November</option>
        <option value="12">12 - December</option>
      </select>
    </div>
    <div class="usa-form-group usa-form-group--day">
      <label class="usa-label" for="b0fe">Day</label>
      <input
        class="usa-input"
        name="day"
        placeholder="DD"
        id="b0fe"
        maxlength="2"
        pattern="[0-9]*"
        inputmode="numeric"
        value=""
      />
    </div>
    <div class="usa-form-group usa-form-group--year">
      <label class="usa-label" for="dc41">Year</label>
      <input
        class="usa-input"
        name="year"
        placeholder="YYYY"
        id="dc41"
        minlength="4"
        maxlength="4"
        pattern="[0-9]*"
        inputmode="numeric"
        value=""
      />
    </div>
  </div>
</fieldset>
{% endcapture %}
{% include helpers/code-example.html code=example %}
