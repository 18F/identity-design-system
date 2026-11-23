---
title: Side navigation
lead: >
  Side navigation shows where the current page sits within a section and links to related pages.
---

{% include helpers/base-component.html component="side-navigation" stylesheet="usa-sidenav" %}

Keep the current branch visible. Mark only the link for the current page with `aria-current="page"`; the nested lists communicate its parent sections. Use the `nds-side-nav` wrapper to opt into the NDS rail.

## Single level

{% assign depth = 1 %}
{% capture example %}{% include helpers/side-navigation.html levels=depth variant="Single level" %}{% endcapture %}
{% include helpers/code-example.html code=example %}

## Two levels

{% assign depth = 2 %}
{% capture example %}{% include helpers/side-navigation.html levels=depth variant="Two levels" %}{% endcapture %}
{% include helpers/code-example.html code=example %}

## Three levels

{% assign depth = 3 %}
{% capture example %}{% include helpers/side-navigation.html levels=depth variant="Three levels" %}{% endcapture %}
{% include helpers/code-example.html code=example %}
