import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';

test('mobile Header traps focus at visible actions and reports the drawer state', async t => {
  const server = await esbuild.context({});
  t.after(() => server.dispose());
  const { port } = await server.serve({ servedir: 'dist' });
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  t.after(() => browser.close());

  for (const theme of ['legacy', 'nds']) {
    const page = await browser.newPage();
    await page.setViewport({ width: 320, height: 700 });
    await page.goto(`http://localhost:${port}/embeds/header/mobile/?ui_test_bucket=${theme}`);
    const expanded = () => page.$eval('.usa-menu-btn', el => el.getAttribute('aria-expanded'));
    const focused = (selector: string) => page.$eval(selector, el => el === document.activeElement);
    assert.equal(await expanded(), 'false');
    await page.focus('.usa-menu-btn');
    await page.keyboard.press('Enter');
    assert.equal(await expanded(), 'true');
    assert.ok(await focused('.usa-nav__close'));
    await page.keyboard.down('Shift');
    await page.keyboard.press('Tab');
    await page.keyboard.up('Shift');
    assert.ok(await focused('.nds-site-header__sign-in'));
    assert.ok(await page.$eval('.nds-site-header__sign-in', el =>
      el.matches('.usa-button--lg:not(.usa-button--secondary)')));
    await page.keyboard.press('Tab');
    assert.ok(await focused('.usa-nav__close'));
    await page.focus('#site-header-language');
    await page.keyboard.press('f');
    assert.equal(await page.$eval('select', el => el.value), 'fr');
    assert.ok(await focused('#site-header-language'));
    await page.keyboard.press('Escape');
    assert.equal(await expanded(), 'false');
    assert.ok(await focused('.usa-menu-btn'));
    await page.keyboard.press('Enter');
    await page.setViewport({ width: 1024, height: 700 });
    await page.waitForFunction(() => document.querySelector('.usa-menu-btn')?.getAttribute('aria-expanded') === 'false');
    assert.ok(await page.$eval('.nds-site-header__sign-in', el =>
      el.matches('.usa-button--md.usa-button--secondary')));
    await page.close();
  }
});
