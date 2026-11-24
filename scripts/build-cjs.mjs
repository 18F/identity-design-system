import { glob, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { transform } from 'esbuild';

// Transform each module in isolation: both sides of local imports use esbuild's
// CommonJS interop, without inheriting Node ESM interop from the source package.
for await (const file of glob('**/*.{js,ts}', { cwd: 'src/js' })) {
  const sourcefile = join('src/js', file);
  const output = join('build/cjs', file.replace(/\.ts$/, '.js'));
  const { code } = await transform(await readFile(sourcefile, 'utf8'), {
    sourcefile,
    loader: file.endsWith('.ts') ? 'ts' : 'js',
    format: 'cjs',
    target: process.argv[2].split(','),
  });
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, code);
}
