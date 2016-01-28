'use strict';

module.exports = function () {
  var paths = {
    src: '../src/',
    dist: '../dist/'
  };

  var srcLib = paths.src + 'bower_components/';

  var config = {
    copyFiles: [
      paths.src + '**/*',
      '!' + paths.src + '*.json',
      '!' + paths.src + '**/*.scss',
      '!' + srcLib + 'jquery{,/**}',
      '!' + srcLib + 'bootstrap-sass/assets/javascripts{,/**}'
    ],

    cssFile: paths.dist + 'index.css',

    index: paths.src + 'index.html',

    jsFiles: [
      paths.dist + 'app/**/*.module.js',
      paths.dist + 'app/**/*.js'
    ],

    libFolders: [
      srcLib,
      paths.src + 'node_modules'
    ],

    paths: paths,

    scssFile: paths.src + 'index.scss',

    wiredep: {
      bowerJson: require(paths.src + 'bower.json'),
      directory: srcLib,
      exclude: [
        srcLib + 'jquery',
        srcLib + 'bootstrap-sass/assets/javascripts'
      ],
      ignorePath: paths.src
    },
  }

  return config;
};
