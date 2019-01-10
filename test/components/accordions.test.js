const host = `http://localhost:${process.env.JEST_PORT}`;

beforeEach(async () => page.goto(`${host}/components/accordions/`));

test('accordions are open only when aria-expanded="true"', async () => {
  await expect(page).not.toMatchElement('.test-visible[hidden]');
  await expect(page).not.toMatchElement('.test-hidden:not([hidden])');

  await expect(page).toMatchElement('.test-visible:not([hidden])');
  await expect(page).toMatchElement('.test-hidden[hidden]');
});

test('opening one accordion item closes the currently open one', async () => {
  await expect(page).toMatchElement('#unique-id-1:not([hidden])');
  await expect(page).toMatchElement('#unique-id-2[hidden]');

  await page.click("[aria-controls='unique-id-2']");

  await expect(page).toMatchElement('#unique-id-1[hidden]');
  await expect(page).toMatchElement('#unique-id-2:not([hidden])');
});

test('two accordion items can be open simultaneously with aria-multiselectable="true"', async () => {
  await page.$eval('.test-accordion', a => a.setAttribute('aria-multiselectable', true));

  await expect(page).toMatchElement('#unique-id-1:not([hidden])');
  await expect(page).toMatchElement('#unique-id-2[hidden]');

  await page.click("[aria-controls='unique-id-2']");

  await expect(page).toMatchElement('#unique-id-1:not([hidden])');
  await expect(page).toMatchElement('#unique-id-2:not([hidden])');
});

test('clicking an open accordion title closes the accordion item', async () => {
  await expect(page).toMatchElement('#unique-id-1:not([hidden])');

  await page.click("[aria-controls='unique-id-1']");

  await expect(page).toMatchElement('#unique-id-1[hidden]');
});

test('clicking an accordion close button closes the accordion item', async () => {
  await expect(page).toMatchElement('#unique-id-1:not([hidden])');

  await page.click('#unique-id-1 .usa-accordion-close-button');

  await expect(page).toMatchElement('#unique-id-1[hidden]');
});
