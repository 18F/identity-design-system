---
title: Password strength meters
---

The password strength indicator should be used when users are trying to create a password.

## Password component example

{% capture example %}

<div class="grid-row">
  <div class="grid-col">
      <label for="password_form_password" class="usa-label">Password</label>
      <input id="password_form_password" type="text" class="usa-input--lg-password" required="required"
      type="password">
  </div>
</div>
<div class="grid-row">
  <div aria-atomic="true" aria-live="polite" class="lg-password-strength--na" id="lg-password-strength--container">
    <div class="lg-password--bar grid-col"></div>
    <div class="lg-password--bar grid-col"></div>
    <div class="lg-password--bar grid-col"></div>
    <div class="lg-password--bar grid-col"></div>
  </div>
</div>
<div class="grid-row">
  <div class="grid-col lg-password--guidance">
    <span>Password strength: </span>
    <span class="bold" data-forbidden-passwords="[&quot;owq58917@cndps.com&quot;, &quot;owq58917&quot;, &quot;cndps&quot;, &quot;com&quot;, &quot;login.gov&quot;]" id="pw-strength-txt" class="lg-password--summary">
      ...
    </span>
    <div id="feedback" class="lg-password--explanation">&nbsp;</div>
  </div>
</div>
<div class="grid-row">
  <div class="grid-col">
    <input type="submit" name="commit" value="Continue" class="usa-button" data-disable-with="Continue" disabled>
  </div>
</div>

{% endcapture %}
{% include helpers/code-example.html code=example %}
