import { describe, it } from 'node:test';
import assert from 'node:assert';
import { readFile } from 'node:fs/promises';

describe('components', () => {
  it('re-exports all uswds components', async () => {
    const localComponentsFileContent = await readFile('./build/esm/components/index.js', 'utf-8');
    const localComponentKeys = Array.from(localComponentsFileContent.matchAll(/import ([a-z]+)/gi))
      .map((match) => match[1])
      .sort();
    const uswdsComponentsIndex = await readFile(
      'node_modules/@uswds/uswds/packages/uswds-core/src/js/index.js',
      'utf-8',
    );
    const [, exports] = uswdsComponentsIndex.match(/module\.exports = \{([\s\S]+)\};/)!;
    const uswdsComponentKeys = Array.from(exports.matchAll(/(?:\s+([a-zA-Z]+)),/g))
      .map(([, capturedKey]) => capturedKey)
      .sort();

    assert(uswdsComponentKeys.length);
    assert.deepStrictEqual(localComponentKeys, uswdsComponentKeys);
  });
});
