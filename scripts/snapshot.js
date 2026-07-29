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
  :focus, :focus-visible, :focus-within {
    outline: none !important;
    box-shadow: none !important;
  }
`;

/**
 * Wait for every same-origin iframe on the page to be attached and to have
 * finished loading its own document. Without this, page.frames() below may
 * miss embeds that hadn't attached yet at the moment goto()'s 'load' event
 * fired (e.g. the mobile header embed).
 *
 * @param {import('puppeteer').Page} page
 */
async function waitForFrames(page) {
  const handles = await page.$$('iframe');
  await Promise.all(
    handles.map(async (handle) => {
      try {
        const frame = await handle.contentFrame();
        if (!frame) return;
        await frame
          .waitForFunction(() => document.readyState === 'complete', {
            timeout: 5_000,
          })
          .catch(() => {});
      } catch {
        // Detached; ignore.
      }
    }),
  );
}

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
  await waitForFrames(page);
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
