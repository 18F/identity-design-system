# Login.gov Design System

## Installation and usage

See [the documentation](https://design.login.gov/) for installation and usage instructions.

## Configuring for development

The following dependencies are required to build the documentation and assets within this repository:

- [Ruby](.ruby-version)
- [Node.js](.nvmrc)

After satisfying the above language dependencies and cloning this repository, install package dependencies with `npm`:

```
npm install
```

In development, build the documentation site with assets, watch source files for changes, and serve the compiled site at [localhost:4000](http://localhost:4000) by running:

```
npm start
```

## Linting

[Lint](https://en.wikipedia.org/wiki/Lint_(software)) JavaScript and Sass files in `src/` by running:

```
npm run lint
```

## Deploying documentation updates

Documentation deploys are performed automatically upon merging to `master` by [Federalist](https://federalist.18f.gov/). Federalist performs the following steps:

- `npm install --production` (a no-op, as this package has no production dependencies)
- `npm run federalist`
- `bundle install`
- `bundle exec jekyll build`

More information can be found in Federalist’s [How Builds Work](https://federalist-docs.18f.gov/pages/how-federalist-works/how-builds-work/).

## Publishing a release to `npm`

When you're ready to release a new version of the `identity-style-guide` package there are just a few steps to take. 

1️⃣ Make sure all the changes indended for release are merged into the `master` branch.

2️⃣ Check out the master branch on your local machine by running `git checkout master`

3️⃣ Decide on a version. The login.gov design system uses [semantic versioning](https://semver.org/). Once you decide whether you're going to release a `patch`, `minor`, or `major` version, run the appropriate `npm` command like

`npm version patch -m "Upgrade to %s for reasons"`

And a new version will be created. 

4️⃣ Once you’re satisfied with any updates, do a trial publish to `npm` by running:

```
npm publish --dry-run
```

No need to run any special build steps — the publish script will lint the source JavaScript and Sass files, and clean and re-build all assets before including them in the published package.

5️⃣ If everything looks alright, continue with publishing:

```
npm publish
```

6️⃣ Document the release on Github. After you've pushed the release changes back up to `master`, [create a new release](https://github.com/18F/identity-style-guide/releases) with a target of `master`. The release version should match the version you just sent off to `npm` (like `v2.1.5`) and the title can be the same. Use the release notes to link to any important issues or pull requests that were addressed in the release. 
