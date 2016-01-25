'use strict';

var config = require('./gulp.config')(),
  del = require('del'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  inject = require('gulp-inject'),
  sass = require('gulp-sass'),
  shelljs = require('shelljs'),
  wiredep = require('wiredep').stream;
  
gulp.task('build:copy', ['clean:dist', 'install'], function () {
  return gulp.src(config.copyFiles)
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('build:inject', ['build:copy'], function () {
  return gulp.src(config.index)
    .pipe(wiredep(config.wiredep))
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('build', ['build:inject'], function () {
  gutil.log('Building...');  
});

gulp.task('clean:dist', function () {
  return del(config.paths.dist + '**/*', { force: true });
});

gulp.task('clean:src', function () {
  return del(config.libFolders, { force: true });
});

gulp.task('install', ['clean:src'], function () {
  var CMD = 'cd ' + config.paths.src + ' && npm install';
  return shelljs.exec(CMD, { async: false });
});

gulp.task('default', ['build'], function () {
  gutil.log('Finished cleaning and building dist');
});