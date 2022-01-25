/* eslint-disable no-await-in-loop */

import path from 'path';
import { getURLsFromSitemap } from './support/sitemap';

const MESSAGE_TYPE_ERROR = 1;

test('accessibility', async () => {
  const urls = await getURLsFromSitemap();

  for (const url of urls) {
    await page.goto(url);
    await page.addScriptTag({
      path: path.resolve(__dirname, '../node_modules/html_codesniffer/build/HTMLCS.js'),
    });
    const messages = await page.evaluate(
      () =>
        new Promise((resolve, reject) => {
          window.HTMLCS.process('WCAG2AA', window.document, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(window.HTMLCS.getMessages());
            }
          });
        }),
    );

    for (const message of messages) {
      if (message.type === MESSAGE_TYPE_ERROR) {
        throw message;
      }
    }
  }
}, 1000000);
