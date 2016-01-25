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
      '!' + srcLib + 'jquery{,/**}',
      '!' + srcLib + 'bootstrap-sass/assets/javascripts{,/**}',  
    ],
    
    index: paths.src + 'index.html', 
    
    paths: paths,
    
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