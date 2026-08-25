---
title: Popover menu
lead: >
  A popover menu is a dropdown panel of links, typically opened from a
  native details and summary control.
---

## Popover menu

Place a `.popover-menu` panel inside a positioned container so it anchors to
its trigger. Each link uses `.popover-menu__item`.

{% capture example %}
<details class="position-relative display-inline-block" open>
  <summary class="usa-button">Account</summary>
  <div class="popover-menu">
    <a class="popover-menu__item" href="#">Your account</a>
    <a class="popover-menu__item" href="#">Connected accounts</a>
    <a class="popover-menu__item" href="#">History</a>
    <a class="popover-menu__item" href="#">Sign out</a>
  </div>
</details>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Alignment

By default the panel is right-aligned to its trigger. Add
`.popover-menu--left` to align it to the trigger's left edge, or
`.popover-menu--right` to state the default alignment explicitly.

{% capture example %}
<details class="position-relative display-inline-block" open>
  <summary class="usa-button">Left-aligned</summary>
  <div class="popover-menu popover-menu--left">
    <a class="popover-menu__item" href="#">Your account</a>
    <a class="popover-menu__item" href="#">Connected accounts</a>
    <a class="popover-menu__item" href="#">Sign out</a>
  </div>
</details>
{% endcapture %}
{% include helpers/code-example.html code=example %}

## Direction

Add `.popover-menu--up` to open the panel upward, growing from the top
edge of its trigger instead of the bottom.

{% capture example %}
<details class="position-relative display-inline-block" open>
  <summary class="usa-button">Opens up</summary>
  <div class="popover-menu popover-menu--up popover-menu--left">
    <a class="popover-menu__item" href="#">Your account</a>
    <a class="popover-menu__item" href="#">Connected accounts</a>
    <a class="popover-menu__item" href="#">Sign out</a>
  </div>
</details>
{% endcapture %}
{% include helpers/code-example.html code=example %}
