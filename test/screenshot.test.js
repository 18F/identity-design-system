/* eslint-disable no-restricted-syntax, no-await-in-loop, no-param-reassign */

import { describe, before, after, it, test } from 'node:test';
import { writeFile, mkdir } from 'node:fs/promises';
import assert from 'node:assert';
import { join, dirname, resolve, relative } from 'node:path';
import * as esbuild from 'esbuild';
import glob from 'fast-glob';
import puppeteer from 'puppeteer';
import { PNG } from 'pngjs';
import match from 'pixelmatch';

const paths = glob.sync('dist/*/index.html').map((path) => `/${dirname(relative('dist', path))}/`);

const REMOTE_HOST =
  'https://federalist-340d8801-aa16-4df5-ad22-b1e3e731098e.sites.pages.cloud.gov/site/18f/identity-design-system';
const DIFF_DIRECTORY = resolve('tmp/results/screenshot-diff');

async function stubAnimations(page) {
  await page.evaluate(() => {
    const isGif = (img) => img.src.endsWith('.gif');
    function stubGif(img) {
      // Disable reason: Self-assignment for attribute reflection.
      // See: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes
      /* eslint-disable no-self-assign */
      img.width = img.width;
      img.height = img.height;
      /* eslint-enable no-self-assign */
      img.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
      img.removeAttribute('srcset');
    }

    [...document.querySelectorAll('img')].filter(isGif).forEach(stubGif);
  });
}

async function toggleHiddenContent(page) {
  await page.$$eval('.usa-accordion__container', (containers) =>
    containers.forEach((container) => container.removeAttribute('hidden')),
  );
}

async function getScreenshot(page, url) {
  await page.goto(url, { waitUntil: 'networkidle0' });
  await Promise.all([stubAnimations(page), toggleHiddenContent(page)]);
  return page.screenshot({ fullPage: true, optimizeForSpeed: true });
}

function getDiffOutputBaseFileName(pathname) {
  let normalizedPathname = pathname;
  normalizedPathname = normalizedPathname.replace(/^\/|\/$/g, '');
  normalizedPathname = normalizedPathname.replace(/\W/g, '_');
  normalizedPathname = normalizedPathname || 'home';

  return join(DIFF_DIRECTORY, normalizedPathname);
}

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

describe('screenshot visual regression', { skip, concurrency: true }, () => {
  /** @type {import('esbuild').BuildContext} */
  let esbuildContext;

  /** @type {number} */
  let port;

  /** @type {import('puppeteer').Browser} */
  let browser;

  /** @type {import('puppeteer').BrowserContext} */
  let browserContext;

  before(async () => {
    esbuildContext = await esbuild.context({});
    port = (await esbuildContext.serve({ servedir: 'dist' })).port;
    browser = await puppeteer.launch({ headless: 'new' });
    browserContext = await browser.createIncognitoBrowserContext();
  });

  after(async () => {
    await Promise.all([browserContext.close(), browser.close(), esbuildContext.dispose()]);
  });

  it('has pages to test', () => {
    assert(paths.length);
  });

  paths.forEach((path) => {
    test(path, async () => {
      const localURL = `http://localhost:${port}`;
      const page = await browserContext.newPage();
      const local = await getScreenshot(page, localURL + path);
      const remote = await getScreenshot(page, REMOTE_HOST + path);
      const localPNG = PNG.sync.read(local);
      const remotePNG = PNG.sync.read(remote);
      const width = Math.max(localPNG.width, remotePNG.width);
      const height = Math.max(localPNG.height, remotePNG.height);
      const resizedLocalPNG = fillImageToSize(localPNG, width, height);
      const resizedRemotePNG = fillImageToSize(remotePNG, width, height);
      const diff = new PNG({ width, height });
      const diffs = match(resizedLocalPNG.data, resizedRemotePNG.data, diff.data, width, height, {
        threshold: 0.2,
      });
      if (diffs > 0) {
        const diffOutputBase = getDiffOutputBaseFileName(path);
        await mkdir(DIFF_DIRECTORY, { recursive: true });
        await Promise.all([
          writeFile(`${diffOutputBase}-local.png`, PNG.sync.write(resizedLocalPNG)),
          writeFile(`${diffOutputBase}-remote.png`, PNG.sync.write(resizedRemotePNG)),
          writeFile(`${diffOutputBase}-diff.png`, PNG.sync.write(diff)),
        ]);
      }
      assert.strictEqual(diffs, 0, `Expected "${path}" to visually match the live site.`);
    });
  });
});
