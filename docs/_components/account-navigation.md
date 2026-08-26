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

The header holds the logo and a user menu. The menu is a native `<details>`
disclosure, so it opens on click without JavaScript; the chevron rotates while
it is open.

{% capture example %}
<header class="account-header">
  <a href="#" class="account-header__logo-link" aria-label="Login.gov home">
    <img class="account-header__logo" src="{{ site.baseurl }}/assets/img/login-gov-logo.svg" alt="Login.gov">
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
  </div>
</header>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Side navigation

`.account-nav` lists the account sections. Mark the active section with
`.account-nav__link--current`.

{% capture example %}
<nav class="account-nav" aria-label="Account">
  <ul class="account-nav__list">
    <li class="account-nav__item">
      <a href="#" class="account-nav__link account-nav__link--current" aria-current="page">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#home"></use></svg>
        Your account
      </a>
    </li>
    <li class="account-nav__item">
      <a href="#" class="account-nav__link">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#security"></use></svg>
        Your authentication methods
      </a>
    </li>
    <li class="account-nav__item">
      <a href="#" class="account-nav__link">
        <svg class="usa-icon" aria-hidden="true" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#account_circle"></use></svg>
        Connected accounts
      </a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}
