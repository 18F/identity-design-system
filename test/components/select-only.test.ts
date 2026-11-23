import assert from 'node:assert/strict';
import { test } from 'node:test';
import puppeteer from 'puppeteer';

test('Select preserves the identity of same-valued options', async t => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  t.after(() => browser.close());
  for (const theme of ['nds', 'legacy']) {
    const page = await browser.newPage();
    await page.setContent(`<form><label for="office">Office</label><div class="usa-combo-box" data-select-only>
      <select id="office" name="office" required><option value="">Choose</option>
      <option value="shared" disabled>Closed office</option><option value="shared">East office</option>
      <option value="shared" selected>West office</option></select></div><button type="reset">Reset</button></form>`);
    await page.addStyleTag({ path: `dist/assets/css/${theme === 'nds' ? 'nds/' : ''}styles.css` });
    await page.addScriptTag({ path: 'dist/assets/js/main.js' });
    const state = () => page.$eval('select', select => [
      select.selectedOptions[0].text, select.form!.querySelector('input')!.value,
      new FormData(select.form!).get('office'),
    ]);
    assert.deepEqual(await state(), ['West office', 'West office', 'shared']);
    await page.focus('#office');
    await page.keyboard.press('Enter');
    assert.deepEqual(await page.$$eval('[role=option]', rows => rows.map(row =>
      [row.textContent, row.getAttribute('aria-selected')])), [['East office', 'false'], ['West office', 'true']]);
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    assert.deepEqual(await state(), ['East office', 'East office', 'shared']);
    await page.click('#office');
    await page.click('[role=option]:last-child');
    assert.deepEqual(await state(), ['West office', 'West office', 'shared']);
    await page.click('#office');
    await page.click('[role=option]:first-child');
    await page.click('button[type=reset]');
    await page.waitForFunction(() => document.querySelector<HTMLInputElement>('#office')?.value === 'West office');
    assert.deepEqual(await state(), ['West office', 'West office', 'shared']);
    await page.close();
  }
});

test('selection-only form preserves required, disabled and reset semantics', async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    const field = (id: string, attrs: string, prefilled = false) => `
      <label for="${id}">${id}</label><div class="usa-combo-box" data-select-only>
      <select id="${id}" name="${id}" ${attrs}><option value="">Choose</option>
      <option value="b" ${prefilled ? 'selected' : ''}>Option B</option></select></div>`;
    await page.setContent(`<form>${field('choice', 'required')}${field('blocked', 'disabled', true)}
      ${field('prefilled', '', true)}<button type="reset">Reset</button></form>`);
    await page.addScriptTag({ path: 'dist/assets/js/main.js' });
    const data = () => page.evaluate(() => Object.fromEntries(new FormData(document.forms[0])));
    const valid = () => page.evaluate(() => document.forms[0].reportValidity());
    assert.equal(await valid(), false);
    assert.deepEqual(await data(), { choice: '', prefilled: 'b' });
    await page.focus('#choice');
    await page.keyboard.press('Space');
    await page.keyboard.press('Enter');
    assert.equal(await valid(), true);
    assert.equal((await data()).choice, 'b');
    await page.click('button[type=reset]');
    await page.waitForFunction(() => !document.querySelector('#choice')!.parentElement!
      .classList.contains('usa-combo-box--pristine'));
    assert.deepEqual(await data(), { choice: '', prefilled: 'b' });
    assert.equal(await page.$eval('#prefilled', e => (e as HTMLInputElement).value), 'Option B');
    assert.equal(await valid(), false);
  } finally {
    await browser.close();
  }
});

test('disabled choices are skipped and the first missing Select gets focus', async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    const field = (id: string) => `<label for="${id}">${id}</label><div class="usa-combo-box" data-select-only>
      <select id="${id}" name="${id}" required><option value="">Choose</option>
      <option disabled value="x">Unavailable</option><option value="a">A</option>
      <optgroup disabled label="Unavailable group"><option value="y">Y</option></optgroup>
      <option value="b">B</option></select></div>`;
    await page.setContent(`<form>${field('first')}${field('second')}<button>Continue</button></form>`);
    await page.addScriptTag({ path: 'dist/assets/js/main.js' });
    await page.click('button:not([type])');
    assert.equal(await page.evaluate(() => document.activeElement?.id), 'first');
    assert.equal(await page.$$eval('[role=combobox][aria-invalid=true]', els => els.length), 2);
    await page.keyboard.press('Space');
    assert.deepEqual(await page.$$eval('[role=option]', els => els.map(el => el.textContent)), ['A', 'B']);
    assert.equal(await page.evaluate(() => document.activeElement?.textContent), 'A');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => new FormData(document.forms[0]).get('first')), 'b');
    await page.click('button:not([type])');
    assert.equal(await page.evaluate(() => document.activeElement?.id), 'second');
    await page.click('#second');
    // Even a click dispatched before the popup refresh cannot commit a newly disabled choice.
    await page.$eval('.usa-combo-box:has(#second) [data-value=a]', el => {
      const group = el.closest('.usa-combo-box')!;
      group.querySelector<HTMLOptionElement>('option[value=a]')!.disabled = true;
      (el as HTMLElement).click();
    });
    assert.equal(await page.evaluate(() => new FormData(document.forms[0]).get('second')), '');
    await page.$eval('.usa-combo-box:has(#second) option[value=b]', el => {
      (el as HTMLOptionElement).disabled = true;
    });
    await page.waitForSelector('.usa-combo-box:has(#second) [role=option][aria-disabled=true]');
    await page.click('.usa-combo-box:has(#second) [aria-disabled=true]');
    assert.equal(await page.evaluate(() => new FormData(document.forms[0]).get('second')), '');
  } finally {
    await browser.close();
  }
});
