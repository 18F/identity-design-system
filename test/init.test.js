import { readFile, writeFile } from 'node:fs/promises';
import { describe, before, after, it } from 'node:test';
import assert from 'node:assert';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';

describe('initializer script', () => {
  /** @type {import('esbuild').BuildContext} */
  let esbuildContext;

  /** @type {number} */
  let port;

  /** @type {import('puppeteer').Browser} */
  let browser;

  /** @type {string} */
  let originalPageMarkup;

  before(async () => {
    esbuildContext = await esbuild.context({});
    port = (await esbuildContext.serve({ servedir: 'dist' })).port;
    browser = await puppeteer.launch({args: ['--no-sandbox'],}); 
    originalPageMarkup = await readFile('dist/accordions/index.html', 'utf-8');
    await writeFile(
      'dist/accordions/index.html',
      originalPageMarkup.replace(
        '<body>',
        `<body>
          <script>
            document.documentElement.dataset.hadClass =
              document.documentElement.classList.contains("usa-js-loading");
          </script>`,
      ),
    );
  });

  after(async () => {
    await Promise.all([
      browser.close(),
      esbuildContext.dispose(),
      writeFile('dist/accordions/index.html', originalPageMarkup),
    ]);
  });

  it('assigns loading class until page is loaded', async () => {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}/accordions/`);

    const hadClass = await page.evaluate(
      () => document.documentElement.dataset.hadClass === 'true',
    );
    const hasClass = await page.evaluate(() =>
      document.documentElement.classList.contains('usa-js-loading'),
    );

    assert(hadClass);
    assert(!hasClass);
  });
});
