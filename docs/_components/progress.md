---
title: Progress
lead: >
  A step indicator shows the user where they are in a multi-step flow.
---

The progress stepper lays out the steps of a flow as a row of 44px pills, 24px
apart. Each step is one of three types:

- **Complete**: add `data-complete="true"`. The step shows a green check badge
  before its label, in the secondary text color.
- **Active**: add `aria-current="step"`. The step gets a tinted pill and a
  radial-progress ring before its black label.
- **Upcoming**: no attribute. The label is in the secondary text color.

On wide screens the stepper is centered. Below `768px` it scrolls horizontally,
snaps the active step to the center, and fades out at both edges. Resize the
window to see the mobile layout.

## Step types

{% capture example %}
<div class="progress">
  <div class="progress__scroll">
    <ol class="progress__stepper" aria-label="Step types">
      <li>
        <div class="progress__step" data-complete="true">
          <span class="progress__step-surface">
            <span class="progress__step-check usa-icon">
              <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
            </span>
            <span class="progress__step-label">Complete</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 8%">
          <span class="progress__step-surface">
            <span class="progress__step-label">Active</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step">
          <span class="progress__step-surface">
            <span class="progress__step-label">Upcoming</span>
          </span>
        </div>
      </li>
    </ol>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Steps

### Account

{% capture example %}
<div class="progress">
  <div class="progress__scroll">
    <ol class="progress__stepper" aria-label="Account setup">
      <li>
        <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 8%">
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

### Security

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
            <span class="progress__step-label">Account</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 8%">
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

### Verification

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
            <span class="progress__step-label">Account</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step" data-complete="true">
          <span class="progress__step-surface">
            <span class="progress__step-check usa-icon">
              <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
            </span>
            <span class="progress__step-label">Security</span>
          </span>
        </div>
      </li>
      <li>
        <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 8%">
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

## Radial progress

The active step's ring is pure CSS on the step surface, so it needs no extra
markup and is hidden from assistive technology; `aria-current="step"` already
announces the step. The ring is a 2px arc on a 2px track. It's half filled by
default. Set `--nds-progress-ring-value` (a percentage) on the step to show how
far through the step's screens the user is. The library defines these values:

{% capture example %}
<div class="display-flex flex-wrap" style="gap: 8px">
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 0%">
    <span class="progress__step-surface">
      <span class="progress__step-label">0%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 8%">
    <span class="progress__step-surface">
      <span class="progress__step-label">8%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 16%">
    <span class="progress__step-surface">
      <span class="progress__step-label">16%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 24%">
    <span class="progress__step-surface">
      <span class="progress__step-label">24%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 32%">
    <span class="progress__step-surface">
      <span class="progress__step-label">32%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 40%">
    <span class="progress__step-surface">
      <span class="progress__step-label">40%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 50%">
    <span class="progress__step-surface">
      <span class="progress__step-label">50%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 56%">
    <span class="progress__step-surface">
      <span class="progress__step-label">56%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 64%">
    <span class="progress__step-surface">
      <span class="progress__step-label">64%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 72%">
    <span class="progress__step-surface">
      <span class="progress__step-label">72%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 80%">
    <span class="progress__step-surface">
      <span class="progress__step-label">80%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 88%">
    <span class="progress__step-surface">
      <span class="progress__step-label">88%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 96%">
    <span class="progress__step-surface">
      <span class="progress__step-label">96%</span>
    </span>
  </div>
  <div class="progress__step" aria-current="step" style="--nds-progress-ring-value: 100%">
    <span class="progress__step-surface">
      <span class="progress__step-label">100%</span>
    </span>
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

The substep counter (`.progress__step-counter`, for example "1 / 4") is from an
earlier version of the design and isn't in the library. It's still styled so
existing markup keeps working, but use the ring for new work.

<script>
  // Center the active step in each scrolling stepper, as identity-idp's
  // `<nds-progress>` element does. Only matters on narrow viewports.
  // Runs on load, once the swapped-in stylesheet has applied.
  window.addEventListener('load', function () {
    document.querySelectorAll('.progress__scroll').forEach(function (scroll) {
      var step = scroll.querySelector('[aria-current="step"]');
      if (!step) return;
      var stepBox = step.getBoundingClientRect();
      var scrollBox = scroll.getBoundingClientRect();
      scroll.scrollLeft += stepBox.left - scrollBox.left - (scrollBox.width - stepBox.width) / 2;
    });
  });
</script>
