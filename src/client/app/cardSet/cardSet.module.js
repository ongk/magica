(function () {
  'use strict';

  angular
    .module('app.cardSet', [])
    .config(cardSetConfig);

  cardSetConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function cardSetConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('cardSet', {
        url: '/cardSet',
        templateUrl: 'app/cardSet/cardSet.html',
        controller: 'cardSetController',
        controllerAs: 'cardSetCtrl'
      })
      .state('cardSetDetail', {
        url: '/cardSet/:id',
        templateUrl: 'app/cardSet/cardSet.detail.html',
        controller: 'cardSetDetailController',
        controllerAs: 'cardSetDetailCtrl'
      });
  }

})();
