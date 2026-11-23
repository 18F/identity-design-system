---
title: Progress
lead: >
  A step indicator shows the user where they are in a multi-step flow.
---

The progress stepper lays out the steps of a flow as a row of pills. Mark the
active step with `aria-current="step"` and completed steps with
`data-complete="true"`; completed steps show a check before their label.
The steps are read-only. On desktop, the entire group is centered. On mobile, the current step stays centered and only clipped edges fade. When all steps are complete, the list wraps so all labels remain visible.

## Default

{% capture example %}
<div class="progress">
  <div class="progress__scroll">
    <ol class="progress__stepper" aria-label="Account setup">
      <li>
        <div class="progress__step" data-complete="true">
          <span class="progress__step-surface">
            <span class="progress__step-check usa-icon">
              <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#checkmark"></use></svg>
            </span>
            Account<span class="usa-sr-only">, completed</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step" aria-current="step">
          <span class="progress__step-surface">
            {% include helpers/progress-ring.html %}
            Security
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step">
          <span class="progress__step-surface">
            Verification
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
drawn with a round-capped SVG stroke and is hidden from
assistive technology; `aria-current="step"` already announces the step. The
ring shows a half-filled arc by default. Set `--nds-progress-ring-value` (a
percentage from `0%` to `100%`) on the current step. Update that value as the
user moves through the step; the same ring redraws without changing steps.

{% capture example %}
<div class="progress">
  <div class="progress__scroll">
    <ol class="progress__stepper" aria-label="Account setup">
      <li>
        <div class="progress__step" aria-current="step">
          <span class="progress__step-surface">
            {% include helpers/progress-ring.html %}
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

## All steps complete

{% capture example %}
<div class="progress">
  <div class="progress__scroll">
    <ol class="progress__stepper" aria-label="Account setup">
      <li>
        <div class="progress__step" data-complete="true">
          <span class="progress__step-surface">
            <span class="progress__step-check usa-icon">
              <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#checkmark"></use></svg>
            </span>
            Account<span class="usa-sr-only">, completed</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step" data-complete="true">
          <span class="progress__step-surface">
            <span class="progress__step-check usa-icon">
              <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#checkmark"></use></svg>
            </span>
            Security<span class="usa-sr-only">, completed</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step" data-complete="true">
          <span class="progress__step-surface">
            <span class="progress__step-check usa-icon">
              <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#checkmark"></use></svg>
            </span>
            Verification<span class="usa-sr-only">, completed</span>
          </span>
        </div>
      </li>
    </ol>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
