// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  errorOnDeprecated: true,
  notify: true,
  preset: 'jest-puppeteer',
  transform: {
    '\\.js$': 'babel-jest',
  },
  testMatch: [
    'ONLY_VISUAL_REGRESSION_TEST' in process.env
      ? '**/test/screenshot.test.js'
      : '**/test/**/*.test.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    'SKIP_VISUAL_REGRESSION_TEST' in process.env && 'screenshot.test.js',
  ].filter(Boolean),
};
