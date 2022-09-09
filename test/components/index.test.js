/**
 * @jest-environment jsdom
 */

const { basename, dirname } = require('path');
const { sync: glob } = require('fast-glob');
const localComponents = require('../..');

const camelCase = (str) => str.replace(/-([a-z])/g, (_match, character) => character.toUpperCase());

test('re-exports all uswds components', () => {
  const localComponentKeys = Object.keys(localComponents);
  const uswdsComponentKeys = glob('../../node_modules/@uswds/uswds/packages/*/src/index.js').map(
    (path) => camelCase(basename(dirname(dirname(path))).replace(/^_?usa-/, '')),
  );

  expect(localComponentKeys).toEqual(expect.arrayContaining(uswdsComponentKeys));
});
