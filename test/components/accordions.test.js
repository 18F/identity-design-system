const host = `http://localhost:${process.env.JEST_PORT}`;

const expectAccordionItem = async (id, { hidden }) => {
  if (hidden) {
    await expect(page).toMatchElement(`#${id}[hidden]`);
    await expect(page).toMatchElement(`[aria-controls='${id}'][aria-expanded='false']`);
  } else {
    await expect(page).toMatchElement(`#${id}:not([hidden])`);
    await expect(page).toMatchElement(`[aria-controls='${id}'][aria-expanded='true']`);
  }
};

beforeEach(async () => page.goto(`${host}/components/accordions/`));

test('accordions are open on load only when aria-expanded="true"', async () => {
  await expectAccordionItem('unique-id-1', { hidden: false });
  await expectAccordionItem('unique-id-2', { hidden: true });
  await expectAccordionItem('unique-id-3', { hidden: true });
});

test('opening one accordion item closes the currently open one', async () => {
  await expectAccordionItem('unique-id-1', { hidden: false });
  await expectAccordionItem('unique-id-2', { hidden: true });

  await page.click("[aria-controls='unique-id-2']");

  await expectAccordionItem('unique-id-1', { hidden: true });
  await expectAccordionItem('unique-id-2', { hidden: false });
});

test('two accordion items can be open simultaneously with aria-multiselectable="true"', async () => {
  await page.$eval("[data-test='accordion']", (a) => a.setAttribute('aria-multiselectable', true));

  await expectAccordionItem('unique-id-1', { hidden: false });
  await expectAccordionItem('unique-id-2', { hidden: true });

  await page.click("[aria-controls='unique-id-2']");

  await expectAccordionItem('unique-id-1', { hidden: false });
  await expectAccordionItem('unique-id-2', { hidden: false });
});

test('clicking an open accordion title closes the accordion item', async () => {
  await expectAccordionItem('unique-id-1', { hidden: false });

  await page.click("[aria-controls='unique-id-1']");

  await expectAccordionItem('unique-id-1', { hidden: true });
});
