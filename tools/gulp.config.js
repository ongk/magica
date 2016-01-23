'use strict';

module.exports = function () {
  var paths = {
    src: '../src/',
    dist: '../dist/'
  };
  
  var srcLib = paths.src + 'lib/';

  var config = {
    copyFiles: [
      paths.src + '**/*',
      '!' + srcLib + 'jquery{,/**}',  
      '!' + srcLib + 'bootstrap-sass/assets/javascripts{,/**}',  
    ],
    
    index: paths.src + 'index.html', 
    
    paths: paths,
    
    wiredep: {
      bowerJson: require('./bower.json'),
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