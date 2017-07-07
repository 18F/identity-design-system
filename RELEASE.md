# Releasing cloudgov-style
Follow the steps outlined in this document to release a new version of `cloudgov-style`.

## Principles
- Releases should follow [our guide for versions](#versioning).
- The Github tags for the release should just be the number, no `v` before.
- The project will be pushed to [npm](https://www.npmjs.com/package/cloudgov-style).

<a name="versioning"></a>
### Versioning
The project should follow [semantic versioning](http://semver.org/). The scope of influence for this library should be the styleguide on this repo, [18F/cg-landing](https://github.com/18F/cg-landing), [18F/cg-docs](https://github.com/18F/cg-docs) and [cg-dashboard](https://github.com/18F/cg-dashboard).  The definitions of what constitutes each type of version upgrade is as follows:
- Patch changes are localized bug fixes, visual or UI changes that will not have any effect on larger parts of the design that could break things. An example would be https://github.com/18F/cg-style/pull/142 as the change is localized to one component and is unlikely to break other parts of any of the sites.
- Minor changes are larger visual or UI changes, such as adding, changing a component, changing base style rules such as color palette or variables, CSS rules in `/base` that are **not likely** to break any UI. An example would be https://github.com/18F/cg-style/pull/138 because the primary color was changed but it didn't break any existing part of the cloud.gov style. Another example would be https://github.com/18F/cg-style/pull/119 because it adds a new component.
- Major changes are small or large changes that will change and break existing UI to the point where said UI will have to be re-coded or re-designed. An example is https://github.com/18F/cg-style/pull/121 as changing the font folder path would break any codebase that is using the standards and would require code to fix the change.

#### Deciding a version guide
If you planning a cg-style upgrade and are unsure how you'd like to version it, follow this simple guide:

1. Locally test your changes on the styleguide, [18F/cg-landing](https://github.com/18F/cg-landing), [18F/cg-docs](https://github.com/18F/cg-docs) and [cg-dashboard](https://github.com/18F/cg-dashboard) (instructions to do so should be in each repo).
1. If there is nothing that breaks, decide whether the change is a patch(a few line change) or minor(add a new component, change a signifigant section of code).
1. If something minor breaks that's easy to fix, consider fixing it in your cg-style code and do a minor version upgrade.
1. If something completely breaks functionality or cannot be fixed within cg-style but must be fixed in the other codebase, do a major version upgrade.

## Steps
0. Decide on a "main idea" for the release, what the release is being done for. Look at previous releases for examples.
0. Decide on whether the release should be a patch, minor or major version update, based on [semver](http://semver.org/#summary).
0. Run `npm run release`. Provide the version number you decided on from above and the "main idea" when prompted. Try and keep it short and sweet, say under 50 characters. If you are curious, here is more [documentation](#how-the-release-script-works) about what the `release` script is doing.
0. There will now be tags in the [18f/cg-style](https://github.com/18F/cg-style/tags) repo. Edit the tag you just created and provide a bit more context for the release. Make sure to clearly articulate what has changed and why. Create a link titled `Changelog` that uses the Github compare url to compare the current release tag with the last, such as `/compare/0.3.4...0.4.0`.
0. Open pull requests in both repos from the release branch back into `master`. Remember, the version number should be the only thing that changed.
0. When the PR is merged, the CI service notices that there is a tag on the commit and publishes the node module.

### How the release script works
Automation is important, and following checklists is hard so this script should do most of the work for you. `npm run release` simply calls `/scripts/release.js`.

The script does the following things in order:

0. Prompt you for the new release version number and main idea.
0. Update the `package.json` with the version number from above.
0. Checkout the `master` branch and cut a release branch from there. The release branch name will be the version number preceded by "release-".
0. Commit the `package.json` version bump.
0. Tag that commit with a tag that is just the release version.
0. Push that branch and tag to Github.
