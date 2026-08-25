---
title: Page shell
lead: >
  The page shell provides the full-width chrome and layout for a page.
---

## Page shell

The `.auth-page` shell owns page-level layout: a sticky top chrome with a logo
banner and a centered progress slot, a flexible `.auth-page__main` content area,
and a footer slot. It also sets the `--nds-*` custom properties that other
components read.

The shell is a **full-width, page-level** element. The preview below is shown
inside the documentation's constrained content column, so it appears inset
rather than spanning the full viewport; in a real page it fills the browser
width and its top chrome sticks to the top of the screen.

Modifiers on `.auth-page` adjust alignment, density, surface, and content width
— for example `.auth-page--align-start`, `.auth-page--density-spacious`,
`.auth-page--surface-overlay`, `.auth-page--width-wide`, and
`.auth-page--width-form`.

{% capture example %}
<a class="skip-link" href="#page-shell-main">Skip to main content</a>
<div class="auth-page">
  <header class="auth-page__top-chrome">
    <div class="auth-page__logo-banner">
      <a class="auth-page__logo-banner-link" href="#" aria-label="Login.gov home">
        <img class="auth-page__logo-banner-image" src="{{ site.baseurl }}/assets/img/login-gov-logo.svg" alt="Login.gov">
      </a>
    </div>
  </header>
  <main class="auth-page__main" id="page-shell-main">
    <div class="card">
      <div class="card__body">
        <p class="card__title">Sign in</p>
        <form class="card-form">
          <label for="page-shell-email" class="usa-label">Email address</label>
          <input id="page-shell-email" type="email" autocomplete="username" class="usa-input">
          <label for="page-shell-password" class="usa-label">Password</label>
          <input id="page-shell-password" type="password" autocomplete="current-password" class="usa-input">
          <div class="margin-top-4">
            <button type="submit" class="usa-button">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
