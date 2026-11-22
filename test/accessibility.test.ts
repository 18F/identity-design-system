import { describe, before, after, test, it } from 'node:test';
import assert from 'node:assert';
import { relative, dirname } from 'node:path';
import { glob, readFile } from 'node:fs/promises';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';
import { AxePuppeteer } from '@axe-core/puppeteer';
import type { BuildContext } from 'esbuild';
import type { Browser } from 'puppeteer';

const pages = await Array.fromAsync(glob('dist/*/index.html'));
const paths = pages.map((page) => `/${dirname(relative('dist', page))}/`);
const migrated: string[] = JSON.parse(await readFile('docs/_data/nds_components.json', 'utf8'));

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
    assert(migrated.length);
    for (const slug of migrated) assert(paths.includes(`/${slug}/`), `Missing page: ${slug}`);
  });

  for (const path of [...paths, ...migrated.map((slug) => `/${slug}/?ui_test_bucket=legacy`)]) {
    test(path, async () => {
      const page = await browser.newPage();
      try {
        await page.goto(`http://localhost:${port}${path}`, { waitUntil: 'networkidle0' });
        const results = await new AxePuppeteer(page).withTags(['wcag2a', 'wcag2aa']).analyze();
        assert.deepStrictEqual(results.violations, []);
        if (migrated.includes(path.split('/')[1])) {
          const sheet = path.includes('?')
            ? '/assets/css/styles.css'
            : '/assets/css/nds/styles.css';
          assert(
            await page.evaluate(
              (url) => [...document.styleSheets].some((s) => s.href?.endsWith(url)),
              sheet,
            ),
          );
          await page.setViewport({ width: 320, height: 900 });
          assert(
            await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
            'Horizontal overflow at 320px',
          );
        }
      } finally {
        await page.close();
      }
    });
  }
});
