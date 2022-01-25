const LOCAL_HOST = `http://localhost:${process.env.JEST_PORT}`;
const REMOTE_HOST = 'https://design.login.gov';

function getNormalizedURL(url) {
  return url.replace(REMOTE_HOST, LOCAL_HOST);
}

export async function getURLsFromSitemap() {
  await page.goto(`${LOCAL_HOST}/sitemap.xml`);
  const urls = await page.$$eval('url loc', (locs) => locs.map((loc) => loc.textContent));
  return urls.map(getNormalizedURL);
}
