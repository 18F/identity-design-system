---
title: Banner
lead: >
  The banner tells visitors they are on an official government website.
---

The banner is a full-width element shown at the very top of the page, above the
site header. It shows a flag, a short statement that this is an official
government site, and a link that opens an explainer.

## Default

{% capture example %}
<section class="official-banner" aria-label="Official government website">
  <div class="official-banner__content">
    <span class="official-banner__flag">
      <img class="usa-icon" src="{{ site.baseurl }}/assets/img/us_flag.svg" alt="" aria-hidden="true">
    </span>
    <p class="official-banner__text">
      An official website of the United States government.
      <button type="button" class="official-banner__how link" data-open-modal="official-banner-explainer">Here's how you know</button>
    </p>
  </div>
</section>

<dialog id="official-banner-explainer" class="modal official-banner-modal" aria-labelledby="official-banner-explainer-title">
  <div class="modal__body">
    <button type="button" class="modal__close" data-close-modal aria-label="Close">
      <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#close"></use></svg>
    </button>
    <div class="modal__heading">
      <h2 id="official-banner-explainer-title" class="modal__title">U.S. Government Websites</h2>
    </div>
    <div class="modal__content">
      <div class="official-banner-modal__item">
        <div class="official-banner-modal__header">
          <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#account_balance"></use></svg>
          <h3 class="official-banner-modal__heading">Official websites use .gov</h3>
        </div>
        <p class="official-banner-modal__description">
          A <strong>.gov</strong> website belongs to an official government organization in the United States.
        </p>
      </div>
      <hr class="official-banner-modal__rule">
      <div class="official-banner-modal__item">
        <div class="official-banner-modal__header">
          <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#lock"></use></svg>
          <h3 class="official-banner-modal__heading">Secure .gov websites use HTTPS</h3>
        </div>
        <p class="official-banner-modal__description">
          A <strong>lock</strong> or <strong>https://</strong> means you safely connected to the .gov website. Share sensitive information only on official, secure websites.
        </p>
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
