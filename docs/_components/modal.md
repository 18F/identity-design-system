---
title: Modal
lead: >
  Modals focus the user on a single task or piece of information without leaving
  the page.
---

## Modal

A modal is a native `<dialog>` with the `modal` class. Scripting adds the
`open` attribute and the `is-open` class to show it; the examples below include
both so the dialog paints in its open state. Associate the dialog with its
title using `aria-labelledby`.

### Default

{% capture example %}
<dialog class="modal is-open" open aria-labelledby="modal-title">
  <div class="modal__body">
    <button type="button" class="modal__close" aria-label="Close">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#close"></use></svg>
    </button>
    <div class="modal__heading">
      <h2 id="modal-title" class="modal__title">Sign out of all devices?</h2>
      <p class="modal__description">You will need to sign in again on each device.</p>
    </div>
    <div class="modal__actions">
      <button type="button" class="usa-button">Sign out</button>
      <button type="button" class="usa-button usa-button--tertiary">Cancel</button>
    </div>
  </div>
</dialog>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Wide

Add `modal--wide` to give the dialog a wider maximum width.

{% capture example %}
<dialog class="modal modal--wide is-open" open aria-labelledby="modal-wide-title">
  <div class="modal__body">
    <button type="button" class="modal__close" aria-label="Close">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#close"></use></svg>
    </button>
    <div class="modal__heading">
      <h2 id="modal-wide-title" class="modal__title">Review your information</h2>
      <p class="modal__description">Confirm the details below before continuing.</p>
    </div>
    <div class="modal__content">
      <p>Everything you enter is encrypted and stored securely.</p>
    </div>
    <div class="modal__actions">
      <button type="button" class="usa-button">Continue</button>
      <button type="button" class="usa-button usa-button--tertiary">Go back</button>
    </div>
  </div>
</dialog>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Media

Use `modal__body--media` with a `modal__media` image and a `modal__body-inner`
wrapper for the content.

{% capture example %}
<dialog class="modal is-open" open aria-labelledby="modal-media-title">
  <div class="modal__body modal__body--media">
    <button type="button" class="modal__close" aria-label="Close">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#close"></use></svg>
    </button>
    <div class="modal__media">
      <img src="{{ site.baseurl }}/img/fingerprint-icon.svg" alt="">
    </div>
    <div class="modal__body-inner">
      <div class="modal__heading">
        <h2 id="modal-media-title" class="modal__title">Face or touch unlock</h2>
        <p class="modal__description">Sign in faster on supported devices.</p>
      </div>
      <div class="modal__actions">
        <button type="button" class="usa-button">Set up</button>
        <button type="button" class="usa-button usa-button--tertiary">Not now</button>
      </div>
    </div>
  </div>
</dialog>
{% endcapture %}
{% include helpers/code-example.html code=example %}
