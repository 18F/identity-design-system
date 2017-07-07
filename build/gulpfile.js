
var gulp = require('gulp');
var insert = require('gulp-insert');
var sass = require('gulp-sass');
var spawn = require('cross-spawn');
var svgSprite = require('gulp-svg-sprite');

var base = '../';

var config = {
  mode: {
    symbol: {
      dest: '',
      sprite: 'cloudgov-sprite.svg'
    }
  }
};

// Build an svg-sprite with svg <symbol>s out of all the svg images.
gulp.task('svg-sprite', function() {
  return gulp.src(base + './src/img/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest(base + './img'));
});

gulp.task('build-components-dir', function(done) {
  var makeComponentsDir = spawn('mkdir', [
    '-p',
    base + './css/components'
  ]);

  makeComponentsDir.on('error', function (error) { done(error); });
  makeComponentsDir.on('close', function (code) { if (0 === code) { done(); } });
});

gulp.task('build-components', ['build-components-dir'], function() {
  return gulp.src(base + './src/css/components/*.scss')
    .pipe(insert.prepend("$static-img-path: '../../img';"))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(base + './css/components'));
});

gulp.task('default', function() {
  // Will perform any build tasks that require the gulp build system.
  gulp.start('svg-sprite');
});

