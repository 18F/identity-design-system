---
title: Side navigation
lead: >
  Hierarchical, vertical navigation to place at the side of a page. This should correspond to other headers on the page.
---

{% include helpers/base-component.html component="side-navigation" stylesheet="usa-sidenav" %}

Each link is a 44px row. Top-level (parent) links can start with a 20px icon.
Child links are indented 44px and grandchild links 56px.

Mark the current page's link with `.usa-current` and `aria-current="page"`; it
gets a tinted background. Following USWDS, also mark the current page's
ancestors with `.usa-current`; they keep black text without the tint. A link
that has its sublist open shows a chevron at the end. Other child and
grandchild links use the secondary text color.

## Single level

{% capture example %}
<nav aria-label="Secondary navigation" class="tablet:grid-col-6">
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item">
      <a href="#" class="usa-current" aria-current="page"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#home"></use></svg> Home</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="#"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#account_circle"></use></svg> Account</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="#"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#lock"></use></svg> Security</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="#"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#history"></use></svg> History</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Two levels

{% capture example %}
<nav aria-label="Secondary navigation" class="tablet:grid-col-6">
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item">
      <a href="#" class="usa-current"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#home"></use></svg> Home</a>
      <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="#" class="usa-current" aria-current="page">Child page</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="#">Child page</a>
        </li>
      </ul>
    </li>
    <li class="usa-sidenav__item">
      <a href="#"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#account_circle"></use></svg> Account</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="#"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#lock"></use></svg> Security</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="#"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#history"></use></svg> History</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Three levels

{% capture example %}
<nav aria-label="Secondary navigation" class="tablet:grid-col-6">
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item">
      <a href="#" class="usa-current"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#home"></use></svg> Home</a>
      <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="#" class="usa-current">Child page</a>
          <ul class="usa-sidenav__sublist">
            <li class="usa-sidenav__item">
              <a href="#" class="usa-current" aria-current="page">Grandchild page</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="#">Grandchild page</a>
            </li>
          </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="#">Child page</a>
        </li>
      </ul>
    </li>
    <li class="usa-sidenav__item">
      <a href="#"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#account_circle"></use></svg> Account</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="#"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#lock"></use></svg> Security</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="#"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{ site.baseurl }}/assets/img/sprite.svg#history"></use></svg> History</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}
