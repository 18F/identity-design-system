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

The top chrome is the library's signed-out header: 84px tall on wide screens,
with the logo 48px from the start edge. Below `768px` the logo is centered with
24px above and below it. The signed-in header is the
[account navigation]({{ site.baseurl }}/account-navigation/) header.

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
        <img class="auth-page__logo-banner-image" src="{{ site.baseurl }}/assets/img/login-gov-logo-nds.svg" width="153" height="24" alt="Login.gov">
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

## Agency co-branding

On screens a partner agency sends the user to (sign in, MFA, identity
verification), the top chrome shows the agency's seal after the Login.gov logo,
separated by a thin vertical rule. Add an `.auth-page__logo-banner-agency`
wrapper after the logo link, inside `.auth-page__logo-banner`, holding a 24px
[agency seal]({{ site.baseurl }}/agency-seal/) (`.agency-seal--24`).
The wrapper draws the rule, so no extra markup is needed for it.

Give the seal image the agency's name as its alt text, because the seal is the
only place on the page that tells the user which agency they came from. Set the
agency's seal fill with `--nds-agency-seal-bg`.

On desktop the logo and seal sit at the start of the top chrome. On small
screens they're centered. The previews below show only the top chrome, so they
set `min-height: auto` on the shell; real pages leave it out.

{% capture example %}
<div class="auth-page" style="min-height: auto">
  <header class="auth-page__top-chrome">
    <div class="auth-page__logo-banner">
      <a class="auth-page__logo-banner-link" href="#" aria-label="Login.gov home">
        <img class="auth-page__logo-banner-image" src="{{ site.baseurl }}/assets/img/login-gov-logo-nds.svg" width="153" height="24" alt="">
      </a>
      <span class="auth-page__logo-banner-agency">
        <span class="agency-seal agency-seal--24" style="--nds-agency-seal-bg: #151038">
          <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="Sample Agency">
        </span>
      </span>
    </div>
  </header>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

### With progress

The agency group composes with the top chrome progress slot. On desktop the
logo and seal stay at the start and the stepper is centered in the viewport. On
small screens the stepper stacks below the logo and seal.

{% capture example %}
<div class="auth-page" style="min-height: auto">
  <header class="auth-page__top-chrome">
    <div class="auth-page__logo-banner">
      <a class="auth-page__logo-banner-link" href="#" aria-label="Login.gov home">
        <img class="auth-page__logo-banner-image" src="{{ site.baseurl }}/assets/img/login-gov-logo-nds.svg" width="153" height="24" alt="">
      </a>
      <span class="auth-page__logo-banner-agency">
        <span class="agency-seal agency-seal--24" style="--nds-agency-seal-bg: #151038">
          <img class="agency-seal__image" src="{{ site.baseurl }}/img/sample-agency-seal-light.svg" alt="Sample Agency">
        </span>
      </span>
    </div>
    <div class="auth-page__top-chrome-progress">
      <div class="progress">
        <div class="progress__scroll">
          <ol class="progress__stepper" aria-label="Identity verification">
            <li>
              <div class="progress__step" data-complete="true">
                <span class="progress__step-surface">
                  <span class="progress__step-check usa-icon">
                    <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
                  </span>
                  Account
                </span>
              </div>
            </li>
            <li>
              <div class="progress__step" data-complete="true">
                <span class="progress__step-surface">
                  <span class="progress__step-check usa-icon">
                    <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#check"></use></svg>
                  </span>
                  Security
                </span>
              </div>
            </li>
            <li>
              <div class="progress__step" aria-current="step">
                <span class="progress__step-surface">
                  <span class="progress__step-label">Verification</span>
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </header>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}
