---
title: Header
lead: >
  A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.
---

{% include helpers/base-component.html component="header" %}

## Default

{% capture example %}
<div class="usa-overlay"></div>
<div class="usa-header usa-header--extended">
  <div class="usa-nav-container">
    <div class="usa-navbar">
      <div class="usa-logo">
        <a href="{{ site.baseurl }}">
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
  </div>
</div>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Mobile

{% include helpers/mobile-embed.html embed="header/mobile" %}
