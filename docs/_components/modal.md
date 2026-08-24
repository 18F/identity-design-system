---
title: Modal
lead: >
  Modals focus the user on a single task or piece of information without leaving
  the page.
---

## Modal

A modal is a native `<dialog>` with the `modal` class. Open it by calling the
dialog's `showModal()` method and adding the `is-open` class for the enter
transition; the buttons below do this. Associate the dialog with its title
using `aria-labelledby`.

### Default

{% capture example %}
<button type="button" class="usa-button" data-open-modal="modal-default">Open modal</button>
<dialog id="modal-default" class="modal" aria-labelledby="modal-default-title">
  <div class="modal__body">
    <button type="button" class="modal__close" data-close-modal aria-label="Close">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#close"></use></svg>
    </button>
    <div class="modal__heading">
      <h2 id="modal-default-title" class="modal__title">Sign out of all devices?</h2>
      <p class="modal__description">You will need to sign in again on each device.</p>
    </div>
    <div class="modal__actions">
      <button type="button" class="usa-button" data-close-modal>Sign out</button>
      <button type="button" class="usa-button usa-button--tertiary" data-close-modal>Cancel</button>
    </div>
  </div>
</dialog>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Wide

Add `modal--wide` to give the dialog a wider maximum width.

{% capture example %}
<button type="button" class="usa-button" data-open-modal="modal-wide">Open wide modal</button>
<dialog id="modal-wide" class="modal modal--wide" aria-labelledby="modal-wide-title">
  <div class="modal__body">
    <button type="button" class="modal__close" data-close-modal aria-label="Close">
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
      <button type="button" class="usa-button" data-close-modal>Continue</button>
      <button type="button" class="usa-button usa-button--tertiary" data-close-modal>Go back</button>
    </div>
  </div>
</dialog>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### Media

Use `modal__body--media` with a `modal__media` image and a `modal__body-inner`
wrapper for the content.

{% capture example %}
<button type="button" class="usa-button" data-open-modal="modal-media">Open media modal</button>
<dialog id="modal-media" class="modal" aria-labelledby="modal-media-title">
  <div class="modal__body modal__body--media">
    <button type="button" class="modal__close" data-close-modal aria-label="Close">
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
        <button type="button" class="usa-button" data-close-modal>Set up</button>
        <button type="button" class="usa-button usa-button--tertiary" data-close-modal>Not now</button>
      </div>
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
