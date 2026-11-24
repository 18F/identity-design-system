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
const catalog: { icons: { variants: { asset: string }[] }[] } = JSON.parse(
  await readFile('src/img/nds-icons/library/catalog.json', 'utf8'),
);
const drawings = new Set(catalog.icons.flatMap(icon => icon.variants.map(v => v.asset)));
const sprite = await readFile('dist/assets/img/nds-icons/symbols.svg', 'utf8');
const symbols = new Set(Array.from(sprite.matchAll(/<symbol id="([^"]+)"/g), m => m[1]));
// Brand marks and the sample QR illustration are not interface icons.
const nonIcons = new Set([
  '/assets/img/america-gov-mark.svg', '/assets/img/us_flag.svg', '/assets/img/gsa-logo.svg',
  '/assets/img/login-gov-logo.svg', '/assets/img/nist-badge/nist-seal.svg', '/img/sample-setup-matrix.svg#sample',
]);

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
          const sources = await page.$$eval('img, use', nodes => nodes.flatMap(n => {
            const src = n.getAttribute('src') || n.getAttribute('href') || n.getAttribute('xlink:href') || '';
            return n.localName === 'use' || /\.svg(?:[?#]|$)/i.test(src) || n.matches('.usa-icon, [class*="__icon"]') ? [src] : [];
          }));
          for (const src of sources) {
            if (nonIcons.has(src)) continue;
            const library = /^\/assets\/img\/nds-icons\/library\/([\w-]+)\.svg$/.exec(src);
            const symbol = /^\/assets\/img\/nds-icons\/symbols\.svg#([\w-]+)$/.exec(src);
            assert((library && drawings.has(library[1])) || (symbol && symbols.has(symbol[1])),
              `Expected a catalog icon on ${path}: ${src}`);
          }
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
