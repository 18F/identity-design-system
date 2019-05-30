---
title: Password strength meters
---

The password strength indicator should be used when user's are trying to create a password.

## No Password
{% capture example %}
<label for="password_form_password" class="usa-label">Password</label>
<input id="password_form_password" type="text" class="usa-input--password" required="required">

<div aria-atomic="true" aria-live="polite" class="lg-password-strength--na lg-password-strength--counter" id="pw-strength-counter">
    <div>
        <div class="grid-container">
            <div class="grid-row">
                <div class="lg-password-strength--bar grid-col"></div>
                <div class="lg-password-strength--bar grid-col"></div>
                <div class="lg-password-strength--bar grid-col"></div>
                <div class="lg-password-strength--bar grid-col"></div>
            </div>
        </div>
        <div class="h5">
            <span class="h6">Password strength: </span>
            <span class="bold" data-forbidden-passwords="[&quot;owq58917@cndps.com&quot;, &quot;owq58917&quot;, &quot;cndps&quot;, &quot;com&quot;, &quot;login.gov&quot;]" id="pw-strength-txt" class="lg-password-strength--text">...</span>
        </div>
        <div class="h6">
            <div class="italic" id="lg-password-strength--feedback">&nbsp;</div>
            </div>
        </div>
    </div>

{% endcapture %}
{% include helpers/code-example.html code=example %}