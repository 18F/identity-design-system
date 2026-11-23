import assert from 'node:assert/strict';
import { test } from 'node:test';
import puppeteer from 'puppeteer';

test('masked corrections preserve untouched digits and disabling omits the SSN', async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    await page.setContent(`<form><div class="usa-input--ssn">
      <input name="ssn" class="usa-input__control--ssn">
      <input type="hidden" data-nds-ssn-value>
      <button type="button" data-nds-ssn-toggle>Reveal</button>
    </div></form>`);
    await page.addScriptTag({ path: 'dist/assets/js/main.js' });
    const input = '.usa-input__control--ssn';
    const submitted = () => page.evaluate(() => new FormData(document.forms[0]).get('ssn'));
    await page.type(input, '000001234');
    await page.$eval(input, (el) => (el as HTMLInputElement).setSelectionRange(7, 8));
    await page.keyboard.type('9');
    assert.equal(await submitted(), '000-00-9234');
    assert.equal(await page.$eval(input, (el) => (el as HTMLInputElement).selectionStart), 8);
    await page.keyboard.press('Delete');
    assert.equal(await submitted(), '00000934');
    await page.keyboard.type('2');
    assert.equal(await submitted(), '000-00-9234');

    await page.click('button');
    assert.equal(
      await page.$eval(input, (el) => {
        (el as HTMLInputElement).disabled = true;
        return new FormData(document.forms[0]).get('ssn');
      }),
      null,
    );
    assert.equal(await page.$eval('button', (el) => el.disabled), true);
    assert.equal(await page.$eval(input, (el) => (el as HTMLInputElement).value), '•••-••-••••');
    assert.equal(
      await page.$eval(input, (el) => {
        (el as HTMLInputElement).disabled = false;
        return new FormData(document.forms[0]).get('ssn');
      }),
      '000-00-9234',
    );
    assert.equal(await page.$eval('button', (el) => el.disabled), false);
    assert.equal(
      await page.evaluate(() => {
        const form = document.forms[0];
        form.reset();
        return new FormData(form).get('ssn');
      }),
      '',
    );
    await page.type(input, '7');
    assert.equal(await submitted(), '7');
    await page.click('button');
    await page.evaluate(() => document.forms[0].reset());
    assert.deepEqual(
      await page.$eval(input, (el) => [
        (el as HTMLInputElement).value,
        (el as HTMLInputElement).validity.valid,
        document.querySelector('button')?.getAttribute('aria-pressed'),
      ]),
      ['', true, 'false'],
    );
  } finally {
    await browser.close();
  }
});
