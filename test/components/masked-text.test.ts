import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';

test('masked text wraps within the viewport and copies only the displayed value', async t => {
  const server = await esbuild.context({});
  t.after(() => server.dispose());
  const { port } = await server.serve({ servedir: 'dist' });
  const origin = `http://localhost:${port}`;
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  t.after(() => browser.close());
  const session = await browser.target().createCDPSession();
  await session.send('Browser.grantPermissions', {
    origin, permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
  });
  for (const theme of ['legacy', 'nds']) {
    const page = await browser.newPage();
    await page.setViewport({ width: 320, height: 800 });
    await page.goto(`${origin}/masked-text/?ui_test_bucket=${theme}`, { waitUntil: 'networkidle0' });
    const client = await page.createCDPSession();
    for (const [id, masked, full] of [
      ['review-ssn', '•••-••-6789', '000-00-6789'],
      ['review-email', 'j••••@example.com', 'jamie.alexander+account-notifications@example.com'],
    ]) {
      const label = (await page.$(`#${id} ~ label`))!;
      await label.evaluate(e => e.scrollIntoView({ block: 'center', behavior: 'instant' }));
      const box = (await label.boundingBox())!;
      for (const [step, expected] of [masked, full, masked].entries()) {
        if (step) await label.click();
        if (id === 'review-ssn') assert.deepEqual(await label.boundingBox(), box);
        await page.$eval(`#${id}`, e => {
          const range = document.createRange();
          range.selectNodeContents(e);
          const selection = window.getSelection()!;
          selection.removeAllRanges();
          selection.addRange(range);
        });
        await client.send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: 'c', commands: ['Copy'] });
        await client.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'c' });
        assert.equal(await page.evaluate(() => navigator.clipboard.readText()), expected);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      }
    }
    await page.close();
  }
});
