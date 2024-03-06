/* eslint-disable import/no-unresolved */

import { describe, before, after, it } from 'node:test';
import { GlobalRegistrator } from '@happy-dom/global-registrator';

describe('imports', () => {
  before(() => {
    GlobalRegistrator.register();
  });

  after(() => {
    GlobalRegistrator.unregister();
  });

  it('imports from all entrypoints without errors', async () => {
    await Promise.all([
      // @ts-ignore
      import('@18f/identity-design-system'),
      // @ts-ignore
      import('@18f/identity-design-system/auto'),
    ]);
  });
});
