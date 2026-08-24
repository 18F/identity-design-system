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
drives the bar color, bar width, and feedback styling.

The meter is normally controlled by JavaScript, which sets `data-open` and
`data-score` in response to what the user types. The examples below set those
attributes directly so the meter renders in its open, scored state.

### Weak

{% capture example %}
<div class="password-strength" data-open="true" data-score="1">
  <div class="password-strength__inner">
    <div class="password-strength__row">
      <span class="password-strength__track">
        <span class="password-strength__bar"></span>
      </span>
      <p class="password-strength__feedback">Weak</p>
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
      <p class="password-strength__feedback">Medium</p>
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
      <p class="password-strength__feedback">Strong</p>
    </div>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
