const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const mqpacker = require('css-mqpacker');
const notify = require('gulp-notify');
const uswdsPkg = require('uswds/package.json');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');
const gulpStylelint = require('gulp-stylelint');
const sourcemaps = require('gulp-sourcemaps');
const uswds = require('uswds-gulp/config/uswds');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const path = require('path');
const pkg = require('./package.json');

const PROJECT_SASS_SRC = './src/scss';
const PROJECT_JS_SRC = './src/js';
const PROJECT_JS_MAIN = 'main.js';
const OUTPUT_DIR = process.env.OUTPUT_DIR || './dist';
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
  handler: (err) => {
    notify(notificationOptions.error).write({
      relative: path.basename(err.file || err.filename),
    });
    console.error(err.toString()); // eslint-disable-line no-console
  },
};

gulp.task('lint-js', () =>
  gulp
    .src([`${PROJECT_JS_SRC}/**/*.js`, 'test/**/*.js', '*.js'], { base: './' })
    .pipe(eslint({ fix: process.argv.includes('--fix') }))
    .pipe(eslint.format())
    .pipe(gulp.dest('./'))
    .pipe(eslint.failAfterError()),
);

gulp.task('build-js', () => {
  const stream = browserify({ entries: `${PROJECT_JS_SRC}/${PROJECT_JS_MAIN}`, debug: true })
    .transform('babelify', { global: true, presets: ['@babel/preset-env'] })
    .bundle()
    .on('error', notificationOptions.handler)
    .pipe(source(PROJECT_JS_MAIN))
    .pipe(buffer())
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

gulp.task('lint-sass', () =>
  gulp.src(`${PROJECT_SASS_SRC}/**/*.scss`).pipe(
    gulpStylelint({
      failAfterError: true,
      reporters: [{ formatter: 'string', console: true }],
      syntax: 'scss',
      debug: true,
    }),
  ),
);

gulp.task('build-sass', () => {
  const plugins = [
    autoprefixer({
      cascade: false,
      grid: true,
    }),
    mqpacker({ sort: true }),
    cssnano(),
  ];

  const stream = gulp
    .src([`${PROJECT_SASS_SRC}/*.scss`])
    .pipe(replace(/\buswds @version\b/g, `uswds v${uswdsPkg.version}`))
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({
        includePaths: [PROJECT_SASS_SRC, `${uswds}/scss`, `${uswds}/scss/packages`],
      }).on('error', notificationOptions.handler),
    )
    .pipe(postcss(plugins))
    .pipe(gulp.dest(CSS_DEST))
    .pipe(notify(notificationOptions.success));

  stream.pipe(sourcemaps.write('.')).pipe(gulp.dest(CSS_DEST));

  return stream;
});

gulp.task('watch-sass', () =>
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series('build-sass')),
);

const replaceUrls = () => replace(/url\(["']?([^)"']+)["']?\)/g, 'url(asset-path-if-exists("$1"))');
const underscorePrefix = () => gulpif((f) => f.basename[0] !== '_', rename({ prefix: '_' }));

gulp.task('copy-login-scss', () =>
  gulp
    .src([`${PROJECT_SASS_SRC}/**/*.scss`])
    .pipe(replace("@import 'uswds'", "@import 'uswds/uswds'"))
    .pipe(replaceUrls())
    .pipe(underscorePrefix())
    .pipe(gulp.dest(SCSS_DEST)),
);

gulp.task('copy-uswds-scss', () =>
  gulp
    .src([`${uswds}/scss/**/*.scss`])
    .pipe(replaceUrls())
    .pipe(underscorePrefix())
    .pipe(gulp.dest(`${SCSS_DEST}/uswds`)),
);

gulp.task('copy-scss', gulp.parallel('copy-login-scss', 'copy-uswds-scss'));

gulp.task('lint', gulp.parallel('lint-js', 'lint-sass'));

gulp.task('build', gulp.parallel('build-js', 'build-sass'));

gulp.task(
  'watch',
  gulp.parallel(gulp.series('build-js', 'watch-js'), gulp.series('build-sass', 'watch-sass')),
);

gulp.task('default', gulp.series('watch'));
