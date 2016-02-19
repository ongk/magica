(function () {
  'use strict';

  angular
    .module('app', [
      'app.card',
      'app.cardSet',
      'app.navbar'
    ])
    .constant('app.basePath', 'app/');

})();
