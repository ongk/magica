(function () {
  'use strict';

  angular
    .module('app.cardSet')
    .controller('cardSetController', CardSetController);

  CardSetController.$inject = ['$http'];

  function CardSetController($http) {
    var ctrl = this;

    ctrl.$http = $http;
    ctrl.cardSets = [];

    $http
      .get('/api/card_set')
      .then(function successCallback(response) {
        ctrl.cardSets = response.data;
      });
  }

  angular.extend(CardSetController.prototype, {

  });

})();
