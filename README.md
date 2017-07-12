# identity-style-guide
This repository houses identity-style, a shared style library for the cloud.gov product ecosystem. identity-style was built on top of the [US Web Design Standards](https://github.com/18F/web-design-standards).

The purpose of identity-style-guide is to provide the assets such as CSS, SCSS, JS, images and fonts to design a site with the visual style of cloud.gov. This allows multiple sites built in separate repositories and with different languages to share a global style without repeating styling code. The identity-style-guide library is primarily distributed on the node/npm ecosystem.

## Install and use
### node/npm
The best way to install identity-style-guide is with the node package manager or [npm](https://www.npmjs.com/). If you haven't already cloned the `identity-style-guide` [repository for development use](run the following command on a computer with node/npm installed to install identity-style into your project

```
npm install identity-style-guide --save
```

Once installed, all the assets from identity-style have to be consumed by your project. This can be done in multiple ways depending on what assets and your project setup. For example, a simple site could copy over the relevant assets with build commands and include them from the html with link tags.

```
# build commands
cp ./node_modules/identity-style/js/* ./public/js
cp ./node_modules/identity-style/css/* ./public/css
cp -R ./node_modules/identity-style/img/**/* ./public/img
cp -R ./node_modules/identity-style/fonts/**/* ./public/fonts
```

## Development and contributing setup

See the [CONTRIBUTING documentation](CONTRIBUTING.md).
