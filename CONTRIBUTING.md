
# Contributing

<a name="development" id="development"></a>
## Setup

These instructions explain how to develop the cg-style (cloudgov-style) while using it on another (companion) site. This allows to see the result of the style changes on an actual site.

0. Ensure node/npm is installed. To ensure you're using the most recent version of node that this project supports, use [nvm](https://github.com/creationix/nvm).
0. Run `git clone git@github.com:18F/cg-style.git cloudgov-style` if you haven't done so already.
0. Enter the project directory with `cd cloudgov-style`.
0. If using **nvm**, run `nvm use`. Otherwise, try and install the node version that is in `.nvmrc`.
0. Run `npm install` in the `cloudgov-style` repo.
0. Run `npm run build` in the `cloudgov-style` repo.
0. In the cloudgov-style repo, make the module linkable by running npm link in the root of the repo.
0. In the companion site repo, link the *cloudgov-style* repo by running `npm link cloudgov-style` in the root of the repo.

   - Confirm that the cg-style folder exists in `node_modules` folder.

0. In the *cloudgov-style* repo, watch the files and continually build by running `npm install && npm run watch`.
0. If developing *cloudgov-style* with either `cg-dashboard` or `cg-site`, run `npm run watch` in that project directory.

If using cloudgov-style on a new project or a project that isn't already using cloudgov-style:

0. In the companion site repo, import cg style into the main sass file: `@import "../node_modules/cloudgov-style/css/cg_style.scss";`.
0. In the companion site repo, run sass to build the *cloudgov-style* repo into the css. This is best done through a script in package.json: `"build": "node-sass static_src/main.scss static/css/main.css"`

When writing styling code, make changes in the *cloudgov-style* repo, run `npm run watch` in the *cloudgov-style* repo, run `npm run build` in the companion site repo, and changes should be built. Alternatively, both repos have a watch task which can be run with `npm run watch` to allow changes to propagate automatically.

## Running pattern library locally

The Cloud.gov pattern library leverages Fractal, a static site framework for building and documenting component libraries. Here are some instructions for building and documenting UI patterns :

First, you'll perform a build step to create the site and test the build process:

```sh
npm run build-library
```

Now you can run your local server by running the following command:

```sh
npm run start
```

To see changes as you're developing, ensure you're watching for file changes and building them automatically by running watch in a new terminal:

```sh
npm run watch-library
```

Go to `localhost:3000` in your browser and you should be viewing a local instance of the Cloud.gov pattern library. When your file is saved, Fractal will reload the site automatically and you will be able to view those changes.

Happy developing!

## Frontend coding standards

All rules in the [18F CSS Coding
Styleguide](https://pages.18f.gov/frontend/css-coding-styleguide/) must be
observed unless they are overridden here.

### Support

- Browser support: IE 10 and above.
- Device support: mobile first to ~1600px screens.

### Dependency management and modules

- `npm` will be sole dependency management tool.

### Build

- CSS: the following features of SASS should only be used when absolutely necessary:
  - Functions
  - @extend
  - For loops
  - Operators (use calc)
- CSS: code can be compiled with a SASS or a combination of SASS and postcss.
- CSS: code will be auto-prefixed with vendor-specific properties, they should
  not be typed out in the source.
- npm scripts will be used for building.
- semver will be used; major changes mean consuming code need to make major
  changes to upgrade, minor means minor changes, patch means no changes
  necessary to upgrade.

### Naming

- CSS: no prefixing will be done for classes as the library will be small enough to
  not warrant it.
- CSS: use the "Suggested custom methodology" naming convention from the styleguide,
  `{component_name}-{block_name}-{modifier}`
- CSS: different hierarchies in a name should be separated by `-` and spaces should
  be represented by a `_`.

### Formatting

- CSS,JS,HTML: 2 spaces for tabs.
- CSS: the styleguide linter will be used and run with `npm run lint`.

### Architecture

The structure of the parts of the style will be modular. Small, resusable pieces
that have one function and are not dependant on one-another. Components should
be given easy to understand names.

- CSS: each component should be a class with it's name as the first part.
- CSS: the css components will have the following structure:
```
/base
/components
```
- CSS: will be imported in this grouped order: base, components, overrides and in alphabetically order within these groups.
- CSS: base code should only include tag rules `a { }, h1 { }`.
- CSS: component code should be classes nested no more then 0 level deep.
- CSS: scss code that doesn't ouput actual styles, such as `@mixin`s, `@functions`s, variables should be kept in a separate directory from base, or component, such as `util`.
- CSS: Code that overrides WDS Sass variables should be kept in `override_vars.scss`.
- CSS: Code that overrides WDS components should be kept in `override_components.scss`.
- HTML: components should be accessible by default.
- JS: components should work (display all data) without JS by default.
- CSS: components should not define their own layout. Use of margins should be kept to a minimum.
- CSS: spacing between components will mainly be done with adjacent sibling selector `{selector} + {selector}`.
- CSS: complicated layout should be done in layout classes.

### Libraries

- JS: jQuery will not be used.
- JS: any library added that's total file size is above 25kb should be evaluated for performance affect.
- CSS: the US Web Design Standards will be the base framework.

### Performance

### Documentation

When developing new components for the style library, ensure you add component documentation in `docs/src/components`.

- JS: all JS code will be documented using JSDoc.
- JS,CSS: component documentation should live in the `/docs` directory.
