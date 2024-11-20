import { describe, before, after, test, it } from 'node:test';
import assert from 'node:assert';
import { relative, dirname } from 'node:path';
import { glob } from 'node:fs/promises';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';
import type { BuildContext } from 'esbuild';
import type { Browser } from 'puppeteer';

const pages = await Array.fromAsync(glob('dist/*/index.html'));
const paths = pages.map((page) => `/${dirname(relative('dist', page))}/`);

describe('accessibility', () => {
  let esbuildContext: BuildContext;
  let port: number;
  let browser: Browser;

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
