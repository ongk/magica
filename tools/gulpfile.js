'use strict';

var config = require('./gulp.config')(),
  del = require('del'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  wiredep = require('wiredep').stream;
  
gulp.task('build:copy', ['clean'], function () {
  return gulp
    .src(config.copyFiles)
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

gulp.task('clean', function () {
  return del(config.paths.dist + '**/*', { force: true });
});

gulp.task('default', ['build'], function () {
  gutil.log('Finished cleaning and building dist');
});