---
title: Progress
lead: >
  A step indicator shows the user where they are in a multi-step flow.
---

The progress stepper lays out the steps of a flow as a row of pills. Mark the
active step with `aria-current="step"` and completed steps with
`data-complete="true"`; completed steps show a check before their label.
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
            Verify identity
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step">
          <span class="progress__step-surface">
            Secure account
          </span>
        </div>
      </li>
    </ol>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## In progress

The current step draws a radial-progress ring before its label. The ring is
pure CSS on the step surface, so it needs no extra markup and is hidden from
assistive technology; `aria-current="step"` already announces the step. The
ring shows a half-filled arc by default. Set `--nds-progress-ring-value` (a
percentage) on the step to change the fill.

{% capture example %}
<div class="progress">
  <div class="progress__scroll">
    <ol class="progress__stepper" aria-label="Account setup">
      <li>
        <div class="progress__step" aria-current="step">
          <span class="progress__step-surface">
            <span class="progress__step-label">Account</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step">
          <span class="progress__step-surface">
            <span class="progress__step-label">Security</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step">
          <span class="progress__step-surface">
            <span class="progress__step-label">Verification</span>
          </span>
        </div>
      </li>
    </ol>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Custom fill

{% capture example %}
<div class="progress">
  <div class="progress__scroll">
    <ol class="progress__stepper" aria-label="Account setup">
      <li>
        <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 25%">
          <span class="progress__step-surface">
            <span class="progress__step-label">Account</span>
            <span class="progress__step-counter" aria-hidden="true">1 / 4</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step">
          <span class="progress__step-surface">
            <span class="progress__step-label">Security</span>
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
