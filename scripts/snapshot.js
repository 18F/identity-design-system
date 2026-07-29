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

const DISABLE_ANIMATIONS_CSS = `
  *, *::before, *::after {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    caret-color: transparent !important;
  }
`;

/**
 * @param {import('puppeteer').Page} page
 */
async function settle(page) {
  await Promise.all(
    page.frames().map(async (frame) => {
      try {
        // The mobile header embed opens its nav menu on load; wait for it to
        // reach the open state so the capture is deterministic. Frames without
        // an auto-opening menu just skip this after a short timeout.
        await frame
          .waitForSelector('.usa-nav.is-visible', { timeout: 2_000 })
          .catch(() => {});
        await frame.addStyleTag({ content: DISABLE_ANIMATIONS_CSS });
        // Whether a focus ring paints depends on which frame currently has
        // browser focus, which varies with page concurrency. Blur any focused
        // element so the capture doesn't depend on that.
        await frame.evaluate(() => {
          const active = document.activeElement;
          if (active && active !== document.body && 'blur' in active) {
            /** @type {HTMLElement} */ (active).blur();
          }
        });
      } catch {
        // Frame may have been detached; ignore.
      }
    }),
  );
}

/**
 * @param {import('puppeteer').Page} page
 * @param {string} url
 */
async function getScreenshot(page, url) {
  await page.goto(url);
  await settle(page);
  return page.screenshot({ fullPage: true, optimizeForSpeed: true });
}

const esbuildContext = await esbuild.context({});
const { port } = await esbuildContext.serve({ servedir: 'dist' });
const browser = await puppeteer.launch({
  args: ['--no-sandbox'],
  defaultViewport: {
    width: 1024,
    height: 768,
  }
});
const localURL = `http://localhost:${port}/`;
const outputDirectory = join('tmp/screenshot/branches', branch);

await mkdir(outputDirectory, { recursive: true });
await Promise.all(
  paths.map(async (path) => {
    const page = await browser.newPage();
    const screenshot = await getScreenshot(page, localURL + path);
    const filename = join(outputDirectory, `${basename(path, extname(path))}.png`);
    process.stdout.write(`Writing ${filename}...\n`);
    await writeFile(filename, screenshot);
    await page.close();
  }),
);
await Promise.all([browser.close(), esbuildContext.dispose()]);
