const path = require('path');
const util = require('util');
const { compiler } = require('gulp-sass');

test('scss files can be imported without node_modules', async () => {
  const results = await util.promisify(compiler.render)({
    data: "@import 'assets/scss/styles';",
    includePaths: [
      path.resolve(__dirname, '../../dist'),
    ],
  });

  expect(results.css.toString('utf-8')).toMatch(/\.usa-/);
});

test('if an asset-path function is defined, it is used to generate asset paths with $image-path and $font-path', async () => {
  const results = await util.promisify(compiler.render)({
    data: `
      @function asset-path($path) {
        @return 'test-path-rewritten/' + $path;
      }

      $font-path: 'test-fonts';
      $image-path: 'test-img';

      @import 'assets/scss/styles';
    `,
    includePaths: [
      path.resolve(__dirname, '../../dist'),
    ],
  });

  const css = results.css.toString('utf-8');

  const [usaAlertWarning] = css.match(/\.usa-alert--warning\s?{[^}]+}/);
  const [usaInputError] = css.match(/\.usa-textarea\.usa-input-error:not\(\.usa-input-inline\)\s?{[^}]+}/);
  const [fontFace] = css.match(/@font-face\s?{[^}]+}/);

  expect(usaAlertWarning).toMatch(/test-path-rewritten\/test-img/);
  expect(usaInputError).toMatch(/test-path-rewritten\/test-img/);
  expect(fontFace).toMatch(/test-path-rewritten\/test-fonts/);
});
