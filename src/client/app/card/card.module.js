(function () {
  'use strict';

  angular
    .module('app.card', [])
    .config(cardConfig);

  cardConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function cardConfig($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('card', {
        url: '/card',
        templateUrl: 'app/card/card.html',
        controller: 'cardController',
        contraollerAs: 'cardCtrl'
      })
      .state('cardDetail', {
        url: '/card/:id',
        templateUrl: 'app/card/card.detail.html',
        controller: 'cardDetailController',
        controllerAs: 'cardDetailCtrl'
      });
  }

})();
