/*
 * A postcss task to create a sprite of all CSS background images and update
 * the references to them in the CSS.
 */

var fs = require('fs');
var postcss = require('postcss');

var css = fs.readFileSync('./css/cg_style.css', 'utf8');

var opts = {
  filterBy: function(image) {
    if (!/\.png$/.test(image.url)) {
      return Promise.reject();
    }

    return Promise.resolve();
  },
  stylesheetPath: './css',
  spritePath: './img'
};

postcss([ require('postcss-sprites').default(opts) ])
    .process(css, { 
      from: './css/cg_style.css',
      to: './css/cg_style.css',
    })
    .then(function (result) {
      fs.writeFileSync('./css/cg_style.css', result.css);
    });
