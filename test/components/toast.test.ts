import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';

test('a modal confirmation stays above its dialog without taking focus or trapping the next toast', async t => {
  const server = await esbuild.context({});
  t.after(() => server.dispose());
  const { port } = await server.serve({ servedir: 'dist' });
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  t.after(() => browser.close());
  for (const width of [320, 1280]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 800 });
    await page.goto(`http://localhost:${port}/toast/?ui_test_bucket=nds`);
    await page.evaluate(() => {
      const dialog = document.createElement('dialog');
      dialog.className = 'modal is-open';
      const button = document.createElement('button');
      button.dataset.showToast = 'saved-toast';
      button.textContent = 'Save';
      dialog.append(button);
      document.body.append(dialog);
      dialog.showModal();
    });
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => {
      const toast = document.querySelector('dialog .toast:popover-open');
      return toast && getComputedStyle(toast).opacity === '1';
    });
    assert.deepEqual(await page.$eval('dialog .toast', el => {
      const r = el.getBoundingClientRect();
      const focused = document.activeElement?.textContent;
      const status = el.parentElement?.querySelector('[role=status]')?.textContent;
      // Temporarily enable hit testing to check actual paint order.
      (el as HTMLElement).style.pointerEvents = 'auto';
      const above = el.contains(document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2));
      (el as HTMLElement).style.removeProperty('pointer-events');
      return [innerWidth < 640 ? innerHeight - r.bottom : r.top, focused, status, above];
    }), [40, 'Save', 'Your changes have been saved.', true]);
    await page.keyboard.press('Escape');
    await page.waitForFunction(() => !document.querySelector('dialog[open], dialog .toast, .toast[popover]'));
    await page.click('[data-show-toast=saved-toast]');
    await page.waitForSelector('body > .toast[data-open=true]');
    await page.close();
  }
});
