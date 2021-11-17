## Welcome!

We're so glad you're thinking about contributing to an 18F open source project! If you're unsure about anything, just ask -- or submit the issue or pull request anyway. The worst that can happen is you'll be politely asked to change something. We love all friendly contributions.

We want to ensure a welcoming environment for all of our projects. Our staff follow the [18F Code of Conduct](https://github.com/18F/code-of-conduct/blob/master/code-of-conduct.md) and all contributors should do the same.

We encourage you to read this project's CONTRIBUTING policy (you are here), its [LICENSE](LICENSE.md), and its [README](README.md).

If you have any questions or want to read more, check out the [18F Open Source Policy GitHub repository](https://github.com/18f/open-source-policy), or just [shoot us an email](mailto:18f@gsa.gov).

## Coding Standards

### Extending the U.S. Web Design System

Since the Login.gov Design System is based upon the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/), the code should reflect this:

- Where possible, use [the available Sass theme variables](https://designsystem.digital.gov/documentation/developers/#customization-theming-and-tokens) to customize the appearance of components. These are configured under `src/scss/uswds-theme`. We only include the customized variables, to improve visibility of where differences are expected. Refer to the [USWDS theme variables source](https://github.com/uswds/uswds/tree/develop/src/stylesheets/theme) for the full set of configuration values.
- To limit side-effects and to clarify where styles are extended, customized USWDS styles should follow as close to the file location and CSS selector as possible. For example, if USWDS defines a selector `.usa-overlay` in `src/stylesheets/components/_header.scss` which defines a style `background` that we want to override, the style should be located at an identically-named selector in `src/scss/components/_header.scss` in this project.
- Prefer color and size tokens when possible. Never use hard-coded hex colors. Instead, use the `color` SCSS function with a [color token](https://design.login.gov/utilities/color/) as its argument.

## Public domain

This project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.
