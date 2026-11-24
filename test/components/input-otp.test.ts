import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';

test('pressing an OTP slot sets the editing position before mouse release', async t => {
  const server = await esbuild.context({});
  t.after(() => server.dispose());
  const { port } = await server.serve({ servedir: 'dist' });
  const browser = await puppeteer.launch();
  t.after(() => browser.close());
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}/input-otp/?ui_test_bucket=nds`);
  for (const [slot, expected] of [[5, 3], [1, 1]]) {
    const point = await page.$eval('#otp-demo', (input, index) => {
      const el = input.parentElement!.querySelectorAll('.input-otp__slot')[index];
      el.scrollIntoView({ block: 'center' });
      const r = el.getBoundingClientRect();
      return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
    }, slot);
    await page.mouse.move(point.x, point.y);
    await page.mouse.down();
    const active = () => page.$eval('#otp-demo', input =>
      Array.from(input.parentElement!.querySelectorAll('.input-otp__slot'))
        .findIndex(el => el.classList.contains('input-otp__slot--active')));
    assert.equal(await active(), expected);
    await page.mouse.up();
    assert.equal(await active(), expected);
  }
  await page.keyboard.type('9');
  assert.equal(await page.$eval('#otp-demo', input => (input as HTMLInputElement).value), '193');
  const state = () => page.$eval('#otp-demo', el => {
    const i = el as HTMLInputElement;
    return [i.value, i.selectionStart, i.selectionEnd];
  });
  assert.deepEqual(await state(), ['193', 2, 3]);
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.type('x');
  assert.deepEqual(await state(), ['193', 1, 2]);
  await page.keyboard.type('76');
  assert.deepEqual(await state(), ['176', 3, 3]);
  await page.keyboard.type('456');
  assert.deepEqual(await state(), ['176456', 5, 6]);
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.type('8');
  assert.deepEqual(await state(), ['176486', 5, 6]);
  await page.keyboard.press('Backspace');
  assert.deepEqual(await state(), ['17648', 5, 5]);
});

test('native paste and form reset keep the submitted code and slots in sync', async t => {
  const server = await esbuild.context({});
  t.after(() => server.dispose());
  const { port } = await server.serve({ servedir: 'dist' });
  const origin = `http://localhost:${port}`;
  const browser = await puppeteer.launch();
  t.after(() => browser.close());
  const session = await browser.target().createCDPSession();
  await session.send('Browser.grantPermissions', {
    origin, permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'],
  });
  for (const theme of ['nds', 'legacy']) {
    const page = await browser.newPage();
    await page.goto(`${origin}/input-otp/?ui_test_bucket=${theme}`);
    await page.$eval('#otp-demo', el => {
      const wrapper = el.closest('lg-nds-input-otp')!;
      const form = document.createElement('form');
      wrapper.before(form);
      form.append(wrapper);
      const reset = document.createElement('button');
      reset.type = 'reset';
      form.append(reset);
    });
    await page.focus('#otp-demo');
    await page.keyboard.press('End');
    const keys = await page.createCDPSession();
    const paste = async (text: string) => {
      await page.evaluate(s => navigator.clipboard.writeText(s), text);
      await keys.send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: 'v', commands: ['Paste'] });
      await keys.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'v' });
    };
    const matches = (expected: string) => page.waitForFunction(value => {
      const input = document.querySelector<HTMLInputElement>('#otp-demo')!;
      const slots = input.parentElement!.querySelectorAll('.input-otp__slot');
      return new FormData(input.form!).get(input.name) === value &&
        Array.from(slots, slot => slot.textContent).join('') === value;
    }, { timeout: 3000 }, expected);
    await paste('09');
    await matches('12309');
    await paste('098765');
    await matches('098765');
    await page.click('button[type=reset]');
    await matches('123');
    await page.close();
  }
});
