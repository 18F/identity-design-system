const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Skip the automatic Chromium download on `npm install`. Puppeteer is only
  // used by NDS's own visual-regression / accessibility tests; consumers (and
  // git-dep installs from identity-idp) never need the browser. Developers who
  // run the tests locally install it explicitly via `npm run install-browser`,
  // which honors PUPPETEER_SKIP_DOWNLOAD=false below.
  skipDownload: process.env.PUPPETEER_SKIP_DOWNLOAD !== 'false',

  // changes cache location Puppeteer
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
