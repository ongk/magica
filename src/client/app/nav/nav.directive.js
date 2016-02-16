(function () {
  'use strict';

  angular
    .module('app.nav', [])
    .directive('nav', nav);

  nav.$inject = ['app.basePath'];

  function nav(path) {
    return {
      restrict: 'E',
      templateUrl: path + 'nav/nav.html'
    };
  }

})();
