/* eslint-disable no-restricted-syntax, no-await-in-loop, no-param-reassign */

const { promises: fsPromises, readFileSync } = require('fs');
const { join } = require('path');
const { spawnSync } = require('child_process');
const assert = require('assert');
const mkdirp = require('mkdirp');
const { PNG } = require('pngjs');
const match = require('pixelmatch');
const YAML = require('yaml');

const { writeFile } = fsPromises;

const ACKNOWLEDGED_COMMIT = '247b7e6815b358d7962ad2bc21d34dd9122bbe69';
const LOCAL_HOST = `http://localhost:${process.env.JEST_PORT}`;
const REMOTE_HOST = 'https://design.login.gov';
const DIFF_DIRECTORY = join(__dirname, '../tmp/results/screenshot-diff');
const { url: URL_PREFIX, github_repo_url: GITHUB_REPO_URL } = YAML.parse(
  readFileSync(join(__dirname, '../_config.yml'), 'utf8'),
);

async function getURLsFromSitemap(url) {
  await page.goto(url);
  return page.$$eval('url loc', locs => locs.map(loc => loc.textContent));
}

async function stubAnimations() {
  await page.evaluate(() => {
    const isGif = img => img.src.endsWith('.gif');
    function stubGif(img) {
      img.width = img.width;
      img.height = img.height;
      img.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
      img.removeAttribute('srcset');
    }

    [...document.querySelectorAll('img')].filter(isGif).forEach(stubGif);
  });
}

function getLatestCommit() {
  const [sha] = spawnSync('git', ['ls-remote', GITHUB_REPO_URL, 'HEAD'])
    .stdout
    .toString()
    .trim()
    .split('\t');

  return sha;
}

async function getScreenshot(url) {
  await page.goto(url);
  await stubAnimations();
  return page.screenshot({ fullPage: true });
}

function getURLPath(url) {
  const prefix = new URL(URL_PREFIX).pathname;
  const { pathname } = new URL(url);
  return pathname.indexOf(prefix) === 0 ? pathname.slice(prefix.length) : pathname;
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
      const index = ((resizedImage.width * y) + x) << 2;
      resizedImage.data[index] = 255; // Red
      resizedImage.data[index + 1] = 255; // Green
      resizedImage.data[index + 2] = 255; // Blue
      resizedImage.data[index + 3] = 255; // Alpha (Opacity)
    }
  }

  return resizedImage;
}

const testFn = getLatestCommit() === ACKNOWLEDGED_COMMIT ? test.skip : test;

testFn('screenshot visual regression', async () => {
  const paths = (await getURLsFromSitemap(`${LOCAL_HOST}/sitemap.xml`)).map(getURLPath);

  for (const path of paths) {
    const local = await getScreenshot(LOCAL_HOST + path);
    const remote = await getScreenshot(REMOTE_HOST + path);
    const localPNG = PNG.sync.read(local);
    const remotePNG = PNG.sync.read(remote);
    const width = Math.max(localPNG.width, remotePNG.width);
    const height = Math.max(localPNG.height, remotePNG.height);
    const resizedLocalPNG = fillImageToSize(localPNG, width, height);
    const resizedRemotePNG = fillImageToSize(remotePNG, width, height);
    const diff = new PNG({ width, height });
    const diffs = match(
      resizedLocalPNG.data,
      resizedRemotePNG.data,
      diff.data,
      width,
      height,
      {
        threshold: 0.2,
      },
    );
    if (diffs > 0) {
      const diffOutputBase = getDiffOutputBaseFileName(path);
      await mkdirp(DIFF_DIRECTORY);
      await Promise.all([
        writeFile(`${diffOutputBase}-local.png`, PNG.sync.write(resizedLocalPNG)),
        writeFile(`${diffOutputBase}-remote.png`, PNG.sync.write(resizedRemotePNG)),
        writeFile(`${diffOutputBase}-diff.png`, PNG.sync.write(diff)),
      ]);
    }
    assert.strictEqual(diffs, 0, `Expected "${path}" to have 0 diffs`);
  }
}, 1000000);
