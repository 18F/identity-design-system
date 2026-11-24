import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';

test('Personal key and Clipboard button copy their values and retain distinct confirmation labels', async t => {
  const server = await esbuild.context({});
  t.after(() => server.dispose());
  const { port } = await server.serve({ servedir: 'dist' });
  const origin = `http://localhost:${port}`;
  const browser = await puppeteer.launch();
  t.after(() => browser.close());
  const page = await browser.newPage();
  const cdp = await page.createCDPSession();
  await cdp.send('Browser.grantPermissions', { origin, permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'] });
  for (const [slug, scope, copied, value] of [
    ['personal-key', '[data-personal-key]', 'Copied', '0193 - 0039 - 4739 - 9920'],
    ['clipboard-button', 'lg-clipboard-button', 'Copied!', '1234-5678'],
  ]) {
    await page.goto(`${origin}/${slug}/`);
    await page.focus(`${scope} button`);
    await page.keyboard.press('Space');
    await page.waitForSelector(`${scope}[data-copied]`);
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), value);
    assert.equal(await page.$eval(`${scope} [data-copy-status]`, e => e.textContent), copied);
    await page.waitForSelector(`${scope}:not([data-copied])`);
    assert.ok(await page.$eval(`${scope} button`, e => e === document.activeElement));
  }
});
