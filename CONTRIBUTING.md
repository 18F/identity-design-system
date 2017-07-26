
# Contributing

## Purpose

The repository serves a two-fold purpose: to document design decisions as a living style guide and to serve as the sole repository for login.gov assets (css, js, images, fonts, and documents).

Setup is slightly different for both of these purposes. Follow the steps below to get started.

## Setup

0. Ensure node/npm is installed. To ensure you're using the most recent version of node that this project supports, use [nvm](https://github.com/creationix/nvm).
0. Run `git clone git@github.com:18F/identity-style-guide.git` if you haven't done so already.
0. Enter the project directory with `cd identity-style-guide`.
0. If using **nvm**, run `nvm use`. Otherwise, try and install the node version that is in `.nvmrc`.
0. Run `npm install` in the `identity-style-guide` repo.
0. Run `npm run build-library-assets` in the `identity-style-guide` repo. This will build the site assets


### Additional steps for running this site with a companion site

0. In the `identity-style-guide` repo, make the module linkable by running `npm link` in the root of the repo.
0. In the companion site repo, link the *identity-style-guide* repo by running `npm link identity-style-guide` in the root of the repo.
   - Confirm that the `identity-style-guide` folder exists in `node_modules` folder.
0. In the *identity-style-guide* repo, watch the files and continually build by running `npm install && npm run watch`.


### Additional steps for running the style guide locally

The login.gov pattern library leverages [Fractal](http://fractal.build/guide), a static site framework for building and documenting component libraries. Here are some instructions for building and documenting UI patterns:

After following the previous steps in [Setup](#setup), do the following:

Now you can run your local server by running the following command:

```sh
npm run start
```

To see changes as you're developing, ensure you're watching for file changes and building them automatically by running watch in a new terminal:

```sh
npm run watch
```

Go to `localhost:3000` in your browser and you should be viewing a local instance of the login.gov pattern library. When your file is saved, Fractal will reload the site automatically and you will be able to view those changes.

When making changes to the style guide, update files in the `/src/` directory. These will be copied and built by Fractal and will be made accessible to companion sites as the `identity-style-guide` web module.

Happy developing!
