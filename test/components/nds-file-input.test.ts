import assert from 'node:assert/strict';
import { test } from 'node:test';
import puppeteer from 'puppeteer';

test('file input keeps the submitted files, error, and status in sync', async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    await page.setContent(`<form><div data-nds-file-input>
      <div role="status"></div><div class="usa-file-input__target">
        <div class="usa-file-input__instructions">Choose from folder</div>
        <div data-file-result></div>
        <input type="file" name="files" accept=".pdf" multiple aria-label="Choose from folder">
      </div></div><button type="reset">Reset</button></form>`);
    await page.addScriptTag({ path: 'dist/assets/js/main.js' });
    const select = (names: string[]) => page.$eval('input', (input, names) => {
      const transfer = new DataTransfer();
      names.forEach((name) => transfer.items.add(new File(['fixture'], name)));
      input.files = transfer.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, names);
    const state = () => page.$eval('input', (input) => ({
      files: new FormData(input.form!).getAll('files').map((file) => (file as File).name),
      previews: [...document.querySelectorAll('.usa-file-input__preview')].map((p) => p.textContent),
      status: document.querySelector('[role=status]')!.textContent,
      valid: input.validity.valid,
      invalid: input.getAttribute('aria-invalid'),
    }));
    await select(['REPORT.PDF', 'second.pdf']);
    assert.deepEqual((await state()).files, ['REPORT.PDF', 'second.pdf']);
    await select(['REPORT.PDF', 'notes.pdf.txt']);
    assert.deepEqual(await state(), {
      files: [''], previews: [], status: 'This file type is not accepted', valid: false, invalid: 'true',
    });
    await select(['retry.pdf']);
    assert.deepEqual(await state(), {
      files: ['retry.pdf'], previews: ['retry.pdf'], status: 'Selected: retry.pdf', valid: true, invalid: null,
    });
    await page.evaluate(() => document.forms[0].addEventListener('reset', e => e.preventDefault(), { once: true }));
    await page.click('button');
    assert.deepEqual((await state()).files, ['retry.pdf']);
    await page.focus('button');
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.querySelector('[role=status]')!.textContent === 'No file selected.');
    assert.deepEqual(await state(), {
      files: [''], previews: [], status: 'No file selected.', valid: true, invalid: null,
    });
  } finally {
    await browser.close();
  }
});
