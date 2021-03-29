---
title: Side navigation
lead: >
  Hierarchical, vertical navigation to place at the side of a page. This should correspond to other headers on the page.
---

{% include helpers/base-component.html component="side-navigation" stylesheet="sidenav" %}
## Single level
{% capture example %}
<nav aria-label="Secondary navigation" class="tablet:grid-col-4 sidenav">
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item usa-parent">
      <a href="{{ page.url }}" class="usa-current">Current page</a>
    </li>
    <li class="usa-sidenav__item usa-parent">
      <a href="{{ page.url }}">Parent link</a>
    </li>
    <li class="usa-sidenav__item usa-parent">
      <a href="{{ page.url }}">Parent link</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Two levels

{% capture example %}
<nav aria-label="Secondary navigation" class="tablet:grid-col-4 sidenav">
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item usa-parent">
      <a href="{{ page.url }}" class="usa-current">Current page</a>
      <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="{{ page.url }}" class="usa-current">Child link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="{{ page.url }}">Child link</a>
        </li>           
      </ul>
    </li>
    <li class="usa-sidenav__item usa-parent">
      <a href="{{ page.url }}">Parent link</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Three levels

{% capture example %}
<nav aria-label="Secondary navigation" class="tablet:grid-col-4 sidenav">
  <ul class="usa-accordion usa-sidenav">
    <li class="usa-sidenav__item usa-parent">
      <a href="{{ page.url }}" class="usa-current">Current page</a>
      <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="{{ page.url }}">Child link</a>
          <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="{{ page.url }}" class="usa-current">Grandchild link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="{{ page.url }}">Grandchild link</a>
        </li>           
      </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="{{ page.url }}">Child link</a>
        </li>           
      </ul>
    </li>
    <li class="usa-sidenav__item usa-parent">
      <a href="{{ page.url }}">Parent link</a>
    </li>
  </ul>
</nav>
{% endcapture %}
{% include helpers/code-example.html code=example %}