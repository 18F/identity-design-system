---
permalink: /layout/
title: Layout
sidenav:
  - text: Grid and Spacing
    href: "#grid-and-spacing"
  - text: Page Layouts
    href: "#page-layouts"
  - text: Basic header, side nav
    href: "#basic-header-side-navigation-and-slim-footer"
  - text: Extended content
    href: "#extended-header-full-width-content-and-medium-footer"
  - text: Landing page
    href: "#basic-header-landing-page-content-and-slim-footer"

lead: >
  For consistent visual appearance across login.gov sites, use these page layouts with grid and spacing systems.
---

## Grid and spacing

The grid system uses a series of containers, rows, and columns to lay out and align content. See [the U.S. Web Design System documentation](https://v2.designsystem.digital.gov/utilities/layout-grid/) for further information (for reference, the {{ site.title }} is built upon `uswds@{{ site.package_json.uswds_version }}`).

## Page layouts

Below are a few sample layouts which combine together main layout pieces as may be required for use. Feel free to mix-and-match from the below layouts to achieve the desired layout for your use.

Select the previews below to open the layout in a new tab, where you can inspect the source.

### Basic header, side navigation, and slim footer

- The **basic header** with optional site title features a multi-level primary menu to the right of the logo.
- **Side navigation** to be used for links to items within this page or within the section under the current primary menu item.
- The **slim footer**, which is the minimum footer required. It is the footer used on this site.

{% include helpers/page-preview.html
  path="/examples/basic-header-sidenav-slim-footer.html"
%}

### Extended header, full-width content, and medium footer

- The **extended header** features the primary menu underneath the logo and a secondary menu with search bar to the right of the logo. It is the header used on this site.
- Without a side navigation, the content is **full-width**.
- The **medium footer** includes an area for content related to the current page or section.

{% include helpers/page-preview.html
  path="/examples/extended-header-no-sidenav-medium-footer.html"
%}

### Basic header, landing page content, and slim footer

- The **basic header** features a multi-level primary menu to the right of the logo.
- The **landing page** content features large blocks of color to call out your message. Use it sparingly for greatest effect.
- The **medium footer** includes an area for content related to the current page or section.

{% include helpers/page-preview.html
  path="/examples/basic-header-landing-slim-footer.html"
%}
