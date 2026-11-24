import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as esbuild from 'esbuild';
import puppeteer from 'puppeteer';

test('Search preserves host disabled state across edits, teardown and document initialization', async t => {
  const { outputFiles } = await esbuild.build({
    entryPoints: ['src/js/components/index.js'], bundle: true, globalName: 'components', write: false,
  });
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  t.after(() => browser.close());
  const page = await browser.newPage();
  await page.setContent('<form class="nds-search"><input type="search"><button type="submit">Search</button></form>');
  await page.addScriptTag({ content: outputFiles[0].text });
  const results = await page.evaluate(async () => {
    const { search } = (window as unknown as { components: { search: {
      on(root: Document): void; off(root: Document): void;
    } } }).components;
    const input = document.querySelector('input')!;
    const button = document.querySelector('button')!;
    const form = input.form!;
    const results: boolean[] = [];
    search.on(document);
    results.push(button.disabled);
    button.disabled = true;
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    results.push(button.disabled);
    button.disabled = false;
    await Promise.resolve();
    results.push(!button.disabled);
    input.disabled = true;
    form.addEventListener('submit', event => {
      results.push(event.defaultPrevented);
      event.preventDefault();
    }, { once: true });
    form.requestSubmit();
    results.push(button.disabled);
    input.disabled = false;
    await Promise.resolve();
    results.push(!button.disabled);
    button.disabled = true;
    search.off(document);
    results.push(button.disabled);
    search.on(document);
    results.push(button.disabled);
    return results;
  });
  assert.deepEqual(results, Array(8).fill(true));
});
