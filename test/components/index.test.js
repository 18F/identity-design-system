/**
 * @jest-environment jsdom
 */

const uswdsComponents = require('uswds/src/js/components');
const localComponents = require('../..');

test('re-exports all uswds components', () => {
  const localComponentKeys = Object.keys(localComponents);
  const uswdsComponentKeys = Object.keys(uswdsComponents);

  expect(localComponentKeys).toEqual(expect.arrayContaining(uswdsComponentKeys));
});
