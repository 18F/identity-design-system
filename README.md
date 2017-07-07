# cg-style
This repository houses cg-style or cloudgov-style, a shared style library for the cloud.gov product ecosystem. Cloudgov-style was built on top of the [US Web Design Standards](https://github.com/18F/web-design-standards).

The purpose of cg-style is to provide the assets such as CSS, SCSS, JS, images and fonts to design a site with the visual style of cloud.gov. This allows multiple sites built in separate repositories and with different languages to share a global style without repeating styling code. The cg-style library is primarily distributed on the node/npm ecosystem.

## Install and use
### node/npm
The best way to install cg-style is with the node package manager or [npm](https://www.npmjs.com/). If you haven't already cloned the `cg-style` [repository for development use](#development, run the following command on a computer with node/npm installed to install cg-style into your project

```
npm install cloudgov-style --save
```

Once installed, all the assets from cg-style have to be consumed by your project. This can be done in multiple ways depending on what assets and your project setup. For example, a simple site could copy over the relevant assets with build commands and include them from the html with link tags.

```
# build commands
cp ./node_modules/cloudgov-style/js/* ./public/js
cp ./node_modules/cloudgov-style/css/* ./public/css
cp -R ./node_modules/cloudgov-style/img/**/* ./public/img
cp -R ./node_modules/cloudgov-style/fonts/**/* ./public/fonts
```

```html
<!- html file ->
<head>
...
<link href="/public/css/cloudgov-style.css" rel="stylesheet" />
</head>

<body>
  <svg class="logo">
    <use xlink:href="/public/img/cloudgov-sprite.svg#logo"/>
  </svg>

  <script src="/public/js/cloudgov-style.js"></script>
</body>
```

Another possibility for importing the JS and SCSS is to use browserify and SASS to import them into the project.

```js
require('cloudgov-style');
```

```css
@import './node_modules/cloudgov-style/src/css/main.scss';
```

## Using svg images
Images that are part of the cg-style project are available as one central svg sprite with each image consisting of a svg `<symbol>`. To use these images, you can use the svg `xlink` attribute as follows:
```
  <svg class="icon">
    <use xlink:href="/public/img/cloudgov-sprite.svg#i-agreement"/>
  </svg>
```
## Development and contributing setup

See the [CONTRIBUTING documentation](CONTRIBUTING.md).
