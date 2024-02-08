import { describe, it } from 'node:test';
import assert from 'node:assert';
import { readFile } from 'node:fs/promises';
import { basename, dirname } from 'node:path';
import glob from 'fast-glob';

/**
 * Converts a string to camel case.
 *
 * @param {string} str
 *
 * @return {string}
 */
const camelCase = (str) => str.replace(/-([a-z])/g, (_match, character) => character.toUpperCase());

describe('components', () => {
  it('re-exports all uswds components', async () => {
    const localComponentsFileContent = await readFile('./build/esm/components/index.js', 'utf-8');
    const localComponentKeys = Array.from(localComponentsFileContent.matchAll(/import ([a-z]+)/gi))
      .map((match) => match[1])
      .sort();
    const uswdsComponentKeys = glob
      .sync('./node_modules/@uswds/uswds/packages/*/src/index.js')
      .map((path) => camelCase(basename(dirname(dirname(path))).replace(/^_?usa-/, '')))
      .sort();

    assert(uswdsComponentKeys.length);
    assert.deepStrictEqual(localComponentKeys, uswdsComponentKeys);
  });
});
