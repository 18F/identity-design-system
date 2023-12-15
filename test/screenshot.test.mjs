/* eslint-disable no-restricted-syntax, no-await-in-loop, no-param-reassign */

import { describe, before, after, it } from 'node:test';
import { createServer } from 'node:http';
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import serveStatic from 'serve-static';
import puppeteer from 'puppeteer';
import assert from 'assert';
import { PNG } from 'pngjs';
import match from 'pixelmatch';

/** @type {import('puppeteer').Page} */
let page;

const dirname = fileURLToPath(new URL('.', import.meta.url));

const REMOTE_HOST =
  'https://federalist-340d8801-aa16-4df5-ad22-b1e3e731098e.sites.pages.cloud.gov/site/18f/identity-design-system';
const DIFF_DIRECTORY = join(dirname, '../tmp/results/screenshot-diff');

async function stubAnimations() {
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

async function toggleHiddenContent() {
  await page.$$eval('.usa-accordion__container', (containers) =>
    containers.forEach((container) => container.removeAttribute('hidden')),
  );
}

async function getScreenshot(url) {
  await page.goto(url, { waitUntil: 'networkidle0' });
  await Promise.all([stubAnimations(), toggleHiddenContent()]);
  return page.screenshot({ fullPage: true, optimizeForSpeed: true });
}

function getURLPath(url) {
  return new URL(url).pathname;
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

describe('screenshot visual regression', () => {
  /** @type {import('node:http').Server} */
  let server;

  /** @type {import('puppeteer').Browser} */
  let browser;

  before(async () => {
    const serve = serveStatic('dist');
    server = createServer((req, res) => serve(req, res, () => res.end()));
    server.listen();
    browser = await puppeteer.launch({ headless: 'new' });
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
    server.close();
  });

  it('is visually identical to the live preview', async () => {
    const localURL = `http://localhost:${server.address().port}`;
    await page.goto(localURL);
    const urls = await page.$$eval('.usa-nav__link', (links) => links.map((link) => link.href));
    const paths = urls.map(getURLPath);

    for (const path of paths) {
      const local = await getScreenshot(localURL + path);
      const remote = await getScreenshot(REMOTE_HOST + path);
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
    }
  });
});
