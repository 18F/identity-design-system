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
            <p class="history-row__meta">From 192.0.2.33 (IP address potentially located in Phoenix, AZ)</p>
          </div>
          <a href="#" class="usa-button usa-button--tertiary history-row__action">
            <span class="history-row__action-label">Details<span class="usa-sr-only"> for Safari on macOS</span></span>
            <svg class="usa-icon history-row__action-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#chevron-right"></use></svg>
          </a>
        </li>
        <li class="history-row">
          <div class="history-row__content">
            <p class="history-row__title">Chrome on Windows</p>
            <p class="history-row__meta">June 24, 2026 at 4:02 PM</p>
            <p class="history-row__meta">From 192.0.2.33 (IP address potentially located in Phoenix, AZ)</p>
          </div>
          <a href="#" class="usa-button usa-button--tertiary history-row__action">
            <span class="history-row__action-label">Details<span class="usa-sr-only"> for Chrome on Windows</span></span>
            <svg class="usa-icon history-row__action-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#chevron-right"></use></svg>
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
            <p class="history-row__meta">From 192.0.2.33 (IP address potentially located in Phoenix, AZ)</p>
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
{% include helpers/history-logout-dialog.html id="history-logout-modal" %}
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
        <p class="history-row__meta">From 192.0.2.33 (IP address potentially located in Phoenix, AZ)</p>
      </div>
      <a href="#" class="usa-button usa-button--tertiary history-row__action">
        <span class="history-row__action-label">Details<span class="usa-sr-only"> for Safari on macOS</span></span>
        <svg class="usa-icon history-row__action-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/nds-icons/symbols.svg#chevron-right"></use></svg>
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
        <p class="history-row__meta">From 192.0.2.33 (IP address potentially located in Phoenix, AZ)</p>
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
        <img class="usa-icon" src="{{ site.baseurl }}/assets/img/nds-icons/library/chevron-left.svg" alt="">
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
            <p class="history-row__meta">From 192.0.2.33 (IP address potentially located in Phoenix, AZ)</p>
          </div>
        </li>
        <li class="history-row">
          <div class="history-row__content">
            <p class="history-row__title">Signed in with second factor</p>
            <p class="history-row__meta">June 25, 2026 at 8:10 AM</p>
            <p class="history-row__meta">From 192.0.2.33 (IP address potentially located in Phoenix, AZ)</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Log out of all devices

"Log out of all devices" opens a confirmation [modal]({{ site.baseurl }}/modal/)
with a destructive confirm button and a secondary cancel button. In this
example, confirming only dismisses the dialog; it does not end any sessions.

{% capture example %}
<button type="button" class="usa-button usa-button--secondary" data-open-modal="history-logout-example">Log out of all devices</button>
{% include helpers/history-logout-dialog.html id="history-logout-example" %}
{% endcapture %}
{% include helpers/code-example.html code=example %}
