'use strict';

module.exports = function () {
  var paths = {
    src: '../src/',
    dist: '../dist/'
  };
  paths.client = paths.dist + 'client/';

  var srcLib = paths.src + 'client/lib/';

  var config = {
    copyFiles: [
      paths.src + '**/*',
      '!' + paths.src + '*.json',
      '!' + paths.src + '**/*.scss',
      '!' + srcLib + 'jquery{,/**}',
      '!' + srcLib + 'bootstrap-sass/assets/javascripts{,/**}'
    ],

    cssFile: paths.client + 'index.css',

    htmlSourceFiles: [
      paths.src + 'client/**/*.html',
      '!' + paths.src + 'client/index.html'
    ],

    index: paths.client + 'index.html',

    jsFiles: [
      paths.client + '**/*.module.js',
      paths.client + '**/*.js',
      '!' + paths.client + 'lib/**/*.js'
    ],

    jsSourceFiles: [
      paths.src + 'client/**/*.js',
      '!' + paths.src + 'client/lib/**/*.js'
    ],

    libFolders: [
      srcLib,
      paths.src + 'node_modules'
    ],

    paths: paths,

    scssFile: paths.src + 'client/index.scss',

    scssSourceFiles: paths.src + 'client/**/*.scss',

    wiredep: {
      bowerJson: require(paths.src + 'bower.json'),
      directory: srcLib,
      exclude: [
        srcLib + 'jquery',
        srcLib + 'bootstrap-sass/assets/javascripts'
      ],
      ignorePath: '../' + paths.src + 'client/'
    },
  }

  return config;
};
