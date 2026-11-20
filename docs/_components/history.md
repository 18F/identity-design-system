---
title: History
lead: >
  The history layout lists the devices signed in to an account and its recent
  activity, and shows the activity for a single device.
---

## History

The `.history` layout stacks `.history__section` groups. Each section has a
`.history__header` with an `.history__heading` and an optional trailing
`.history__header-action`, then a `.history__panel` holding a
`.history__rows` list of `.history-row` entries. A row's
`.history-row__content` holds a `.history-row__title` and one or more
`.history-row__meta` lines (when it happened and where it came from).

This is a page-level layout for the account shell's main column. It is
constrained to a fixed content width and centered, so the preview below may
appear narrower than it would on a full account page.

{% capture example %}
<div class="history">
  <section class="history__section" aria-labelledby="history-devices-heading">
    <div class="history__header">
      <h2 id="history-devices-heading" class="history__heading">Devices</h2>
      <button type="button" class="usa-button usa-button--secondary history__header-action" data-open-modal="history-logout-modal">Log out of all devices</button>
    </div>
    <div class="history__panel">
      <ul class="history__rows">
        <li class="history-row">
          <div class="history-row__content">
            <p class="history-row__title">Safari on macOS</p>
            <p class="history-row__meta">June 26, 2026 at 9:23 AM</p>
            <p class="history-row__meta">From 97.373.13.33 (IP address potentially located in Phoenix, AZ)</p>
          </div>
          <a href="#" class="usa-button usa-button--tertiary history-row__action">
            <span class="history-row__action-label">Details<span class="usa-sr-only"> for Safari on macOS</span></span>
            <svg class="usa-icon history-row__action-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#chevron_right"></use></svg>
          </a>
        </li>
        <li class="history-row">
          <div class="history-row__content">
            <p class="history-row__title">Chrome on Windows</p>
            <p class="history-row__meta">June 24, 2026 at 4:02 PM</p>
            <p class="history-row__meta">From 97.373.13.33 (IP address potentially located in Phoenix, AZ)</p>
          </div>
          <a href="#" class="usa-button usa-button--tertiary history-row__action">
            <span class="history-row__action-label">Details<span class="usa-sr-only"> for Chrome on Windows</span></span>
            <svg class="usa-icon history-row__action-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#chevron_right"></use></svg>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section class="history__section" aria-labelledby="history-activity-heading">
    <div class="history__header">
      <h2 id="history-activity-heading" class="history__heading">Activity</h2>
    </div>
    <div class="history__panel">
      <ul class="history__rows">
        <li class="history-row">
          <div class="history-row__content">
            <p class="history-row__title">Signed in with second factor</p>
            <p class="history-row__meta">June 26, 2026 at 9:23 AM</p>
            <p class="history-row__meta">From 97.373.13.33 (IP address potentially located in Phoenix, AZ)</p>
          </div>
        </li>
        <li class="history-row">
          <div class="history-row__content">
            <p class="history-row__title">Signed in with <a href="#" class="link">Sample Agency</a></p>
            <p class="history-row__meta">June 26, 2026 at 9:20 AM</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## History row

A `.history-row` lists an event or a device. Device rows add a trailing
"Details" `.history-row__action` (a tertiary button link). On narrow viewports
the action collapses to a chevron and stretches over the whole row; its text
stays available to assistive technology, so include the device name in it.

### With details

{% capture example %}
<div class="history__panel">
  <ul class="history__rows">
    <li class="history-row">
      <div class="history-row__content">
        <p class="history-row__title">Safari on macOS</p>
        <p class="history-row__meta">June 26, 2026 at 9:23 AM</p>
        <p class="history-row__meta">From 97.373.13.33 (IP address potentially located in Phoenix, AZ)</p>
      </div>
      <a href="#" class="usa-button usa-button--tertiary history-row__action">
        <span class="history-row__action-label">Details<span class="usa-sr-only"> for Safari on macOS</span></span>
        <svg class="usa-icon history-row__action-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#chevron_right"></use></svg>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Without details

{% capture example %}
<div class="history__panel">
  <ul class="history__rows">
    <li class="history-row">
      <div class="history-row__content">
        <p class="history-row__title">Signed in with second factor</p>
        <p class="history-row__meta">June 26, 2026 at 9:23 AM</p>
        <p class="history-row__meta">From 97.373.13.33 (IP address potentially located in Phoenix, AZ)</p>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Device details

The device details page uses a single section whose header leads with a
`.history__back` icon-only secondary button. The header then sits flush with
the panel instead of being inset.

{% capture example %}
<div class="history">
  <section class="history__section" aria-labelledby="history-device-heading">
    <div class="history__header">
      <a href="#" class="usa-button usa-button--secondary usa-button--icon-only history__back">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#chevron_left"></use></svg>
        <span class="usa-sr-only">Back to history</span>
      </a>
      <h2 id="history-device-heading" class="history__heading">Safari on macOS</h2>
    </div>
    <div class="history__panel">
      <ul class="history__rows">
        <li class="history-row">
          <div class="history-row__content">
            <p class="history-row__title">Signed in with second factor</p>
            <p class="history-row__meta">June 26, 2026 at 9:23 AM</p>
            <p class="history-row__meta">From 97.373.13.33 (IP address potentially located in Phoenix, AZ)</p>
          </div>
        </li>
        <li class="history-row">
          <div class="history-row__content">
            <p class="history-row__title">Signed in with second factor</p>
            <p class="history-row__meta">June 25, 2026 at 8:10 AM</p>
            <p class="history-row__meta">From 97.373.13.33 (IP address potentially located in Phoenix, AZ)</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Log out of all devices

"Log out of all devices" opens a confirmation [modal]({{ site.baseurl }}/components/modal/)
with a destructive confirm button and a secondary cancel button.

{% capture example %}
<button type="button" class="usa-button usa-button--secondary" data-open-modal="history-logout-modal">Log out of all devices</button>
<dialog id="history-logout-modal" class="modal" aria-labelledby="history-logout-modal-title">
  <div class="modal__body">
    <button type="button" class="modal__close" data-close-modal aria-label="Close">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#close"></use></svg>
    </button>
    <div class="modal__heading">
      <h2 id="history-logout-modal-title" class="modal__title">Log out of all devices?</h2>
      <p class="modal__description">We'll need additional information to know that it's actually you signing in to your account. We'll ask for a multi-factor authentication method each time you want to access your account.</p>
    </div>
    <div class="modal__actions">
      <button type="button" class="usa-button usa-button--danger usa-button--lg" data-close-modal>Continue</button>
      <button type="button" class="usa-button usa-button--secondary usa-button--lg" data-close-modal>Cancel</button>
    </div>
  </div>
</dialog>
{% endcapture %}
{% include helpers/code-example.html code=example %}

<script>
  (function () {
    document.querySelectorAll('[data-open-modal]').forEach(function (trigger) {
      var dialog = document.getElementById(trigger.getAttribute('data-open-modal'));
      if (!dialog) return;
      function close() {
        dialog.classList.remove('is-open');
        dialog.close();
      }
      trigger.addEventListener('click', function () {
        dialog.showModal();
        dialog.classList.add('is-open');
      });
      dialog.querySelectorAll('[data-close-modal]').forEach(function (control) {
        control.addEventListener('click', close);
      });
      dialog.addEventListener('cancel', function () {
        dialog.classList.remove('is-open');
      });
    });
  })();
</script>
