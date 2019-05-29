---
title: Password strength meters
---

The password strength indicator should be used when user's are trying to create a password.

## No Password
{% capture example %}
<label for="password_form_password" class="usa-label">Password</label>
<input id="password_form_password" type="text" class="usa-input" required="required">

<div aria-atomic="true" aria-live="polite" class="pw-na" id="pw-strength-cntnr">
    <div>
        <div class="grid-container">
            <div class="grid-row">
                <div class="pw-bar grid-col"></div>
                <div class="pw-bar grid-col"></div>
                <div class="pw-bar grid-col"></div>
                <div class="pw-bar grid-col"></div>
            </div>
        </div>
        <div class="h5">
            <span class="h6">Password strength: </span>
            <span class="bold" data-forbidden-passwords="[&quot;owq58917@cndps.com&quot;, &quot;owq58917&quot;, &quot;cndps&quot;, &quot;com&quot;, &quot;login.gov&quot;]" id="pw-strength-txt">...</span>
        </div>
        <div class="h6">
            <div class="italic" id="pw-strength-feedback">&nbsp;</div>
            </div>
        </div>
    </div>

{% endcapture %}
{% include helpers/code-example.html code=example %}

## A So-so Password
{% capture example %}
<label for="fd85" class="usa-label">Password</label>
<input id="fd85" type="text" class="usa-input" required="required">

<div aria-atomic="true" aria-live="polite" class="pw-so-so" id="pw-strength-cntnr">
    <div class="mtn3 mb3">
        <div class="clearfix mxn-tiny pt-tiny">
            <div class="pw-bar"></div>
            <div class="pw-bar"></div>
            <div class="pw-bar"></div>
            <div class="pw-bar"></div>
            </div>
            <div class="h5">
                <span class="h6">Password strength: </span>
                <span class="bold" data-forbidden-passwords="[&quot;owq58917@cndps.com&quot;, &quot;owq58917&quot;, &quot;cndps&quot;, &quot;com&quot;, &quot;login.gov&quot;]" id="pw-strength-txt">So-So</span>
                </div>
                <div class="h6">
                <div class="italic" id="pw-strength-feedback">&nbsp;</div>
            </div>
        </div>
    </div>

{% endcapture %}
{% include helpers/code-example.html code=example %}