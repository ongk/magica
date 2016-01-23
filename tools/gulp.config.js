module.exports = function () {
  var paths = {
    src: '../src/',
    dist: '../dist/'
  };

  var config = {
    paths: paths,
    
    wiredep: {
      bowerJson: require('./bower.json'),
      directory: '../src/lib/',
      ignorePath: '../src/'
    },
  }
  
  return config;
};