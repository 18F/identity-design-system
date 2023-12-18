#!/usr/bin/env node

import browserslist from 'browserslist';

/**
 * @see https://esbuild.github.io/api/#target
 */
const SUPPORTED_ESBUILD_TARGETS = new Set([
  'chrome',
  'deno',
  'edge',
  'firefox',
  'hermes',
  'ie',
  'ios',
  'node',
  'opera',
  'rhino',
  'safari',
]);

process.stdout.write(
  browserslist()
    // Convert name and version range to parts
    // ["chrome 119" ...] ➡️ [["chrome", "119"] ...]
    .map((browser) => browser.split(' '))
    // Use the lower version of a range
    // [["ios_saf", "16.6-16.7"] ...] ➡️ [["ios_saf", "16.6"] ...]
    .map(([name, versions]) => [name, versions.split('-')[0]])
    // Exclude unsupported targets
    // [["samsung", "23"] ...]  ➡️ [...]
    .filter(([name]) => SUPPORTED_ESBUILD_TARGETS.has(name))
    // Use the lowest version when multiple versions of the same browser are supported
    // [["chrome", "119"], ["chrome", "118"], ...] ➡️ [["chrome", "118"] ...]
    .filter(([name, version], _index, array) =>
      array.every(([otherName, otherVersion]) => otherName !== name || version <= otherVersion),
    )
    // Convert back to ESBuild string target format
    // [["chrome", "118"], ...] ➡️ ["chrome118" ...]
    .map(([name, version]) => [name, version].join(''))
    // Convert to comma separated list
    // ["chrome118", "safari15.6" ...] ➡️ "chrome118,safari15.6"
    .join(),
);
