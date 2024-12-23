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
  (await exec('git branch --show-current')).stdout.replace(/\W/g, '-');

/**
 * @param {import('puppeteer').Page} page
 * @param {string} url
 */
async function getScreenshot(page, url) {
  await page.goto(url);
  return page.screenshot({ fullPage: true, optimizeForSpeed: true });
}

const esbuildContext = await esbuild.context({});
const { port } = await esbuildContext.serve({ servedir: 'dist' });
const browser = await puppeteer.launch({
  args: ['--no-sandbox'],
  defaultViewport: {
    width: 1024,
    height: 768,
  },
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
