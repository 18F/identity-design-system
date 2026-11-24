import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';

test('open tooltips follow their trigger and persist until both hover and focus leave', async t => {
  const server = await esbuild.context({});
  t.after(() => server.dispose());
  const { port } = await server.serve({ servedir: 'dist' });
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  t.after(() => browser.close());

  for (const theme of ['legacy', 'nds']) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`http://localhost:${port}/tooltip/?ui_test_bucket=${theme}`);
    const trigger = await page.$('button.usa-tooltip__trigger[data-position="left"]');
    assert.ok(trigger);
    const id = await trigger.evaluate(el => el.getAttribute('aria-describedby'));
    assert.ok(id);
    const visible = () => page.$eval(`#${id}`, el => el.getAttribute('aria-hidden') === 'false');
    const waitForFit = () => page.waitForFunction((id: string) => {
      const el = document.getElementById(id)!;
      const r = el.getBoundingClientRect();
      return el.getAttribute('aria-hidden') === 'false' && r.width > 0 && r.left >= 0 &&
        r.right <= innerWidth && r.top >= 0 && r.bottom <= innerHeight &&
        document.documentElement.scrollWidth <= innerWidth;
    }, {}, id);
    await trigger.evaluate(el => el.scrollIntoView({ block: 'center' }));
    await trigger.focus();
    await waitForFit();
    await page.setViewport({ width: 320, height: 800 });
    // Reflow of the surrounding docs can move the focused trigger offscreen.
    await trigger.evaluate(el => el.scrollIntoView({ block: 'center' }));
    await waitForFit();
    await trigger.evaluate(el => scrollBy(0, el.getBoundingClientRect().top - 12));
    await waitForFit();
    await trigger.hover();
    await page.mouse.move(0, 0);
    assert.ok(await visible(), 'leaving with the pointer must retain keyboard activation');
    await trigger.hover();
    await page.keyboard.press('Tab');
    assert.ok(await visible(), 'tabbing away must retain pointer activation');
    await page.keyboard.press('Escape');
    assert.ok(!await visible());
    await page.mouse.move(0, 0);
    await trigger.hover();
    await waitForFit();
    await page.mouse.move(0, 0);
    assert.ok(!await visible(), 'leaving after a fresh hover closes the tooltip');
    await page.close();
  }
});
