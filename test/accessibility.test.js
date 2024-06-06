import { describe, before, after, test, it } from 'node:test';
import assert from 'node:assert';
import { relative, dirname } from 'node:path';
import * as esbuild from 'esbuild';
import glob from 'fast-glob';
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';

const paths = glob.sync('dist/*/index.html').map((path) => `/${dirname(relative('dist', path))}/`);

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
    browser = await puppeteer.launch({ args: ['--no-sandbox'] });
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
      const results = await new AxePuppeteer(page).withTags(['wcag2a', 'wcag2aa']).analyze();
      await page.close();

      assert.deepStrictEqual(results.violations, []);
    });
  });
});
