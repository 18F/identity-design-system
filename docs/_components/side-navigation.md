---
title: Side navigation
lead: >
  Hierarchical, vertical navigation to place at the side of a page. This should correspond to other headers on the page.
---

{% include helpers/base-component.html component="side-navigation" stylesheet="usa-sidenav" %}
## Single level
{% capture example %}
<nav aria-label="Secondary navigation" class="tablet:grid-col-4">
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item">
      <a href="" class="usa-current">Current page</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="">Parent link</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="">Parent link</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Two levels

{% capture example %}
<nav aria-label="Secondary navigation" class="tablet:grid-col-4">
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item">
      <a href="" class="usa-current">Current page</a>
      <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="" class="usa-current">Child link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="">Child link</a>
        </li>
      </ul>
    </li>
    <li class="usa-sidenav__item">
      <a href="">Parent link</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Three levels

{% capture example %}
<nav aria-label="Secondary navigation" class="tablet:grid-col-4">
  <ul class="usa-accordion usa-sidenav">
    <li class="usa-sidenav__item">
      <a href="" class="usa-current">Current page</a>
      <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="">Child link</a>
          <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="" class="usa-current">Grandchild link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="">Grandchild link</a>
        </li>
      </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="">Child link</a>
        </li>
      </ul>
    </li>
    <li class="usa-sidenav__item">
      <a href="">Parent link</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}
