'use strict';

var config = require('./gulp.config')(),
  del = require('del'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  inject = require('gulp-inject'),
  runSequence = require('run-sequence'),
  sass = require('gulp-sass'),
  shelljs = require('shelljs'),
  wiredep = require('wiredep').stream;

// Build 'dist'
gulp.task('build', function (next) {
  runSequence(
    'clean:dist',
    'install',
    'build:copy',
    'css',
    'build:inject',
    next
  );
});

// Copy all production-ready files to 'dist'
gulp.task('build:copy', function () {
  return gulp.src(config.copyFiles)
    .pipe(gulp.dest(config.paths.dist));
});

// Inject JS and CSS references in index.html
gulp.task('build:inject', function () {
  var sources = gulp.src(
    [config.cssFile]
    .concat(config.jsFiles), {read: false});

  return gulp.src(config.index)
    .pipe(wiredep(config.wiredep))
    .pipe(inject(sources, {ignorePath: config.paths.client, addRootSlash: false}))
    .pipe(gulp.dest(config.paths.client));
});

// Clean 'dist' and 'src'
gulp.task('clean', function (next) {
  runSequence(
    'clean:dist',
    'clean:src',
    next
  );
});

// Clear 'dist'
gulp.task('clean:dist', function () {
  return del(config.paths.dist + '**/*', { force: true });
});

// Remove bower_components and node_modules from 'src'
gulp.task('clean:src', function () {
  return del(config.libFolders, { force: true });
});

gulp.task('copy:html', function () {
	 return gulp.src(config.htmlSourceFiles)
     .pipe(gulp.dest(config.paths.client));
});

gulp.task('copy:js', function (next) {
  gulp.src(config.jsSourceFiles)
    .pipe(gulp.dest(config.paths.client));

  return gulp.src(config.index)
    .pipe(inject(gulp.src(config.jsFiles, {read:false}), {ignorePath: config.paths.client, addRootSlash: false}))
    .pipe(gulp.dest(config.paths.client));
});

// Compile to CSS
gulp.task('css', function () {
  return gulp.src(config.scssFile)
    .pipe(sass())
    .pipe(gulp.dest(config.paths.client));
});

// Install Node.js modules and Bower packages in 'src'
gulp.task('install', ['clean:src'], function () {
  var CMD = 'cd ' + config.paths.src + ' && npm install';
  return shelljs.exec(CMD, { async: false });
});

gulp.task('watch', function () {
  gulp.watch(config.htmlSourceFiles, ['copy:html']);
  gulp.watch(config.jsSourceFiles, ['copy:js']);
  gulp.watch(config.scssSourceFiles, ['css']);
});

// Default task: build
gulp.task('default', ['build'], function () {
  gutil.log('Finished cleaning and building dist');
});
