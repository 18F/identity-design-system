---
permalink: /
layout: home
title: Overview
lead: >
  Use the login.gov Design System when developing login.gov sites to consistently identify the login.gov brand.
---

<section class="usa-section usa-section-dark">
  <div class="grid-container">
    <div class="grid-row">
      <div class="maxw-tablet usa-prose">
        <div class="usa-display">
          The key to a strong brand <br>is <span class="text-accent-cool">consistency</span>.
        </div>
        <p class="usa-font-lead">{{ page.lead }}</p>
      </div>
    </div>
  </div>
</section>

<section class="usa-section usa-section-light">
  <div class="grid-container">
    <div class="grid-row grid-gap-4">
      <div class="tablet:grid-col">
<div class="usa-prose margin-bottom-2 tablet:margin-bottom-0" markdown="1">

# Installs in seconds

Install images, stylesheets, and script files in both their original and compiled forms with npm.

</div>
      </div>
      <div class="tablet:grid-col">
<div class="usa-prose margin-bottom-2 tablet:margin-bottom-0" markdown="1">

# Built with USWDS

The {{ site.title }} is built using the <a href="https://v2.designsystem.digital.gov/" target="_blank">U.S. Web Design System</a> for a consistent appearance across government sites.

</div>
      </div>
      <div class="tablet:grid-col">
<div class="usa-prose margin-bottom-2 tablet:margin-bottom-0" markdown="1">

# A work in progress

The latest version is <strong class="text-no-wrap">{{ site.package_json.this_version }}</strong> which uses <strong class="text-no-wrap">uswds@{{ site.package_json.uswds_version }}</strong>. Spot an issue? We’d love to hear about it <a href="https://github.com/18F/identity-style-guide/issues" target="_blank">on GitHub</a>.

</div>
      </div>
    </div>
  </div>
</section>

<section class="usa-section">
  <div class="grid-container">
    <div class="grid-row grid-gap-4">
<div class="grid-col usa-prose" markdown="1">

# Using the {{ site.title }}

First, install the latest version using npm:

```shell
npm install identity-style-guide
```

If this is your first npm dependency, a `package-lock.json` file will be generated. Commit this file to source control.

The module is now installed at `./node_modules/identity-style-guide`. Woohoo!

## Compiled CSS, JavaScript, fonts, and images

You’ll find the compiled assets in `dist/assets`. These are ready to be used in your project directly.

We recommend including these files from `node_modules` directly, either by linking to them at that location or by copying them automatically during a build process, to make upgrades easier in the future.

## Uncompiled Sass and next-generation JavaScript

The original source files in Sass and next-generation JavaScript are in `src`. Use these files if your project will be extending styles or JavaScript — but you’ll need to compile them in your build pipeline using a Sass compiler and a next-generation JavaScript compiler like Babel.

</div>
    </div>
  </div>
</section>
