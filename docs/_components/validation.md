---
title: Validation
lead: Use validation to tell people what needs attention, how to fix it, and whether they can continue.
---

## Try the form

<div><div class="margin-y-3">
<form class="usa-form width-full text-left" style="max-width: 27rem" data-validation-example>
  <p class="margin-y-0">Choose Continue with both fields empty. Then fix one field at a time and try again. Nothing is sent or saved.</p>
  <div class="margin-top-4">
    {% include helpers/text-input.html id="validation-first-name" label="First name (required)" attributes='name="first-name" autocomplete="given-name" required' %}
    {% include helpers/field-error.html id="validation-name-error" message="Enter your first name." hidden=true %}
  </div>
  <div class="margin-top-4">
    {% include helpers/radio-group.html variant="flat" name="contact" choices="Email,Phone" values="email,phone" required=true %}
    {% include helpers/field-error.html id="validation-contact-error" message="Choose a contact method." hidden=true %}
  </div>
  <div role="status">
    <div class="margin-top-4" data-completion hidden>
      <div class="usa-alert usa-alert--success usa-alert--slim">
        <div class="usa-alert__body"><p class="usa-alert__text">Both fields are complete. Nothing was submitted.</p></div>
      </div>
    </div>
  </div>
  <div class="margin-top-4">
    <button type="submit" class="usa-button usa-button--big width-full" style="margin-top: 0" disabled>Continue</button>
  </div>
</form>
<script src="{{ site.baseurl }}/validation-example.js" defer></script>
</div></div>

## What to review

- **Before Continue:** Show which fields are required, without showing errors before someone tries to continue.
- **After Continue:** Show a specific message next to each invalid field and focus the first one. Keep anything the person already entered.
- **While correcting:** Clear only the error that was fixed. Don't move focus or declare success on each keystroke.
- **On completion:** Confirm success only after the form passes.

For the appearance of individual controls, see [Text input]({{ site.baseurl }}/text-input/), [Select]({{ site.baseurl }}/select/), [Date fields]({{ site.baseurl }}/date-fields/), [Radio buttons]({{ site.baseurl }}/radio-buttons/), and [Checkbox]({{ site.baseurl }}/checkbox/). This example demonstrates client-side feedback; applications must also validate submitted data on the server.
