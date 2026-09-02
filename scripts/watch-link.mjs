#!/usr/bin/env node
// Mirrors design-system source into the consumable package directories that a
// linked consumer (e.g. `npm link`ed identity-idp) reads from, so edits under
// `src/` show up without a full `make build`. Consumers read SCSS from
// `packages-nds/` (via `--load-path`) and images from `dist/assets/img/`
// (Rails asset path), and both are plain copies of `src/`. Zero-dependency:
// uses Node's recursive `fs.watch` and `fs.cpSync`.

import { cpSync, existsSync, watch } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// [sourceDir, destDir] — each source is copied wholesale into its dest on change.
const mirrors = [
  ['src/scss/nds', 'packages-nds/nds'],
  ['src/scss/tokens', 'packages-nds/tokens'],
  ['src/img', 'dist/assets/img'],
];

function sync(src, dest) {
  const from = resolve(root, src);
  const to = resolve(root, dest);
  if (!existsSync(from)) return;
  cpSync(from, to, { recursive: true, force: true });
  const time = new Date().toLocaleTimeString();
  process.stdout.write(`[watch-link ${time}] ${src} -> ${dest}\n`);
}

const timers = new Map();
function scheduleSync(src, dest) {
  clearTimeout(timers.get(src));
  timers.set(
    src,
    setTimeout(() => sync(src, dest), 100),
  );
}

for (const [src, dest] of mirrors) {
  const from = resolve(root, src);
  if (!existsSync(from)) {
    process.stderr.write(`[watch-link] missing source, skipping: ${src}\n`);
    continue;
  }
  sync(src, dest); // initial mirror
  watch(from, { recursive: true }, () => scheduleSync(src, dest));
  process.stdout.write(`[watch-link] watching ${src}\n`);
}

process.stdout.write('[watch-link] ready — mirroring on change (ctrl-c to stop)\n');
