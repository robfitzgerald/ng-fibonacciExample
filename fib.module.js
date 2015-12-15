(function() {

  angular
    .module('fib.module', ['ui.router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('route1', {
          url: '/fib5',
          templateUrl: 'content.html',
          controller: 'fibController',
          controllerAs: 'ctrl',
          resolve: {
            fibValue: fib5
          }
        })
        .state('route2', {
          url: '/fib15',
          templateUrl: 'content.html',
          controller: 'fibController',
          controllerAs: 'ctrl',
          resolve: {
            fibValue: fib15
          }
        })
        .state('route3', {
          url: '/fib30',
          templateUrl: 'content.html',
          controller: 'fibController',
          controllerAs: 'ctrl',
          resolve: {
            fibValue: fib30
          }
        })
        .state('route4', {
          url: '/fib50',
          templateUrl: 'content.html',
          controller: 'fibController',
          controllerAs: 'ctrl',
          resolve: {
            fibValue: fib50
          }
        })
        .state('restVersion', {
          url: '/fib/:num',
          templateUrl: 'content.html',
          controller: 'fibController',
          controllerAs: 'ctrl',
          resolve: {
            fibValue: fibN
          }
        })
    });

  function fib5 (fibService) {
    return fibService.calculateFib(5);
  }

  function fib15 (fibService) {
    return fibService.calculateFib(15);
  }

  function fib30 (fibService) {
    return fibService.calculateFib(30);
  }

  function fib50 (fibService) {
    return fibService.calculateFib(50);
  }

  function fibN (fibService, $stateParams) {
    return fibService.calculateFib($stateParams.num);
  }

})();