import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';

test('US phone grouping preserves middle edits, native paste and country changes', async t => {
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
    await page.goto(`${origin}/phone-input/?ui_test_bucket=${theme}`);
    const input = (await page.$('input#pi1'))!;
    await page.$$eval('.usa-phone-input', fields => fields.forEach(field => {
      const form = document.createElement('form');
      field.before(form);
      form.append(field);
    }));
    const state = () => input.evaluate(i => [i.value, i.selectionStart]);
    const filled = (await page.$('.usa-phone-input:has(#pi2)'))!;
    const trigger = (await filled.$('summary'))!;
    await trigger.click();
    await (await filled.$('label:has([value=GB]) .usa-phone-input__country-option-label'))!.click({ delay: 100 });
    await page.waitForFunction(s => !s.closest('details')!.open, {}, trigger);
    assert.deepEqual(await filled.evaluate(e => {
      const number = e.querySelector<HTMLInputElement>('input[type=tel]')!;
      return [e.querySelector('.usa-phone-input__country-code')!.textContent,
        new FormData(number.form!).get('phone-country-2'), number.value, document.activeElement?.tagName];
    }), ['+44', 'GB', '6029019304', 'SUMMARY']);
    await input.type('6029019304');
    assert.deepEqual(await state(), ['(602) 901 - 9304', 16]);
    await input.evaluate(i => i.setSelectionRange(7, 8));
    await page.keyboard.type('8');
    assert.deepEqual(await state(), ['(602) 981 - 9304', 8]);
    await input.evaluate(i => i.setSelectionRange(12, 12));
    await page.keyboard.press('Backspace');
    assert.deepEqual(await state(), ['(602) 989 - 304', 8]);
    await input.evaluate(i => i.setSelectionRange(4, 4));
    await page.keyboard.press('Delete');
    assert.deepEqual(await state(), ['(602) 893 - 04', 4]);
    await input.evaluate(i => i.select());
    await page.evaluate(() => navigator.clipboard.writeText('0123456789'));
    const keys = await page.createCDPSession();
    await keys.send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: 'v', commands: ['Paste'] });
    await keys.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'v' });
    assert.deepEqual(await state(), ['(012) 345 - 6789', 16]);
    await keys.send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: 'z', commands: ['Undo'] });
    await keys.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'z' });
    assert.equal(await input.evaluate(i => i.value), '(602) 893 - 04');
    await keys.send('Input.dispatchKeyEvent', { type: 'rawKeyDown', key: 'z', commands: ['Redo'] });
    await keys.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'z' });
    assert.equal(await input.evaluate(i => i.value), '(012) 345 - 6789');
    const summary = (await page.$('.usa-phone-input summary'))!;
    await summary.focus();
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowDown');
    assert.equal(await input.evaluate(i => i.value), '0123456789');
    assert.equal(await summary.evaluate(s => s.closest('details')!.open), true);
    await page.keyboard.press('ArrowDown');
    assert.match(await summary.evaluate(s => s.ariaLabel!), /France \(\+33\)/);
    await page.keyboard.press('Escape');
    assert.equal(await summary.evaluate(s => !s.closest('details')!.open && s === document.activeElement), true);
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    assert.equal(await input.evaluate(i => i === document.activeElement), true);
    assert.equal(await summary.evaluate(s => s.closest('details')!.open), false);
    await input.evaluate(i => i.select());
    await input.type('020 7946 0958');
    assert.equal(await input.evaluate(i => i.value), '020 7946 0958');
    await input.evaluate(i => i.form!.reset());
    await page.waitForFunction(() => document.querySelector('summary.usa-phone-input__country-toggle')!.ariaLabel?.includes('United States'));
    assert.deepEqual(await input.evaluate(i => Array.from(new FormData(i.form!).entries()).sort()), [
      ['phone-country', 'US'], ['phone-number', ''],
    ]);
    const synced = await input.evaluate(async i => {
      const form = i.form!;
      const field = i.closest<HTMLElement>('.usa-phone-input')!;
      const select = field.querySelector('select')!;
      const trigger = field.querySelector('summary')!;
      const group = document.createElement('fieldset');
      field.before(group);
      group.append(field);
      select.value = 'FR';
      select.dispatchEvent(new Event('change', { bubbles: true }));
      const country = [trigger.ariaLabel, field.querySelector<HTMLInputElement>('input:checked')!.value,
        new FormData(form).get(select.name)];
      i.disabled = true;
      const disabled = [...new FormData(form).keys()];
      i.disabled = false;
      group.disabled = true;
      await new Promise(resolve => setTimeout(resolve));
      const locked = [trigger.tabIndex, trigger.ariaDisabled];
      group.disabled = false;
      await new Promise(resolve => setTimeout(resolve));
      return [country, disabled, locked, [trigger.tabIndex, trigger.ariaDisabled]];
    });
    assert.deepEqual(synced, [['Country calling code: France (+33)', 'FR', 'FR'], [], [-1, 'true'], [0, 'false']]);
    for (const [id, expected] of [['pi3', 2], ['pi4', 0]] as const) {
      const protectedField = await page.$eval(`#${id}`, el => {
        const i = el as HTMLInputElement;
        const detail = i.closest('.usa-phone-input')!.querySelector('details')!;
        detail.querySelector('summary')!.click();
        return [detail.open, Array.from(new FormData(i.form!).entries()).length];
      });
      assert.deepEqual(protectedField, [false, expected]);
    }
    await page.close();
  }
});
