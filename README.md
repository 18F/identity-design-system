# identity-style-guide

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

## Publishing to `npm`

Once you’re satisfied with any updates, do a trial publish to `npm` by running:

```
npm publish --dry-run
```

No need to run any special build steps — the publish script will lint the source JavaScript and Sass files, and clean and re-build all assets before including them in the published package.

If everything looks alright, continue with publishing:

```
npm publish
```
