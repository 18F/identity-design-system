---
title: Progress
lead: >
  A step indicator shows the user where they are in a multi-step flow.
---

The progress stepper lays out the steps of a flow as a row of pills. Mark the
active step with `aria-current="step"` and completed steps with
`data-complete="true"`; completed steps show a check in place of their number.
On narrow viewports the stepper scrolls horizontally.

## Default

{% capture example %}
<div class="progress">
  <div class="progress__scroll">
    <ol class="progress__stepper" aria-label="Account setup">
      <li>
        <div class="progress__step" data-complete="true">
          <span class="progress__step-surface">
            <span class="progress__step-check usa-icon">
              <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
            </span>
            Create account
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step" aria-current="step">
          <span class="progress__step-surface">
            <span class="progress__step-counter">2</span>
            Verify identity
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step">
          <span class="progress__step-surface">
            <span class="progress__step-counter">3</span>
            Secure account
          </span>
        </div>
      </li>
    </ol>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## All steps complete

{% capture example %}
<div class="progress">
  <div class="progress__scroll">
    <ol class="progress__stepper" aria-label="Account setup">
      <li>
        <div class="progress__step" data-complete="true">
          <span class="progress__step-surface">
            <span class="progress__step-check usa-icon">
              <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
            </span>
            Create account
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step" data-complete="true">
          <span class="progress__step-surface">
            <span class="progress__step-check usa-icon">
              <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
            </span>
            Verify identity
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step" data-complete="true">
          <span class="progress__step-surface">
            <span class="progress__step-check usa-icon">
              <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
            </span>
            Secure account
          </span>
        </div>
      </li>
    </ol>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
