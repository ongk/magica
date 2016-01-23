'use strict';

var config = require('./gulp.config')(),
  del = require('del'),
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  wiredep = require('wiredep').stream;