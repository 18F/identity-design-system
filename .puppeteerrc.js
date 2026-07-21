import { join } from 'path';

/**
 * @type {import("puppeteer").Configuration}
 */
export default {
  // changes cache location Puppeteer
  cacheDirectory: join(import.meta.dirname, '.cache', 'puppeteer'),
};
