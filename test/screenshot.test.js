/* eslint-disable no-restricted-syntax, no-await-in-loop, no-param-reassign */

import { describe, it, test } from 'node:test';
import { promisify } from 'node:util';
import { exec as _exec } from 'node:child_process';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import assert from 'node:assert';
import { join } from 'node:path';
import { PNG } from 'pngjs';
import match from 'pixelmatch';

const exec = promisify(_exec);

const branch = (await exec('git branch --show-current')).stdout.trim();

const DIFF_DIRECTORY = 'tmp/screenshot/diff';
const SNAPSHOT_DIRECTORY = 'tmp/screenshot/branches';
const MAIN_SNAPSHOTS_DIRECTORY = join(SNAPSHOT_DIRECTORY, 'main');
const BRANCH_SNAPSHOTS_DIRECTORY = join(SNAPSHOT_DIRECTORY, branch);

function fillImageToSize(image, width, height) {
  if (image.width === width && image.height === height) {
    return image;
  }

  const resizedImage = new PNG({ width, height, fill: true });
  PNG.bitblt(image, resizedImage, 0, 0, image.width, image.height, 0, 0);

  for (let y = image.height; y < height; y += 1) {
    for (let x = image.width; x < width; x += 1) {
      // eslint-disable-next-line no-bitwise
      const index = (resizedImage.width * y + x) << 2;
      resizedImage.data[index] = 255; // Red
      resizedImage.data[index + 1] = 255; // Green
      resizedImage.data[index + 2] = 255; // Blue
      resizedImage.data[index + 3] = 255; // Alpha (Opacity)
    }
  }

  return resizedImage;
}

const skip = !!process.env.SKIP_VISUAL_REGRESSION_TEST;

describe('screenshot visual regression', { skip, concurrency: true }, async () => {
  let paths = [];
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
      const resizedBranchPNG = fillImageToSize(branchPNG, width, height);
      const resizedMainPNG = fillImageToSize(mainPNG, width, height);
      const diff = new PNG({ width, height });
      const diffs = match(resizedBranchPNG.data, resizedMainPNG.data, diff.data, width, height, {
        threshold: 0.2,
      });
      if (diffs > 0) {
        const diffOutputBase = join(DIFF_DIRECTORY, path);
        await mkdir(DIFF_DIRECTORY, { recursive: true });
        await Promise.all([
          writeFile(`${diffOutputBase}-local.png`, PNG.sync.write(resizedBranchPNG)),
          writeFile(`${diffOutputBase}-remote.png`, PNG.sync.write(resizedMainPNG)),
          writeFile(`${diffOutputBase}-diff.png`, PNG.sync.write(diff)),
        ]);
      }
      assert.strictEqual(diffs, 0, `Expected "${path}" to visually match the main branch.`);
    });
  });
});
