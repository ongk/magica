(function () {
  'use strict';

  angular
    .module('app.card')
    .controller('cardController', CardController);

  CardController.$inject = ['$http'];

  function CardController($http) {
    this.$http = $http;
  }

  angular.extend(CardController.prototype, {

  });

})();
