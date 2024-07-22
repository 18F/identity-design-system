## Welcome!

We're so glad you're thinking about contributing to an 18F open source project! If you're unsure about anything, just ask -- or submit the issue or pull request anyway. The worst that can happen is you'll be politely asked to change something. We love all friendly contributions.

We want to ensure a welcoming environment for all of our projects. Our staff follow the [18F Code of Conduct](https://github.com/18F/code-of-conduct/blob/master/code-of-conduct.md) and all contributors should do the same.

We encourage you to read this project's CONTRIBUTING policy (you are here), its [LICENSE](LICENSE.md), and its [README](README.md).

If you have any questions or want to read more, check out the [18F Open Source Policy GitHub repository](https://github.com/18f/open-source-policy), or just [shoot us an email](mailto:18f@gsa.gov).

## Installation (Local)

The following dependencies are required to build the documentation and assets within this repository:

- [Ruby](https://www.ruby-lang.org/en/) ([version as defined in `.ruby-version`](.ruby-version))
- [Node.js](https://nodejs.org/en) ([version as defined in `.nvmrc`](.nvmrc))

We recommend using [Homebrew](https://brew.sh/), [rbenv](https://github.com/rbenv/rbenv), [nvm](https://github.com/nvm-sh/nvm) or other version management tooling to install these dependencies; while we don't anticipate changing these frequently, this will ensure that you will be able to easily switch to different versions as needed.

After satisfying the above language dependencies and cloning this repository, install package dependencies:

```
npm install
bundle install
```

In development, build the documentation site with assets, watch source files for changes, and serve the compiled site at [localhost:4000](http://localhost:4000) by running:

```
npm start
```

## Testing

### Linting

[Lint](https://en.wikipedia.org/wiki/Lint_(software)) JavaScript and Sass files in `src/` by running:

```
npm run lint
```

This project uses [Prettier](https://prettier.io/) to format code. When running the lint command above, you may notice errors relating to unexpected code formatting. It's recommended that you install [an editor integration](https://prettier.io/docs/en/editors.html) to automatically format code on save, but you can also resolve these errors automatically from the command-line by running:

```
npm run lint -- --fix
```

### Visual regression testing

When a pull request is submitted, a visual regression test will be automatically run to check for any visual changes between the working copy of the branch and the live documentation site. These will be reported as the `ci/circleci: visual-regression` GitHub status check.

A failure of this status check only indicates that a visual change was detected. Depending on the types of changes being proposed, this may be expected. Anyone with access to the CircleCI dashboard can review the specific changes by following the status check "Details" link and comparing the set of screenshots under the "Artifacts" tab. If the visual changes are acceptable, the pull request can be merged, even if the status check is reported as a failure.

## Releases

When you're ready to release a new version of the `@18f/identity-design-system` package there are just a few steps to take.

Before starting, make sure that all changes intended for release should be merged into the `main` branch. You will need permissions to publish the package to npm. Check current package owners by running `npm owner ls` or by consulting the list of admins through the [Services and Accounts handbook page](https://handbook.login.gov/articles/accounts.html). If you do not have access, contact an owner to have access granted or to publish on your behalf.

1. Check out the latest main branch on your local machine by running `git checkout main`, followed by `git pull`.
2. Decide the version number for the new release.
   - The `CHANGELOG.md` should ideally include all pending changes under an "Unreleased" heading.
   - This project uses [semantic versioning](https://semver.org/): breaking changes should bump the major version, backwards-compatible changes should bump the minor version, and bug fixes should bump the patch version.
3. Since the main branch is protected, you will need to bump the version in a new branch and open a pull request. Start by creating a new branch.
   - Example: `git checkout -b release-4-3-1`
4. Change the "Unreleased" heading in `CHANGELOG.md` to the version you decided in Step 3. Commit this change to your new branch.
5. Run `npm version` to bump the package version, passing one of `patch`, `minor`, or `major` depending on what you had decided in Step 3 for the next version.
   - Example: `npm version patch`
   - A new version will be created. This will update `package.json` and `package-lock.json` automatically and create a commit.
6. Do a trial publish by running `npm publish --dry-run`.
   - No need to run any special build steps — the publish script will lint the source JavaScript and Sass files, and clean and re-build all assets before including them in the published package.
   - Consider: In the files listed, are there any that should or shouldn't be included? Does the version match what you expect?
7. If everything looks alright, continue with publishing by running `npm publish`.
8. Push your release branch to the GitHub repository and open a pull request.
9. Once approved and merged, create a new release on the [GitHub "Releases" page](https://github.com/18F/identity-design-system/releases).
   - Use `main` as the target.
   - The release version should match the version just published to `npm` (for example, `v2.1.5`).
   - Use the version name as the release title.
   - Use the release notes to link to any important issues or pull requests that were addressed in the release. You may copy this from `CHANGELOG.md`.

## Coding Standards

### Extending the U.S. Web Design System

Since the Login.gov Design System is based upon the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/), the code should reflect this:

- Where possible, use [the available Sass theme variables](https://designsystem.digital.gov/documentation/developers/#customization-theming-and-tokens) to customize the appearance of components. These are configured under `src/scss/uswds-theme`. We only include the customized variables, to improve visibility of where differences are expected. Refer to the [USWDS theme variables source](https://github.com/uswds/uswds/tree/develop/src/stylesheets/theme) for the full set of configuration values.
- To limit side-effects and to clarify where styles are extended, customized USWDS styles should follow as close to the file location and CSS selector as possible. For example, if USWDS defines a selector `.usa-header` in `packages/usa-header` which defines a style `background` that we want to override, the style should be located at an identically-named selector in `src/scss/packages/_usa-header.scss` in this project.
- Prefer color and size tokens when possible. Never use hard-coded hex colors. Instead, use the `color` SCSS function with a [color token](https://designsystem.digital.gov/design-tokens/color/theme-tokens/) as its argument.

## Public domain

This project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.
