/* eslint-disable no-await-in-loop */

import { describe, before, after, test } from 'node:test';
import assert from 'node:assert';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import serveStatic from 'serve-static';
import puppeteer from 'puppeteer';

const require = createRequire(import.meta.url);

const MESSAGE_TYPE_ERROR = 1;

describe('accessibility', () => {
  /** @type {import('node:http').Server} */
  let server;

  /** @type {import('puppeteer').Browser} */
  let browser;

  /** @type {import('puppeteer').Page} */
  let page;

  before(async () => {
    const serve = serveStatic('dist');
    server = createServer((req, res) => serve(req, res, () => res.end()));
    server.listen();
    browser = await puppeteer.launch({ headless: 'new' });
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
    server.close();
  });

  test('passes automated accessibility test', async (t) => {
    await page.goto(`http://localhost:${server.address().port}`);
    const urls = await page.$$eval('.usa-nav__link', (links) => links.map((link) => link.href));

    assert(urls.length);

    await Promise.all(
      urls.map((url) =>
        t.test(url, async () => {
          await page.goto(url);
          await page.addScriptTag({
            path: require.resolve('html_codesniffer/build/HTMLCS.js'),
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
        }),
      ),
    );
  });
});
