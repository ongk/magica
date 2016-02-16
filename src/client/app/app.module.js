(function () {
  'use strict';

  angular
    .module('app', [
      'app.card',
      'app.cardSet',
      'app.nav'
    ])
    .constant('app.basePath', 'app/');

})();
