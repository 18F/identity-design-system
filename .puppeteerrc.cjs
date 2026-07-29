const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // changes cache location Puppeteer
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
