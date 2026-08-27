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

Modifiers on `.auth-page` adjust alignment, density, surface, and content width:

- **Alignment** — `.auth-page--align-start` (top-aligns the main content instead
  of centering it), `.auth-page--align-stretch`, and `.auth-page--align-mobile-start`.
- **Density** — controls the vertical spacing around and between the main
  content. `.auth-page--density-spacious` increases the gap between stacked
  content blocks; `.auth-page--density-fullscreen` removes the surrounding
  padding so the content fills the shell; `.auth-page--density-mobile-compact`
  tightens spacing on small screens.
- **Surface** — `.auth-page--surface-overlay` renders the shell on an overlay
  background rather than the default page surface.
- **Content width** — `.auth-page--width-wide` and `.auth-page--width-form`
  set the maximum width of the main content column.

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
