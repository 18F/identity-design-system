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
// close button, and any in-flight animations/transitions. Injected as a
// document-start script so it applies to the top frame *and* every iframe
// without any per-frame await plumbing.
const SETTLE_SCRIPT = `
(() => {
  const css = \`
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
  \`;
  const inject = () => {
    if (!document.documentElement) return;
    const s = document.createElement('style');
    s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  };
  if (document.documentElement) inject();
  else new MutationObserver((_, o) => { if (document.documentElement) { inject(); o.disconnect(); } })
    .observe(document, { childList: true, subtree: true });
})();
`;

// CI containers can't sustain many parallel Chrome pages; screenshots start
// hanging past the CDP protocolTimeout. Cap concurrency; keep the option to
// crank it up locally where it doesn't matter.
const CONCURRENCY = Number(process.env.SNAPSHOT_CONCURRENCY ?? 2);

/**
 * @param {import('puppeteer').Page} page
 * @param {string} url
 */
async function getScreenshot(page, url) {
  await page.evaluateOnNewDocument(SETTLE_SCRIPT);
  await page.goto(url);
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
