/* eslint-disable import/no-unresolved */

import { describe, beforeEach, afterEach, it } from 'node:test';
import { GlobalRegistrator } from '@happy-dom/global-registrator';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

describe('imports', () => {
  beforeEach(() => {
    GlobalRegistrator.register();
  });

  afterEach(() => {
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

  it('can start and stop auto-initialized behaviors through the CommonJS entry', () => {
    const require = createRequire(import.meta.url);
    const { nativeModal, toast } = require('@18f/identity-design-system');
    assert.equal(typeof toast.on, 'function');
    document.body.innerHTML = '<button data-open-modal="dialog">Open</button><dialog class="modal" id="dialog"></dialog>';
    require('@18f/identity-design-system/auto');
    if (document.readyState === 'loading') document.dispatchEvent(new Event('DOMContentLoaded'));
    document.querySelector('button')!.click();
    const dialog = document.querySelector('dialog')!;
    assert.ok(dialog.open);
    dialog.close();
    nativeModal.off();
    document.querySelector('button')!.click();
    assert.equal(dialog.open, false);
  });
});
