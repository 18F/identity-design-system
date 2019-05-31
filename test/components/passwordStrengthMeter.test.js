const host = `http://localhost:${process.env.JEST_PORT}`;

beforeEach(async () => page.goto(`${host}/components/password-strength-meters/`));

test('expect input to be weak', async () => {
  await page.focus('.usa-input--lg-password');
  await expect(page).toMatchElement('input[type="submit"][disabled]');
  await expect(page).toMatchElement('.lg-password-strength--na');

  await page.type('aaa');
  await expect(page).toMatch('Repeats like "aaa" are easy to guess');
  await expect(page).toMatchElement('.lg-password-strength--very-weak');
});

test('expect input to be weak', async () => {
  await page.focus('.usa-input--lg-password');
  await expect(page).toMatchElement('input[type="submit"][disabled]');
  await expect(page).toMatchElement('.lg-password-strength--na');

  await page.type('aaa123');
  await expect(page).toMatch('This is a very common password');
  await expect(page).toMatchElement('.lg-password-strength--weak');
});

test('expect input to be so-so', async () => {
  await page.focus('.usa-input--lg-password');
  await expect(page).toMatchElement('input[type="submit"][disabled]');

  await page.type('aaa123cool');
  await expect(page).toMatch('This is similar to a commonly used password');
  await expect(page).toMatchElement('.lg-password-strength--so-so');
});

test('expect input to be good', async () => {
  await page.focus('.usa-input--lg-password');
  await expect(page).toMatchElement('input[type="submit"][disabled]');

  await page.type('aaa123coolme');
  await expect(page).toMatch('Password strength: Good');
  await expect(page).toMatchElement('.lg-password-strength--so-so');
});

test('expect input to be great', async () => {
  await page.focus('.usa-input--lg-password');
  await expect(page).toMatchElement('input[type="submit"][disabled]');

  await page.type('190809a8fqjekjlaj209cakjcoijes092');
  await expect(page).toMatch('Password strength: Great!');
  await expect(page).toMatchElement('.lg-password-strength--great');
});
