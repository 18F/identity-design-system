## Unreleased

### Breaking Changes

- NPM package is renamed from `identity-style-guide` to `@18f/identity-design-system`. ([#331](https://github.com/18F/identity-design-system/pull/331))
- Update USWDS from 2.13.3 to 3.4.1
  - Polyfills have been removed, consistent with current Login.gov browser support
  - The following JavaScript named exports have been renamed or removed:
    - `navigation` is renamed to `header`
    - `validator` is renamed to `validation`
- Sass artifacts now require Dart Sass. The Ruby Sass and LibSass (C) compilers are no longer supported.
- To improve performance of the default CSS bundle, responsive utility breakpoints other than `tablet:` have been disabled by default. Previously, `mobile-lg:` and `desktop:` utilities were also enabled. You can restore the original settings by overriding [the `$theme-utility-breakpoints` Sass variable](https://designsystem.digital.gov/documentation/settings/#utilities-settings).
   - Component styling which previously responded to now-disabled breakpoints have been updated to standardize on the `tablet` breakpoint. This affects `usa-button--wide`, `usa-search--big`, and `usa-intro` CSS classes.
- Image URLs in stylesheets are no longer processed by `asset-path-if-exists`. For Rails integrations, consider using [the `$theme-image-path` Sass variable](https://designsystem.digital.gov/documentation/settings/#general-settings) in combination with [Sprockets `resolve_assets_in_css_urls` option](https://github.com/rails/sprockets-rails#initializer-options).
- The deprecated `$image-path` Sass variable setting has been removed. Use `$theme-image-path` instead.
- The deprecated `alerts/success-badge.svg` image has been removed. Use `alerts/success.svg` instead.
- The deprecated `.usa-form-hint` CSS class has been removed. Use `.usa-hint` instead.
- Removed `usa-alert__paragraph` alert helper class. Use [`measure-3` measure utility](https://designsystem.digital.gov/utilities/paragraph-styles/#max-width) instead.
- The Spinner component has been removed (`.lg-spinner`). A new "Loading" component will be made available in a future release.
- The all-white Login.gov logo `login-gov-logo-rev.svg` has been replaced with a new color-reversed version `src/img/login-gov-logo-reverse.svg`.

### New Features

- Add Tag component styles.

## 6.7.0

### Improvements

- Add new "Big" variant of Dropdown component. ([#328](https://github.com/18F/identity-design-system/pull/328))

## 6.6.0

### Improvements

- Add new "Big" variants of Text Input and Textarea components. ([#326](https://github.com/18F/identity-design-system/pull/326))
- Update Text Input styling to adhere to design specification. ([#325](https://github.com/18F/identity-design-system/pull/325))

## 6.5.0

### Improvements

- Increase line-height for accordion heading content to improve readability. ([#316](https://github.com/18F/identity-design-system/pull/316))

## 6.4.2

### Dependencies

- Update USWDS from v2.13.2 to 2.13.3. ([#312](https://github.com/18F/identity-design-system/pull/312))

### Improvements

- Add styles and markdown content for selected and disabled radios and checkboxes. ([#313](https://github.com/18F/identity-design-system/pull/313))

## 6.4.1

### Bug Fixes

- Fix an issue where search field submit buttons would not show text at small viewport sizes. ([#311](https://github.com/18F/identity-design-system/pull/311))

## 6.4.0

### Deprecation Notice

- The `alerts/success-badge.svg` image will be removed in a future major version. Use `alerts/success.svg` instead. ([#306](https://github.com/18F/identity-design-system/pull/306))

### Improvements

- Improve appearance of illustrated tile checkboxes and radio buttons. ([#309](https://github.com/18F/identity-design-system/pull/309))

### Bug Fixes

- Use correct "Success" green color for `alerts/unphishable.svg` icon. ([#306](https://github.com/18F/identity-design-system/pull/306))

### Optimization

- Remove documentation-specific images from published package. ([#300](https://github.com/18F/identity-design-system/pull/300))
- Remove duplicate styles. ([#301](https://github.com/18F/identity-design-system/pull/301))
- Reconcile redundant focus styles with U.S. Web Design System. ([#302](https://github.com/18F/identity-design-system/pull/302))
- Remove documentation site styles from design system artifact. ([#305](https://github.com/18F/identity-design-system/pull/305))
- Reduce size of SVG images. ([#307](https://github.com/18F/identity-design-system/pull/307))

### Dependencies

- Update USWDS from v2.13.1 to 2.13.2. ([#304](https://github.com/18F/identity-design-system/pull/304))
- Update dependencies to resolve vulnerability advisories. ([#308](https://github.com/18F/identity-design-system/pull/308))

## 6.3.3

### Bug Fixes

- Changing the radio tile image size from 1rem to 1.5rem. ([#299](https://github.com/18F/identity-design-system/pull/299))

## 6.3.2

### Improvements

- Line height calculations are improved such that the [desired token size](https://github.com/uswds/uswds/blob/61a0d99f0e6b36c3758948ba6ac46140abc5e585/src/stylesheets/theme/_uswds-theme-typography.scss#L363-L371) will always apply regardless of font family or scale. ([#291](https://github.com/18F/identity-design-system/pull/291))
  - In the case of headings, line-height will fall back to the configured body line-height if the resulting actual line-height would be smaller than body content when using the heading scale.
- Body font size has been increased slightly to restore an effective font size of 1rem. ([#292](https://github.com/18F/identity-design-system/pull/292))
- The Process List component no longer applies vertical padding which would affect its layout relative to surrounding content. ([#290](https://github.com/18F/identity-design-system/pull/290))
- Input hint text is no longer italicized. ([#293](https://github.com/18F/identity-design-system/pull/293))
- New variation of checkbox and radio button tiles with illustrations is added to form fields. ([#296](https://github.com/18F/identity-design-system/pull/296))

## 6.3.1

### Bug Fixes

- Improve vertical spacing in heading of Process List item spanning multiple lines. ([#288](https://github.com/18F/identity-design-system/pull/288))
- Fix external link icon margin when followed by additional text content. ([#289](https://github.com/18F/identity-design-system/pull/289))

## 6.3.0

### New Features

- Field validation success is added to form validation. ([#265](https://github.com/18F/identity-design-system/pull/265))
- Added custom styling for the Process List component. ([#279](https://github.com/18F/identity-design-system/pull/279))

### Improvements

- The default font is now Public Sans for both headings and body copy. This is not being considered a breaking change, as it is the new default guidance. To preserve existing font settings to allow more time to migrate, set `$theme-font-type-sans: 'source-sans-pro';` and `$theme-font-type-serif: 'merriweather';`. ([#264](https://github.com/18F/identity-design-system/pull/264))
- Add Login.gov-specific component configuration. ([#258](https://github.com/18F/identity-design-system/pull/258))
  - [Identifier component](https://designsystem.digital.gov/components/identifier/)
  - Link colors on dark backgrounds
- The default line-height is now set to 1.5. This is not being considered a breaking change, as it is the new default guidance. To preserve existing font settings to allow more time to migrate, set `$theme-body-line-height: 6`. ([#283](https://github.com/18F/identity-design-system/pull/283))
- Overlay is now shown with a lighter backdrop color. ([#260](https://github.com/18F/identity-design-system/pull/260))
- Form Dropdown is now more visually consistent with other form fields. ([#263](https://github.com/18F/identity-design-system/pull/263))
- Form hint text is now shown with an italicized style and increased vertical margins. ([#262](https://github.com/18F/identity-design-system/pull/262))
- Icons for form validation errors are aligned to the top. ([#265](https://github.com/18F/identity-design-system/pull/265))
- The tile variant of checkboxes and radio buttons have a slightly increased font size. ([#281](https://github.com/18F/identity-design-system/pull/281))
- Checkbox and radio labels which span multiple lines should now appear with a consistent line height relative to surrounding body copy. ([#283](https://github.com/18F/identity-design-system/pull/283))
- Search will now show full text labels at all sizes, and uses standardized font tokens. ([#259](https://github.com/18F/identity-design-system/pull/259))

### Bug Fixes

- Fix an issue where `.usa-input--error` would apply the incorrect border color unless also accompanied by `.usa-input`, `.usa-textarea`, or `.usa-select`. ([#275](https://github.com/18F/identity-design-system/pull/275))

### Dependencies

- Upgraded USWDS from v2.12.1 to v2.13.1 (see [release notes](https://github.com/uswds/uswds/releases)) ([#269](https://github.com/18F/identity-design-system/pull/269), [#277](https://github.com/18F/identity-design-system/pull/277), [#280](https://github.com/18F/identity-design-system/pull/280))

## 6.2.0

### New Features

- All theme variables are now set as [default values](https://sass-lang.com/documentation/variables#default-values), allowing you to override them for per-project requirements. ([#247](https://github.com/18F/identity-design-system/pull/247))
  - Note: Since the design system is meant to be an opinionated set of smart defaults, it's recommended to use restraint with variable customization, or at least consider when it may be more appropriate to adjust a setting from the design system itself in order to maintain consistency across projects.
- Responsive variants of width utility classes are now enabled. ([#248](https://github.com/18F/identity-design-system/pull/248))

### Improvements

- Navbar link text is no longer uppercase. ([#249](https://github.com/18F/identity-design-system/pull/249))
- Visual alignment of Badge component is improved, and its markup guidance has been simplified with improved accessibility semantics. ([#251](https://github.com/18F/identity-design-system/pull/251))
- Field validation error messages now use updated styling to always display an icon as part of the error message, and not within the field itself. The modifier classes `usa-input--inline` and `usa-error-message--with-icon` no longer have any effect and can be safely removed. ([#255](https://github.com/18F/identity-design-system/pull/255))
- Focus styles for links and unstyled buttons are now the same. ([#253](https://github.com/18F/identity-design-system/pull/253))

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
