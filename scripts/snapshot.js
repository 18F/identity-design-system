#!/usr/bin/env node

import { promisify } from 'node:util';
import { exec as _exec } from 'node:child_process';
import { dirname, relative, join, extname, basename } from 'node:path';
import { glob, mkdir, writeFile } from 'node:fs/promises';
import esbuild from 'esbuild';
import puppeteer from 'puppeteer';

const exec = promisify(_exec);

const pages = await Array.fromAsync(glob('dist/*/index.html'));
const paths = pages.map((page) => dirname(relative('dist', page)));
const branch =
  process.env.CI_COMMIT_REF_SLUG ??
  (await exec('git branch --show-current')).stdout.trim().replace(/\W/g, '-');

// Kills the concurrency-dependent focus ring on the mobile header embed's
// close button, plus any in-flight animations/transitions. The close button
// only paints a focus ring in some containers/concurrencies, which makes the
// snapshot-main vs snapshot-branch comparison flaky.
const SETTLE_CSS = `
  *, *::before, *::after {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    caret-color: transparent !important;
  }
  :focus, :focus-visible, :focus-within {
    outline: none !important;
    box-shadow: none !important;
  }
`;

// CI containers can't sustain many parallel Chrome pages; screenshots start
// hanging past the CDP protocolTimeout. Cap concurrency; keep the option to
// crank it up locally where it doesn't matter.
const CONCURRENCY = Number(process.env.SNAPSHOT_CONCURRENCY ?? 2);

/**
 * Inject the settle CSS into a frame and clear any focused element. Wrapped so
 * a detached frame can't throw. evaluateOnNewDocument does NOT reliably reach
 * same-origin iframe embeds (e.g. the mobile header preview), so we walk the
 * iframes explicitly.
 *
 * @param {import('puppeteer').Frame} frame
 */
async function settleFrame(frame) {
  try {
    await frame.addStyleTag({ content: SETTLE_CSS });
    await frame.evaluate(() => {
      const active = document.activeElement;
      if (active && active !== document.body && 'blur' in active) {
        /** @type {HTMLElement} */ (active).blur();
      }
    });
  } catch {
    // Frame detached or navigated away; nothing to settle.
  }
}

/**
 * @param {import('puppeteer').Page} page
 * @param {string} url
 */
async function getScreenshot(page, url) {
  await page.goto(url);
  await settleFrame(page.mainFrame());
  const iframeHandles = await page.$$('iframe');
  await Promise.all(
    iframeHandles.map(async (handle) => {
      const frame = await handle.contentFrame();
      if (frame) await settleFrame(frame);
    }),
  );
  return page.screenshot({ fullPage: true, optimizeForSpeed: true });
}

const esbuildContext = await esbuild.context({});
const { port } = await esbuildContext.serve({ servedir: 'dist' });
const browser = await puppeteer.launch({
  args: ['--no-sandbox'],
  protocolTimeout: 300_000,
  defaultViewport: {
    width: 1024,
    height: 768,
  },
});
const localURL = `http://localhost:${port}/`;
const outputDirectory = join('tmp/screenshot/branches', branch);

await mkdir(outputDirectory, { recursive: true });

/**
 * @param {string} path
 */
async function snapshotPath(path) {
  const page = await browser.newPage();
  try {
    const screenshot = await getScreenshot(page, localURL + path);
    const filename = join(outputDirectory, `${basename(path, extname(path))}.png`);
    process.stdout.write(`Writing ${filename}...\n`);
    await writeFile(filename, screenshot);
  } finally {
    await page.close();
  }
}

const queue = [...paths];
await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
    let path;
    while ((path = queue.shift()) !== undefined) {
      await snapshotPath(path);
    }
  }),
);
await Promise.all([browser.close(), esbuildContext.dispose()]);
