## Unreleased

### Bug Fixes

- Fix external link icon margin when followed by additional text content. ([#289](https://github.com/18F/identity-style-guide/pull/289))

## 6.3.0

### New Features

- Field validation success is added to form validation. ([#265](https://github.com/18F/identity-style-guide/pull/265))
- Added custom styling for the Process List component. ([#279](https://github.com/18F/identity-style-guide/pull/279))

### Improvements

- The default font is now Public Sans for both headings and body copy. This is not being considered a breaking change, as it is the new default guidance. To preserve existing font settings to allow more time to migrate, set `$theme-font-type-sans: 'source-sans-pro';` and `$theme-font-type-serif: 'merriweather';`. ([#264](https://github.com/18F/identity-style-guide/pull/264))
- Add Login.gov-specific component configuration. ([#258](https://github.com/18F/identity-style-guide/pull/258))
  - [Identifier component](https://designsystem.digital.gov/components/identifier/)
  - Link colors on dark backgrounds
- The default line-height is now set to 1.5. This is not being considered a breaking change, as it is the new default guidance. To preserve existing font settings to allow more time to migrate, set `$theme-body-line-height: 6`. ([#283](https://github.com/18F/identity-style-guide/pull/283))
- Overlay is now shown with a lighter backdrop color. ([#260](https://github.com/18F/identity-style-guide/pull/260))
- Form Dropdown is now more visually consistent with other form fields. ([#263](https://github.com/18F/identity-style-guide/pull/263))
- Form hint text is now shown with an italicized style and increased vertical margins. ([#262](https://github.com/18F/identity-style-guide/pull/262))
- Icons for form validation errors are aligned to the top. ([#265](https://github.com/18F/identity-style-guide/pull/265))
- The tile variant of checkboxes and radio buttons have a slightly increased font size. ([#281](https://github.com/18F/identity-style-guide/pull/281))
- Checkbox and radio labels which span multiple lines should now appear with a consistent line height relative to surrounding body copy. ([#283](https://github.com/18F/identity-style-guide/pull/283))
- Search will now show full text labels at all sizes, and uses standardized font tokens. ([#259](https://github.com/18F/identity-style-guide/pull/259))

### Bug Fixes

- Fix an issue where `.usa-input--error` would apply the incorrect border color unless also accompanied by `.usa-input`, `.usa-textarea`, or `.usa-select`. ([#275](https://github.com/18F/identity-style-guide/pull/275))

### Dependencies

- Upgraded USWDS from v2.12.1 to v2.13.1 (see [release notes](https://github.com/uswds/uswds/releases)) ([#269](https://github.com/18F/identity-style-guide/pull/269), [#277](https://github.com/18F/identity-style-guide/pull/277), [#280](https://github.com/18F/identity-style-guide/pull/280))

## 6.2.0

### New Features

- All theme variables are now set as [default values](https://sass-lang.com/documentation/variables#default-values), allowing you to override them for per-project requirements. ([#247](https://github.com/18F/identity-style-guide/pull/247))
  - Note: Since the design system is meant to be an opinionated set of smart defaults, it's recommended to use restraint with variable customization, or at least consider when it may be more appropriate to adjust a setting from the design system itself in order to maintain consistency across projects.
- Responsive variants of width utility classes are now enabled. ([#248](https://github.com/18F/identity-style-guide/pull/248))

### Improvements

- Navbar link text is no longer uppercase. ([#249](https://github.com/18F/identity-style-guide/pull/249))
- Visual alignment of Badge component is improved, and its markup guidance has been simplified with improved accessibility semantics. ([#251](https://github.com/18F/identity-style-guide/pull/251))
- Field validation error messages now use updated styling to always display an icon as part of the error message, and not within the field itself. The modifier classes `usa-input--inline` and `usa-error-message--with-icon` no longer have any effect and can be safely removed. ([#255](https://github.com/18F/identity-style-guide/pull/255))
- Focus styles for links and unstyled buttons are now the same. ([#253](https://github.com/18F/identity-style-guide/pull/253))

## 6.1.0

### Improvements

- USWDS is upgraded to the latest version, from v2.11.2 to v2.12.1.
- Whitespace in checkbox and radio label markup will no longer cause the label text to be misplaced.
- Margins surrounding an external link icon have been increased slightly.
- Padding and label font size for tile checkboxes and radio buttons have increased slightly.

## 6.0.0

### Breaking Changes

- USWDS is upgraded to the latest version, from v2.9.0 to v2.11.2.
  - The bordered and large styles of checkboxes and radio buttons have updated guidance to improve compatibility with the [USWDS tile style](https://designsystem.digital.gov/components/radio-buttons/). The classes `usa-radio-bordered`, `usa-radio-large`, `usa-checkbox-bordered`, and `usa-checkbox-large` have been removed. Instead, add `usa-radio__input--bordered`, `usa-radio__input--tile`, `usa-checkbox__input--bordered`, `usa-checkbox__input--tile` respectively as modifiers to the element with the class `usa-radio__input` or `usa-checkbox__input`.
- The Accordion component no longer includes a "Close" button. Remove any instances of `<button class="usa-accordion__close-button">` in your project, or references to the `accordionCloseButton` exported member of the JavaScript package.

## 5.1.0

### New Features

- Add support for SASS package entrypoints to limit or control loading of styles, [similar to USWDS components](https://designsystem.digital.gov/components/packages/). Available packages are `packages/required`, `packages/global`, `packages/components`, and `packages/utilities`.
- The [Side Navigation component](https://design.login.gov/components/side-navigation/) is now documented and includes updated and improved styling. While this should not require any markup changes, you should validate that the updated styling does not conflict with any product-specific styles for side navigation.

### Bug Fixes

- Reduce the border width of the normal outline button to the intended width of `1px` (previously `2px`). The big variant of the outline button is unaffected by this change, and remains `2px`.
- Fix rounded corners on sidebar current page item.
- Fix unintentional rounded corners on search text field.
- Fix utility classes not always applying as expected when applied to components. For example, using `margin-` utility classes on an unstyled button would previously unexpectedly conflict with and not take precedent over the button's own margins.
- Fix all instances of font weight appearance of unstyled buttons in content which applies anti-aliased font smoothing. Previous bug fix attempts had still missed default `:hover` and `:active` states.

## 5.0.3

### Bug Fixes

- Fix font weight appearance of unstyled buttons in content which applies anti-aliased font smoothing.

## 5.0.2

### Bug Fixes

- Fix the appearance of unstyled buttons to appear visually identical to a link.

## 5.0.1

### Bug Fixes

- Fix an issue where a second focus ring effect was still applied to the unstyled button variant.

## 5.0.0

### Breaking Changes

- Several button variants have been removed. These include:
  - Success (`usa-button--success`)
  - Dropdown (`usa-button--dropdown`)
  - Small (`usa-button--small`)
  - Tiny (`usa-button--tiny`)
- The Password Strength Meter component has been removed.

### Improvements

- Link hover and active colors are now distinct.
  - Before: Hover and active colors are both `primary-darker`.
  - After: Hover is `primary-dark`, and active is `primary-darker`.
- Improved support for "Unstyled" button variant ([see documentation](https://design.login.gov/components/buttons/))
- Add three new button variants to control width:
  - `usa-button--wide` displays a button at a wider (minimum) width at larger viewport displays.
  - `usa-button--flexible-width` displays a button at flexible width regardless of viewport size, and overrides default mobile appearance of full-width buttons.
  - `usa-button--full-width` displays a button at full width regardless of viewport size, and overrides default desktop appearance of flexible-width buttons.

### Bug Fixes

- Fix an issue where focused buttons appear with a double focus ring style.
- Fix an issue where using the "auto" package entrypoint may cause components not to be loaded when used with some bundlers (e.g. Webpack).

### Documentation

- Add documentation for "Big" button variants.
- Rename "Secondary" as "Outline" in buttons documentation.

## 4.0.0

### Breaking Changes

- The Spinner button has been removed (`.usa-button__lg-invokeSpinner`).
- Favicon images have been updated for consistency with the U.S. Web Design System. Existing references to `favicon-16x16.png` should be updated to `favicon-16.png`. `favicon-32x32.png` has been removed. The closest substitute is `favicon-40.png`, at size 40 pixels x 40 pixels.

### Improvements

- New favicon size variations are available. The complete set of pixel sizes are: `16`, `40`, `57`, `72`, `114`, `144`, `192`.

### Bug Fixes

- Fix an issue where builds may produce styles in an unpredictable order.
- Fix an issue where `.usa-display` heading font size was rendered larger than intended.
- Fix an issue where `dropdownButton` was using invalid CommonJS syntax when imported from ES module entrypoint.
- Fix an issue where `.usa-prose` heading margins were not applied consistently.
- Fix an issue where importing subpaths may not resolve correctly using native ES modules.

### Internal

- Replace deprecated USWDS variable references with updated equivalent values.

## 3.0.0

### Breaking Changes

- Updates USWDS from 2.0.3 to 2.9.0. Review [release notes](https://designsystem.digital.gov/about/releases/) for specific changes which may apply. Specific impactful changes include...
  - The Tooltip component is now inherited from USWDS, newly introduced as of USWDS 2.8.0. [See component documentation](https://designsystem.digital.gov/components/tooltip/) for more information. The markup of this component is significantly different than that of the component previously implemented in the Login.gov Design System.
  - Due to a rounding precision fix, line-heights for text may appear larger than it had previously.
  - Guidance for many components has been updated to improve accessibility and usability of markup. Neglecting to update this markup should not result in user-facing regressions, but you are recommended to update to improve end-user experience. Refer to the release notes and related component documentation for specifics:
    - SVG images should include `role="img"`.
    - Numeric fields should use `type="text" inputmode="numeric"` instead of `type="number"`.
    - Search forms should assign `role="search"` to the form element.
    - Banner should be rendered as a `section` element instead of a `div`, and include a descriptive `aria-label`.
    - Footer and hero content should include a descriptive `aria-label`.
    - Graphic list should use `h2` as a heading element instead of `h3`.
- "Official government website" banner text has been updated. Refer to [USWDS guidance](https://designsystem.digital.gov/components/banner/) for updated markup.

### New Features

- The published NPM package can now be imported into a project. Bundlers that support dead-code elimination (Webpack, etc.) can automatically remove unused code to optimize bundle size. Existing usage of JavaScript code from `dist/assets/` is unaffected by these changes.

### Bug Fixes

- Fixed support for multiple dropdown buttons on a page.
