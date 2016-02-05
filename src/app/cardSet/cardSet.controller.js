(function () {
  'use strict';

  angular
    .module('app.card')
    .controller('cardSetController', CardSetController);

  CardSetController.$inject = ['$http'];

  function CardSetController($http) {
    this.$http = $http;
  }

  angular.extend(CardSetController.prototype, {

  });

})();
