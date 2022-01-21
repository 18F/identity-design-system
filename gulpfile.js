const { pipeline } = require('stream');
const { ESLint } = require('eslint');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const sass = require('gulp-sass')(require('sass-embedded'));
const stylelint = require('stylelint');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const babel = require('gulp-babel');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const path = require('path');
const pkg = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';

const PROJECT_SASS_SRC = './src/scss';
const PROJECT_JS_SRC = './src/js';
const PROJECT_JS_AUTO = 'auto.js';
const PROJECT_JS_AUTO_OUT = 'main.js';
const OUTPUT_DIR = process.env.OUTPUT_DIR || './dist';
const PACKAGE_DEST = 'build';
const JS_DEST = `${OUTPUT_DIR}/assets/js`;
const CSS_DEST = `${OUTPUT_DIR}/assets/css`;
const SCSS_DEST = `${OUTPUT_DIR}/assets/scss`;

const notificationOptions = {
  success: {
    sound: 'Pop',
    icon: path.join(__dirname, 'src/img/favicons/android-chrome-192x192.png'),
    title: pkg.name,
    message: '✅ Built <%= file.relative %>',
  },
  error: {
    sound: 'Basso',
    icon: path.join(__dirname, 'src/img/favicons/android-chrome-192x192.png'),
    title: pkg.name,
    message: '💔 Failed to build <%= file.relative %>',
  },
  handler(err) {
    notify(notificationOptions.error).write({
      relative: path.basename(err.file || err.filename),
    });
    console.error(err.toString()); // eslint-disable-line no-console
    this.emit('end');
  },
};

gulp.task('lint-js', async () => {
  const eslint = new ESLint({});
  const formatter = await eslint.loadFormatter('stylish');

  return pipeline(
    gulp.src([`${PROJECT_JS_SRC}/**/*.js`, 'test/**/*.js', '*.js'], { base: './' }),
    async function (files) {
      for await (const file of files) {
        const results = await eslint.lintText(file.contents.toString(), { filePath: file.path });
        const errors = ESLint.getErrorResults(results);
        if (errors.length) {
          process.stdout.write(formatter.format(results));
          process.exitCode = 1;
        }
      }
    },
    () => {},
  );
});

gulp.task('build-package-cjs', () =>
  gulp
    .src(`${PROJECT_JS_SRC}/**/*.js`)
    .pipe(babel({ presets: [['@babel/preset-env', { modules: 'cjs' }]] }))
    .pipe(gulp.dest(`${PACKAGE_DEST}/cjs`)),
);

gulp.task('build-package-esm', () =>
  gulp
    .src(`${PROJECT_JS_SRC}/**/*.js`)
    .pipe(babel({ presets: [['@babel/preset-env', { modules: false }]] }))
    .pipe(gulp.dest(`${PACKAGE_DEST}/esm`)),
);

gulp.task('build-js', () => {
  const stream = browserify({ entries: `${PROJECT_JS_SRC}/${PROJECT_JS_AUTO}`, debug: true })
    .transform('babelify', { global: true, presets: ['@babel/preset-env'] })
    .bundle()
    .on('error', notificationOptions.handler)
    .pipe(source(PROJECT_JS_AUTO))
    .pipe(buffer())
    .pipe(rename(PROJECT_JS_AUTO_OUT))
    .pipe(gulp.dest(JS_DEST))
    .pipe(notify(notificationOptions.success));

  stream.pipe(sourcemaps.init({ loadMaps: true }));

  if (process.env.NODE_ENV !== 'development') {
    stream.pipe(uglify());
  }

  stream.pipe(sourcemaps.write('.')).pipe(gulp.dest(JS_DEST));

  return stream;
});

gulp.task('watch-js', () => gulp.watch(`${PROJECT_JS_SRC}/**/*.js`, gulp.series('build-js')));

gulp.task('lint-sass', async function (callback) {
  const { errored, output } = await stylelint.lint({
    files: [`${PROJECT_SASS_SRC}/**/*.scss`, `!${PROJECT_SASS_SRC}/uswds/**/*.scss`],
    formatter: 'string',
  });

  callback(errored ? new Error(output) : null);
});

gulp.task('build-sass', () => {
  const plugins = [
    autoprefixer({
      cascade: false,
      grid: true,
    }),
    isProduction && cssnano(),
  ].filter(Boolean);

  return gulp
    .src([`${PROJECT_SASS_SRC}/*.scss`])
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(sass())
    .pipe(postcss(plugins))
    .on('error', notificationOptions.handler)
    .pipe(gulp.dest(CSS_DEST))
    .pipe(notify(notificationOptions.success))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(CSS_DEST));
});

gulp.task('watch-sass', () =>
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series('build-sass')),
);

const replaceUrls = () => replace(/url\(["']?([^)"']+)["']?\)/g, 'url(asset-path-if-exists("$1"))');
const underscorePrefix = () => gulpif((f) => f.basename[0] !== '_', rename({ prefix: '_' }));

gulp.task('copy-login-scss', () =>
  gulp
    .src([`${PROJECT_SASS_SRC}/**/*.scss`])
    .pipe(replaceUrls())
    .pipe(underscorePrefix())
    .pipe(gulp.dest(SCSS_DEST)),
);

gulp.task('copy-uswds-scss', () =>
  gulp
    .src(['node_modules/uswds/dist/scss/**/*.scss'])
    .pipe(replaceUrls())
    .pipe(underscorePrefix())
    .pipe(gulp.dest(`${SCSS_DEST}/uswds`)),
);

gulp.task('copy-scss', gulp.series('copy-login-scss', 'copy-uswds-scss'));

gulp.task('lint', gulp.parallel('lint-js', 'lint-sass'));

gulp.task('build', gulp.parallel('build-js', 'build-sass'));

gulp.task('build-package', gulp.parallel('build-package-cjs', 'build-package-esm'));

gulp.task(
  'watch',
  gulp.parallel(gulp.series('build-js', 'watch-js'), gulp.series('build-sass', 'watch-sass')),
);

gulp.task('default', gulp.series('watch'));
