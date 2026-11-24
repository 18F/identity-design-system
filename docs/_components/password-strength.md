---
title: Password strength
lead: >
  The password strength meter gives people immediate feedback on how strong a
  password is as they type.
---

## Password strength

The password strength meter pairs a colored progress bar with a short feedback
message. The `.password-strength` container animates open when its
`data-open` attribute is set, and the `data-score` attribute (`1`, `2`, or `3`)
drives the bar color and width and selects the visible
[Status badge]({{ site.baseurl }}/status-badge/). Put all three labels in
`.password-strength__feedback-set` so the widest label determines the badge
width, even in translation. Only the current score is shown.

The consuming app supplies the score. When the password is empty, remove
`data-open` and `data-score` and clear the status message. Keep a polite status
region outside the collapsible meter so feedback can be announced without
moving focus. Update it only when the score changes.

### Interactive

The demo changes scores at 8 and 16 characters. These thresholds are not a password policy.

{% capture example %}
<div class="password-strength-field" data-password-strength-demo>
  {% include helpers/text-input.html id="strength-password" label="Password" icon=true attributes='autocomplete="new-password" aria-describedby="strength-status"' %}
  <div class="password-strength" aria-hidden="true">
    <div class="password-strength__inner">
      <div class="password-strength__row">
        <span class="password-strength__track"><span class="password-strength__bar"></span></span>
        {% include helpers/password-strength-feedback.html %}
      </div>
    </div>
  </div>
  <span id="strength-status" class="usa-sr-only" role="status" aria-atomic="true"></span>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Weak

{% capture example %}
<div class="password-strength" data-open="true" data-score="1">
  <div class="password-strength__inner">
    <div class="password-strength__row">
      <span class="password-strength__track">
        <span class="password-strength__bar"></span>
      </span>
      {% include helpers/password-strength-feedback.html %}
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Medium

{% capture example %}
<div class="password-strength" data-open="true" data-score="2">
  <div class="password-strength__inner">
    <div class="password-strength__row">
      <span class="password-strength__track">
        <span class="password-strength__bar"></span>
      </span>
      {% include helpers/password-strength-feedback.html %}
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Strong

{% capture example %}
<div class="password-strength" data-open="true" data-score="3">
  <div class="password-strength__inner">
    <div class="password-strength__row">
      <span class="password-strength__track">
        <span class="password-strength__bar"></span>
      </span>
      {% include helpers/password-strength-feedback.html %}
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
