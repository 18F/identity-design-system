# Login.gov Design System

The Login.gov Design System is an extension of the [U.S. Web Design System](https://designsystem.digital.gov/) used on Login.gov sites to consistently identify the Login.gov brand.

This documentation describes how to use the Login.gov Design System in a new project. Read [CONTRIBUTING.md](https://github.com/18F/identity-design-system/blob/main/CONTRIBUTING.md) to learn more about contributing to the design system itself.

## Installation

[Node.js](https://nodejs.org/en) is required to use the Login.gov Design System. You should install this first if it's not already available.

Next, install the package using NPM from your project's directory:

```
npm install @18f/identity-design-system
```

## Usage

As an extension of the U.S. Web Design System (USWDS), [the _Getting started for developers_](https://designsystem.digital.gov/documentation/getting-started-for-developers/) guide can be a useful resource. The Login.gov Design System aims to be a drop-in replacement for the USWDS, so that all of its documentation would apply for the Login.gov Design System. The only change you're required to make is to update any references of `@uswds/uswds` with `@18f/identity-design-system`.

### Styles

The Login.gov Design System uses [Sass](https://sass-lang.com/) to generate stylesheets. While you can use any Sass compilation process, we recommend [`@18f/identity-build-sass`](https://www.npmjs.com/package/@18f/identity-build-sass), since it supports any environment where Node.js is already available, and it comes prebundled with default behaviors which are well-suited for the design system.

Here's an example stylesheet that imports the design system:

```scss
@use 'uswds-core';
@forward 'uswds';
```

The only requirements for Sass compilation are:

- Your [Sass load paths](https://sass-lang.com/documentation/cli/dart-sass#load-path) must include `node_modules/@18f/identity-design-system/packages`
- You must be using the [Dart Sass](https://sass-lang.com/dart-sass) implementation of Sass

If you're using `@18f/identity-build-sass`, the following command will compile a CSS file to `build/styles.css`:

```
npx build-sass path/to/styles.css.scss --out-dir=build
```

#### Browser-Ready CSS Bundles

While it's recommended to import the Login.gov Design System as a Sass module to support [optimization options](#optimization), a precompiled CSS bundle is made available for convenience or for projects where it's not possible to include a Sass build process.

These files are found within `dist/assets/css` of [the published NPM package](https://www.npmjs.com/package/@18f/identity-design-system?activeTab=code). When installed locally, this is found at `node_modules/@18f/identity-design-system`.

```html
<html>
  <head>
    <!-- ... -->
    <link rel="stylesheet" href="/path/to/identity-design-system/dist/assets/css/styles.css">
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

### JavaScript

As an NPM package, you can import the Login.gov Design System anywhere in your projects imports:

```js
import '@18f/identity-design-system';
```

By default, this will include JavaScript for _every_ component, which can increase load times for users and build times for developers. Refer to [the Options section below](#optimization) to learn how to optimize JavaScript imports.

#### Browser-Ready JavaScript Bundles

While it's recommended to import the Login.gov Design System as an NPM package to support [optimization options](#optimization), a precompiled JavaScript bundle is made available for convenience or for projects where it's not possible to include a JavaScript build process.

These files are found within `dist/assets/js` of [the published NPM package](https://www.npmjs.com/package/@18f/identity-design-system?activeTab=code). When installed locally, this is found at `node_modules/@18f/identity-design-system`.

```html
<html>
  <head>
    <!-- ... -->
    <script src="/path/to/identity-design-system/dist/assets/js/init.js"></script>
  </head>
  <body>
    <!-- ... -->
    <script src="/path/to/identity-design-system/dist/assets/js/main.js"></script>
  </body>
</html>
```

## Options

### Optimization

If your project is not using every component of the design system, it is recommended that you optimize your build by cherry-picking the individual components that you are using.

In Sass, you can do this by replacing the forwarded `'uswds'` module with the packages of the individual components:

```diff
@use 'uswds-core';
- @forward 'uswds';
+ @forward 'usa-accordion';
```

You can find the package name on [each component's documentation](https://designsystem.digital.gov/components/overview/) (e.g. [Accordion → Package](https://designsystem.digital.gov/components/accordion/#accordion-package)).

In JavaScript, you can import named members of the JavaScript package. If you are using a bundler which supports dead code elimination, any unused components will be removed from the compiled output. Each named import includes a `on` method to initialize the component on the page.

```diff
- import '@18f/identity-design-system';
+ import { accordion } from '@18f/identity-design-system';
+ accordion.on();
```

### Theme Variables

The Login.gov Design System configures USWDS theme variables to provide defaults designed to be used across all Login.gov sites. These should almost always work well out-of-the-box, and not require further configuration.

If needed, you can extend these using [the documented process for configuring settings](https://designsystem.digital.gov/documentation/settings/), providing variables when importing the `uswds-core` package:

```diff
- @use 'uswds-core';
+ @use 'uswds-core' with (
+   $theme-body-font-size: 'sm'
+ );
```

## License

See [LICENSE](https://github.com/18F/identity-design-system/blob/main/LICENSE) for licensing information.
