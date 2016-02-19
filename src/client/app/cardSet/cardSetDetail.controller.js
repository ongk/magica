(function () {
  'use strict';

  angular
    .module('app.cardSet')
    .controller('cardSetDetailController', CardSetDetailController);

  CardSetDetailController.$inject = ['$http', '$state', '$stateParams'];

  function CardSetDetailController($http, $state, $stateParams) {
    var ctrl = this;
    ctrl.$state = $state;
    ctrl.$stateParams = $stateParams;

    ctrl.cardSet = {};

    if (angular.isDefined($stateParams.id)) {
      $http
        .get('/api/card_set/' + $stateParams.id)
        .then(function successCallback(response) {
          ctrl.cardSet = response.data;
        });
    }
  }

})();
