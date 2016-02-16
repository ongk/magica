(function () {
  'use strict';

  angular
    .module('app.navbar', [])
    .directive('navbar', navbar);

  navbar.$inject = ['app.basePath'];

  function navbar(path) {
    return {
      restrict: 'E',
      templateUrl: path + 'navbar/navbar.html'
    };
  }

})();
