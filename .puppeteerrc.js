import { join } from 'path';

/**
 * @type {import("puppeteer").Configuration}
 */
export default {
  // changes cache location Puppeteer
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
