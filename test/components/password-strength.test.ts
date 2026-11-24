import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';

test('password meter describes score changes without repeating feedback for each edit', async t => {
  const server = await esbuild.context({});
  t.after(() => server.dispose());
  const { port } = await server.serve({ servedir: 'dist' });
  const browser = await puppeteer.launch();
  t.after(() => browser.close());
  for (const theme of ['legacy', 'nds']) {
    const page = await browser.newPage();
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await page.goto(`http://localhost:${port}/password-strength/?ui_test_bucket=${theme}`);
    const field = (await page.$('#strength-password'))!;
    await field.type('example');
    const status = (await page.$('#strength-status'))!;
    const weak = await status.evaluateHandle(e => e.firstChild!);
    assert.equal(await status.evaluate(e => e.textContent), 'Password strength: Weak.');
    await page.keyboard.press('Backspace');
    assert.ok(await status.evaluate((e, n) => e.firstChild === n, weak));
    await field.type('12');
    assert.equal(await status.evaluate(e => e.textContent), 'Password strength: Medium.');
    const meter = (await page.$('[data-password-strength-demo] .password-strength'))!;
    assert.ok(await meter.$eval('.password-strength__bar', e => e.getBoundingClientRect().width > 0));
    await field.evaluate(e => (e as HTMLInputElement).select());
    await page.keyboard.press('Backspace');
    assert.equal(await status.evaluate(e => e.textContent), '');
    assert.equal(await meter.evaluate(e => getComputedStyle(e).visibility), 'hidden');
    assert.ok(await field.evaluate(e => document.activeElement === e));
    await field.evaluate(e => {
      const demo = e.closest('[data-password-strength-demo]')!;
      const form = document.createElement('form');
      demo.before(form);
      form.append(demo);
    });
    await field.type('sixteen-characters');
    const toggle = (await page.$('[aria-controls="strength-password"]'))!;
    const bounds = (await toggle.boundingBox())!;
    assert.ok(bounds.width >= 24 && bounds.height >= 24);
    await toggle.click();
    assert.equal(await field.evaluate(e => (e as HTMLInputElement).type), 'text');
    await field.evaluate(e => (e as HTMLInputElement).form!.reset());
    await page.waitForFunction(() => !document.querySelector('#strength-status')!.textContent);
    assert.equal(await meter.evaluate(e => getComputedStyle(e).visibility), 'hidden');
    await page.setRequestInterception(true);
    page.on('request', r => r.url().includes('/assets/js/main.js') ? r.abort() : r.continue());
    await page.reload();
    assert.equal(await page.$eval('[aria-controls="strength-password"]', e => e.getClientRects().length), 0);
    await page.close();
  }
});

test('legacy Text input password eye receives pointer clicks inside the example', async t => {
  const server = await esbuild.context({});
  t.after(() => server.dispose());
  const { port } = await server.serve({ servedir: 'dist' });
  const browser = await puppeteer.launch();
  t.after(() => browser.close());
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`http://localhost:${port}/text-input/?ui_test_bucket=legacy`);
  await page.click('[aria-controls="text-input-default-1"]');
  assert.equal(await page.$eval('#text-input-default-1', e => (e as HTMLInputElement).type), 'text');
});
