const host = `http://localhost:${process.env.JEST_PORT}`;

const expectSpinnerHidden = async (hidden) => {
  if (hidden) {
    await expect(page).toMatchElement('.lg-spinner--hidden');
    await expect(page).toMatchElement('.usa-button__lg-invokeSpinner');
  } else {
    await expect(page).toMatchElement('.lg-spinner');
    await expect(page).toMatchElement('.usa-button__lg-invokeSpinner--hidden');
  }
};

beforeEach(async () => page.goto(`${host}/components/spinner/`));

test('the spinner hides when the button is clicked', async () => {
  await expectSpinnerHidden(true);
  await page.click('.usa-button__lg-invokeSpinner');
  await expectSpinnerHidden(false);
});
