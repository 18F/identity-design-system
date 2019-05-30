const host = `http://localhost:${process.env.JEST_PORT}`;

const expectSpinnerHidden = async (hidden) => {
  if (hidden) {
    await expect(page).toMatchElement('.spinner--hidden');
    await expect(page).toMatchElement('.usa-button__invokeSpinner');
  } else {
    await expect(page).toMatchElement('.spinner');
    await expect(page).toMatchElement('.usa-button__invokeSpinner--hidden');
  }
};

beforeEach(async () => page.goto(`${host}/components/spinner/`));

test('accordions are open on load only when aria-expanded="true"', async () => {
  await expectSpinnerHidden(true);
  await page.click('.usa-button__invokeSpinner');
  await expectSpinnerHidden(false);
});
