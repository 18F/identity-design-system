---
title: Popover menu
lead: >
  A popover menu is a dropdown panel of links, typically opened from a
  native details and summary control.
---

## Popover menu

Use `.popover-menu-disclosure` on the positioned details element. The panel
keeps its preferred alignment when there is room, shifts inside the viewport
at a side edge, and opens on the other side of the trigger when needed.

{% capture example %}
<details class="popover-menu-disclosure position-relative display-inline-block" open>
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
<details class="popover-menu-disclosure position-relative display-inline-block" open>
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
<details class="popover-menu-disclosure position-relative display-inline-block" open>
  <summary class="usa-button">Opens up</summary>
  <div class="popover-menu popover-menu--up popover-menu--left">
    <a class="popover-menu__item" href="#">Your account</a>
    <a class="popover-menu__item" href="#">Connected accounts</a>
    <a class="popover-menu__item" href="#">Sign out</a>
  </div>
</details>
{% endcapture %}
{% include helpers/code-example.html code=example %}
