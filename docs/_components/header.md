---
title: Header
lead: >
  A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.
---

<div data-ui-bucket="nds" hidden markdown="1">

The Login.gov header comes in four types. Each is a full-width bar with a white
background and a hairline bottom border: 84px tall on wide screens, and 72px or
taller below `768px`, where the logo is centered. Resize the window to see the
mobile layout of each type.

The signed-out types are the [page shell]({{ site.baseurl }}/page-shell/) top
chrome (`.auth-page__top-chrome`). The signed-in type is the
[account navigation]({{ site.baseurl }}/account-navigation/) header
(`.account-header`). See those pages for the full layouts.

## Not authenticated

{% capture example %}
<div class="auth-page" style="min-height: auto">
  <header class="auth-page__top-chrome">
    <div class="auth-page__logo-banner">
      <a class="auth-page__logo-banner-link" href="#" aria-label="Login.gov home">
        <img class="auth-page__logo-banner-image" src="{{ site.baseurl }}/assets/img/login-gov-logo-nds.svg" width="153" height="24" alt="">
      </a>
    </div>
  </header>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Not authenticated with agency

On screens a partner agency sends the user to, the agency's seal follows the
logo after a thin vertical rule.

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

## Authenticated

The user's email opens the account menu. Below `768px` the email is hidden and a
menu button at the start of the header opens the account menu instead.

{% capture example %}
<header class="account-header">
  <a href="#" class="account-header__logo-link" aria-label="Login.gov home">
    <img class="account-header__logo" src="{{ site.baseurl }}/assets/img/login-gov-logo-nds.svg" width="153" height="24" alt="">
  </a>
  <div class="account-header__actions">
    <details class="account-header__menu">
      <summary class="account-header__menu-button">
        <span class="usa-sr-only">Account menu</span>
        <span class="account-header__menu-email">john@email.com</span>
        <svg class="usa-icon account-header__menu-chevron" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#expand_more"></use></svg>
      </summary>
      <div class="account-mobile-menu__panel">
        <form class="account-mobile-menu__logout-form" action="#" method="post">
          <button type="submit" class="account-nav__link account-mobile-menu__logout-button">Sign out</button>
        </form>
      </div>
    </details>
    <details class="account-mobile-menu">
      <summary class="account-mobile-menu__summary">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#menu"></use></svg>
        <span class="usa-sr-only">Account menu</span>
      </summary>
      <div class="account-mobile-menu__panel">
        <div class="account-mobile-menu__logout">
          <form class="account-mobile-menu__logout-form" action="#" method="post">
            <button type="submit" class="account-nav__link account-mobile-menu__logout-button">Sign out</button>
          </form>
        </div>
      </div>
    </details>
  </div>
</header>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Stepper

In multi-step flows a [progress stepper]({{ site.baseurl }}/progress/) is
centered in the header. Below `768px` it moves under the logo, runs edge to
edge, and scrolls. In the narrow documentation column below, the centered
stepper runs under the logo's fade; on a full-width page they don't overlap.

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
    </div>
  </header>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

</div>

<div data-ui-bucket="legacy" markdown="1">

{% include helpers/base-component.html component="header" %}

## Default

{% capture example %}
<div class="usa-overlay"></div>
<header class="usa-header usa-header--extended">
  <div class="usa-navbar">
    <div class="usa-logo">
      <a href="{{ site.baseurl }}/">
        <img
          src="{{ site.baseurl }}/assets/img/login-gov-logo.svg"
          class="usa-logo__img"
          alt="Login.gov Homepage"
          width="179"
          height="24"
        />
      </a>
    </div>

    <button class="usa-menu-btn">Menu</button>
  </div>

  <nav class="usa-nav" aria-label="Primary links">
    <div class="usa-nav__inner">
      <button class="usa-nav__close" aria-label="Close">
        <svg class="usa-icon usa-icon--size-3" aria-hidden="true" role="img">
          <use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#close"></use>
        </svg>
      </button>
      <ul class="usa-nav__primary usa-accordion">
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link" href="{{ site.baseurl }}">
            Navigation Link
          </a>
        </li>
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link usa-current" href="{{ site.baseurl }}">
            Current Navigation Link
          </a>
        </li>
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="nav-section"
          >
            <span>Section</span>
          </button>
          <ul id="nav-section" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href="{{ site.baseurl }}">
                <span>Navigation Link</span>
              </a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href="{{ site.baseurl }}">
                <span>Navigation Link</span>
              </a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href="{{ site.baseurl }}">
                <span>Navigation Link</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link usa-current"
            aria-expanded="false"
            aria-controls="current-nav-section"
          >
            <span>Current Section</span>
          </button>
          <ul id="current-nav-section" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href="{{ site.baseurl }}">
                <span>Navigation Link</span>
              </a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href="{{ site.baseurl }}">
                <span>Navigation Link</span>
              </a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href="{{ site.baseurl }}">
                <span>Navigation Link</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</header>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Mobile

{% include helpers/mobile-embed.html embed="header/mobile" %}

</div>

<script>
  // Show the header examples for the active stylesheet bucket
  // (?ui_test_bucket=nds), mirroring the stylesheet swap in the base layout.
  (function () {
    var nds = new URLSearchParams(location.search).get('ui_test_bucket') === 'nds';
    document.querySelectorAll('[data-ui-bucket]').forEach(function (section) {
      section.hidden = (section.getAttribute('data-ui-bucket') === 'nds') !== nds;
    });
  })();
</script>
