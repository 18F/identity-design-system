const host = `http://localhost:${process.env.JEST_PORT}`;

const rgb2hex = (rgb) => {
  const [, red, green, blue] = /rgb\((\d+), (\d+), (\d+)\)/.exec(rgb);
  const parts = [red, green, blue].map((d) => `0${Number(d).toString(16)}`.slice(-2));
  return `#${parts.join('')}`;
};

test('hex codes match background color on the color documentation page', async () => {
  await page.goto(`${host}/utilities/color/`);
  const colors = await page.$$eval("[data-test='color-swatch']", (els) =>
    [...els].map((el) => {
      const text = el.innerText.trim();
      const background = window.getComputedStyle(el).backgroundColor;

      return { text, background };
    }),
  );

  expect(colors.length).toBe(56);

  colors.forEach((swatch) => {
    const backgroundColor = rgb2hex(swatch.background);
    expect(swatch.text).toBe(backgroundColor);
  });
});
