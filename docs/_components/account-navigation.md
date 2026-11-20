---
title: Account navigation
lead: >
  The account navigation is the signed-in chrome: a top header with a user menu
  and a side navigation next to the main content.
---

The account navigation is a full-width chrome layout normally rendered at the
top and side of a signed-in page. In the narrow documentation column below it
appears inset, but on a real page the header spans the full width and the shell
fills the viewport.

## Header

The header is the library's authenticated header. On wide screens it holds the
logo and a user menu: the user's email as a tertiary text button with a
chevron. The menu is a native `<details>` disclosure, so it opens on click
without JavaScript; the chevron rotates while it's open.

Below `768px` the user menu is hidden, the logo is centered, and a
`.account-mobile-menu` icon button at the start opens the account sections.
Resize the window to see the mobile layout. For the signed-out header, see
[page shell]({{ site.baseurl }}/page-shell/).

{% capture example %}
<header class="account-header">
  <a href="#" class="account-header__logo-link" aria-label="Login.gov home">
    <img class="account-header__logo" src="{{ site.baseurl }}/assets/img/login-gov-logo-nds.svg" width="153" height="24" alt="Login.gov">
  </a>
  <div class="account-header__actions">
    <details class="account-header__menu">
      <summary class="account-header__menu-button">
        <span class="account-header__menu-email">user@example.gov</span>
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
        <nav class="account-nav account-nav--mobile" aria-label="Account">
          <ul class="account-nav__list">
            <li class="account-nav__item">
              <a href="#" class="account-nav__link account-nav__link--current" aria-current="page">
                <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#home"></use></svg>
                Home
              </a>
            </li>
            <li class="account-nav__item">
              <a href="#" class="account-nav__link">
                <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#lock"></use></svg>
                Security
              </a>
            </li>
          </ul>
        </nav>
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

## Side navigation

`.account-nav` lists the account sections, styled as the library's single-level
side navigation: 44px rows, 8px apart, each with a 20px icon. Mark the active
section with `.account-nav__link--current` and `aria-current="page"`; it gets a
tinted background. For nested navigation, use the
[side navigation]({{ site.baseurl }}/side-navigation/).

{% capture example %}
<nav class="account-nav" aria-label="Account">
  <ul class="account-nav__list">
    <li class="account-nav__item">
      <a href="#" class="account-nav__link account-nav__link--current" aria-current="page">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#home"></use></svg>
        Home
      </a>
    </li>
    <li class="account-nav__item">
      <a href="#" class="account-nav__link">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#account_circle"></use></svg>
        Account
      </a>
    </li>
    <li class="account-nav__item">
      <a href="#" class="account-nav__link">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#lock"></use></svg>
        Security
      </a>
    </li>
    <li class="account-nav__item">
      <a href="#" class="account-nav__link">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#history"></use></svg>
        History
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}
