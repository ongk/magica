(function () {
  'use strict';

  angular
    .module('app.card')
    .controller('cardDetailController', CardDetailController);

  CardDetailController.$inject = ['$http', '$state', '$stateParams'];

  function CardDetailController($http, $state, $stateParams) {
    var ctrl = this;

    ctrl.$http = $http;
    ctrl.$state = $state;
    ctrl.$stateParams = $stateParams;

    ctrl.card = null;

    if (angular.isDefined($stateParams.id)) {
      $http
        .get('/api/card/' + $stateParams.id)
        .then(function successCallback(response) {
          ctrl.card = response.data;
        });
    }
  }

  angular.extend(CardDetailController.prototype, {
    remove: function (id) {
      var ctrl = this;

      ctrl.$http
        .delete('/api/card/' + id)
        .then(function successCallback() {
          ctrl.$state.go('card');
        }, function errorCallback() {
	        ctrl.errorMessage = 'There was an error deleting this card';
        });
    }
  });

})();
