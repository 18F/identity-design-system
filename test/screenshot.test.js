/* eslint-disable no-restricted-syntax, no-await-in-loop, no-param-reassign */

import { describe, it, test } from 'node:test';
import { promisify } from 'node:util';
import { exec as _exec } from 'node:child_process';
//import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import assert from 'node:assert';
import { join } from 'node:path';
//import { PNG } from 'pngjs';
//import match from 'pixelmatch';

const exec = promisify(_exec);

const branch = (await exec('git branch --show-current')).stdout.trim();

const { join } = require('path');
const { readdir, readFile, writeFile, mkdir } = require('fs').promises;
const { PNG } = require('pngjs');
const { match } = require('pixelmatch');

const SNAPSHOT_DIRECTORY = 'tmp/screenshot/branches';
const MAIN_SNAPSHOTS_DIRECTORY = join(SNAPSHOT_DIRECTORY, 'migation-to-gl');
const BRANCH_SNAPSHOTS_DIRECTORY = join(SNAPSHOT_DIRECTORY, branch);

const skip = !!process.env.SKIP_VISUAL_REGRESSION_TEST;

describe('screenshot visual regression', { skip, concurrency: true }, async () => {
  let paths = [];
  try {
    paths = await readdir(MAIN_SNAPSHOTS_DIRECTORY);
  } catch (error) {
    console.error(`Error reading directory ${MAIN_SNAPSHOTS_DIRECTORY}: ${error}`);
  }

  it('has pages to test', () => {
    assert(paths.length > 0, `No snapshot files found in ${MAIN_SNAPSHOTS_DIRECTORY}`);
  });

  paths.forEach((path) => {
    test(path, async () => {
      const branchSnapshotPath = join(BRANCH_SNAPSHOTS_DIRECTORY, path);
      const mainSnapshotPath = join(MAIN_SNAPSHOTS_DIRECTORY, path);

      try {
        const branchSnapshotData = await readFile(branchSnapshotPath);
        const mainSnapshotData = await readFile(mainSnapshotPath);

        const branchPNG = PNG.sync.read(branchSnapshotData);
        const mainPNG = PNG.sync.read(mainSnapshotData);
        const width = Math.max(branchPNG.width, mainPNG.width);
        const height = Math.max(branchPNG.height, mainPNG.height);
        const diff = new PNG({ width, height });
        const diffs = match(branchPNG.data, mainPNG.data, diff.data, width, height, {
          threshold: 0.2,
        });

        if (diffs > 0) {
          const DIFF_DIRECTORY = 'tmp/screenshot/diff';
          const diffOutputBase = join(DIFF_DIRECTORY, path);
          await mkdir(DIFF_DIRECTORY, { recursive: true });
          await Promise.all([
            writeFile(`${diffOutputBase}-local.png`, PNG.sync.write(branchPNG)),
            writeFile(`${diffOutputBase}-remote.png`, PNG.sync.write(mainPNG)),
            writeFile(`${diffOutputBase}-diff.png`, PNG.sync.write(diff)),
          ]);
        }
        
        assert.strictEqual(diffs, 0, `Expected "${path}" to visually match the main branch.`);
      } catch (error) {
        console.error(`Error processing snapshot ${path}: ${error}`);
      }
    });
  });
});

// describe('screenshot visual regression', { skip, concurrency: true }, async () => {
//   /** @type {string[]} */
//   let paths = [];
//   try {
//     paths = await readdir(MAIN_SNAPSHOTS_DIRECTORY);
//   } catch {}

//   it('has pages to test', () => {
//     assert(paths.length);
//   });

//   paths.forEach((path) => {
//     test(path, async () => {
//       const branchPNG = PNG.sync.read(await readFile(join(BRANCH_SNAPSHOTS_DIRECTORY, path)));
//       const mainPNG = PNG.sync.read(await readFile(join(MAIN_SNAPSHOTS_DIRECTORY, path)));
//       const width = Math.max(branchPNG.width, mainPNG.width);
//       const height = Math.max(branchPNG.height, mainPNG.height);
//       const diff = new PNG({ width, height });
//       const diffs = match(branchPNG.data, mainPNG.data, diff.data, width, height, {
//         threshold: 0.2,
//       });
//       if (diffs > 0) {
//         const diffOutputBase = join(DIFF_DIRECTORY, path);
//         await mkdir(DIFF_DIRECTORY, { recursive: true });
//         await Promise.all([
//           writeFile(`${diffOutputBase}-local.png`, PNG.sync.write(branchPNG)),
//           writeFile(`${diffOutputBase}-remote.png`, PNG.sync.write(mainPNG)),
//           writeFile(`${diffOutputBase}-diff.png`, PNG.sync.write(diff)),
//         ]);
//       }
//       assert.strictEqual(diffs, 0, `Expected "${path}" to visually match the main branch.`);
//     });
//   });
// });
