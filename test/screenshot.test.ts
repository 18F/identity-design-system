import { describe, it, test } from 'node:test';
import { promisify } from 'node:util';
import { exec as _exec } from 'node:child_process';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import assert from 'node:assert';
import { join } from 'node:path';
import { PNG } from 'pngjs';
import match from 'pixelmatch';

const exec = promisify(_exec);

const branch =
  process.env.CI_COMMIT_REF_SLUG ??
  (await exec('git branch --show-current')).stdout.replace(/\W/g, '-');

const DIFF_DIRECTORY = 'tmp/screenshot/diff';
const SNAPSHOT_DIRECTORY = 'tmp/screenshot/branches';
const MAIN_SNAPSHOTS_DIRECTORY = join(SNAPSHOT_DIRECTORY, 'main');
const BRANCH_SNAPSHOTS_DIRECTORY = join(SNAPSHOT_DIRECTORY, branch);

const skip = !!process.env.SKIP_VISUAL_REGRESSION_TEST;

describe('screenshot visual regression', { skip, concurrency: true }, async () => {
  let paths: string[] = [];
  try {
    paths = await readdir(MAIN_SNAPSHOTS_DIRECTORY);
  } catch {}

  it('has pages to test', () => {
    assert(paths.length);
  });

  paths.forEach((path) => {
    test(path, async () => {
      const branchPNG = PNG.sync.read(await readFile(join(BRANCH_SNAPSHOTS_DIRECTORY, path)));
      const mainPNG = PNG.sync.read(await readFile(join(MAIN_SNAPSHOTS_DIRECTORY, path)));
      const width = Math.max(branchPNG.width, mainPNG.width);
      const height = Math.max(branchPNG.height, mainPNG.height);
      const diff = new PNG({ width, height });
      const diffs = match(branchPNG.data, mainPNG.data, diff.data, width, height, {
        threshold: 0.2,
      });
      if (diffs > 0) {
        await mkdir(DIFF_DIRECTORY, { recursive: true });
        await writeFile(join(DIFF_DIRECTORY, path), PNG.sync.write(diff));
      }
      assert.strictEqual(diffs, 0, `Expected "${path}" to visually match the main branch.`);
    });
  });
});
