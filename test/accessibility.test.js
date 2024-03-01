/* eslint-disable no-await-in-loop */

import { describe, before, after, test, it } from 'node:test';
import assert from 'node:assert';
import { createRequire } from 'node:module';
import { relative, dirname } from 'node:path';
import * as esbuild from 'esbuild';
import glob from 'fast-glob';
import puppeteer from 'puppeteer';

const require = createRequire(import.meta.url);

const paths = glob.sync('dist/*/index.html').map((path) => `/${dirname(relative('dist', path))}/`);

const MESSAGE_TYPE_ERROR = 1;

describe('accessibility', () => {
  /** @type {import('esbuild').BuildContext} */
  let esbuildContext;

  /** @type {number} */
  let port;

  /** @type {import('puppeteer').Browser} */
  let browser;

  before(async () => {
    esbuildContext = await esbuild.context({});
    port = (await esbuildContext.serve({ servedir: 'dist' })).port;
    browser = await puppeteer.launch();
  });

  after(async () => {
    await Promise.all([browser.close(), esbuildContext.dispose()]);
  });

  it('has pages to test', () => {
    assert(paths.length);
  });

  paths.forEach((path) => {
    test(path, async () => {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${port}${path}`);
      await page.addScriptTag({ path: require.resolve('html_codesniffer/build/HTMLCS.js') });
      const messages = await page.evaluate(
        () =>
          new Promise((resolve) => {
            window.HTMLCS.process('WCAG2AA', window.document.body, () => {
              resolve(window.HTMLCS.getMessages());
            });
          }),
      );
      for (const message of messages) {
        if (message.type === MESSAGE_TYPE_ERROR) {
          throw message;
        }
      }
      await page.close();
    });
  });
});
