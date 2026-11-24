---
title: Status page
lead: >
  A status page is a fullscreen message that tells a person the outcome of a
  task — an error, a warning, a success, or information — and what to do next.
---

## Status page

A `.status-page` is a single centered column, placed in the page shell's
`.auth-page__main`. From top to bottom it holds:

- `.status-page__media`: a `.nds-status-icon` well (or a `.status-page__icon`
  illustration), centered.
- `.status-page__heading`: the page heading, centered.
- `.status-page__rule`: a `.divider` rule.
- `.status-page__body`: the message copy, as `.copy.copy--muted`.
- `.status-page__actions`: an `.actions` stack of full-width buttons, usually
  a primary button and a tertiary button.

The status type lives on the icon. Use `.nds-status-icon--error`,
`--warning`, `--success`, or `--info` on `.status-page__media`, with the
matching 24px NDS glyph (`error`, `warning`, `check-circle`, `info`). The icon is
decorative (empty `alt` or `aria-hidden`), so the heading must convey the status on its own.

### Error

Use this for blocking failures, such as a locked account or a failed check. Explain what happened and what the person can do next.

{% capture example %}
<section class="status-page">
  <span class="status-page__media nds-status-icon nds-status-icon--error">
    <img class="usa-icon" src="{{ site.baseurl }}/assets/img/nds-icons/library/error.svg" alt="">
  </span>
  <h1 class="status-page__heading">We couldn’t verify your identity</h1>
  <hr class="status-page__rule divider">
  <div class="status-page__body copy copy--muted">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco <a href="#">laboris nisi ut
      aliquip</a> ex ea commodo consequat.
    </p>
  </div>
  <div class="status-page__actions actions">
    <a href="#" class="usa-button usa-button--lg usa-button--full-width">Try again</a>
    <a href="#" class="usa-button usa-button--tertiary usa-button--lg usa-button--full-width">Contact support</a>
  </div>
</section>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Warning

Use this when the person can continue, but should review something first.

{% capture example %}
<section class="status-page">
  <span class="status-page__media nds-status-icon nds-status-icon--warning">
    <img class="usa-icon" src="{{ site.baseurl }}/assets/img/nds-icons/library/warning.svg" alt="">
  </span>
  <h1 class="status-page__heading">Check your information</h1>
  <hr class="status-page__rule divider">
  <div class="status-page__body copy copy--muted">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco <a href="#">laboris nisi ut
      aliquip</a> ex ea commodo consequat.
    </p>
  </div>
  <div class="status-page__actions actions">
    <a href="#" class="usa-button usa-button--lg usa-button--full-width">Continue</a>
    <a href="#" class="usa-button usa-button--tertiary usa-button--lg usa-button--full-width">Cancel</a>
  </div>
</section>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Success

Use this to confirm that a task finished.

{% capture example %}
<section class="status-page">
  <span class="status-page__media nds-status-icon nds-status-icon--success">
    <img class="usa-icon" src="{{ site.baseurl }}/assets/img/nds-icons/library/check-circle.svg" alt="">
  </span>
  <h1 class="status-page__heading">You’re all set</h1>
  <hr class="status-page__rule divider">
  <div class="status-page__body copy copy--muted">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco <a href="#">laboris nisi ut
      aliquip</a> ex ea commodo consequat.
    </p>
  </div>
  <div class="status-page__actions actions">
    <a href="#" class="usa-button usa-button--lg usa-button--full-width">Continue</a>
    <a href="#" class="usa-button usa-button--tertiary usa-button--lg usa-button--full-width">Go to your account</a>
  </div>
</section>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Info

Use this for neutral, informational next steps.

{% capture example %}
<section class="status-page">
  <span class="status-page__media nds-status-icon nds-status-icon--info">
    <img class="usa-icon" src="{{ site.baseurl }}/assets/img/nds-icons/library/info.svg" alt="">
  </span>
  <h1 class="status-page__heading">Call us to finish verifying</h1>
  <hr class="status-page__rule divider">
  <div class="status-page__body copy copy--muted">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco <a href="#">laboris nisi ut
      aliquip</a> ex ea commodo consequat.
    </p>
  </div>
  <div class="status-page__actions actions">
    <a href="#" class="usa-button usa-button--lg usa-button--full-width">Continue</a>
    <a href="#" class="usa-button usa-button--tertiary usa-button--lg usa-button--full-width">Sign out</a>
  </div>
</section>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Status page icon

Use the same `.nds-status-icon` and status modifier as the corresponding page.
Each label names the status, so the glyph has an empty `alt` to avoid repeating it.

{% capture example %}
<ul class="grid-row usa-list--unstyled" role="list" aria-label="Status icons">
  {% assign statuses = "error,warning,success,info" | split: "," %}
  {% for status in statuses %}
  {% assign glyph = status %}
  {% if status == "success" %}{% assign glyph = "check-circle" %}{% endif %}
  <li class="grid-col-6 tablet:grid-col-3 padding-y-1 text-center">
    <span class="nds-status-icon nds-status-icon--{{ status }}">
      <img class="usa-icon" src="{{ site.baseurl }}/assets/img/nds-icons/library/{{ glyph }}.svg" alt="">
    </span>
    <span class="display-block margin-top-1">{{ status | capitalize }}</span>
  </li>
  {% endfor %}
</ul>
{% endcapture %}
{% include helpers/code-example.html code=example %}
