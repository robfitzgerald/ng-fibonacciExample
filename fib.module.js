(function() {

  angular
    .module('fib.module', ['ui.router'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('route1', {
          url: '/fib4',
          templateUrl: 'content.html',
          controller: 'fibController',
          controllerAs: 'ctrl',
          resolve: {
            fibValue: fib4
          }
        })
        .state('route2', {
          url: '/fib10',
          templateUrl: 'content.html',
          controller: 'fibController',
          controllerAs: 'ctrl',
          resolve: {
            fibValue: fib10
          }
        })
        .state('route3', {
          url: '/fib50',
          templateUrl: 'content.html',
          controller: 'fibController',
          controllerAs: 'ctrl',
          resolve: {
            fibValue: fib50
          }
        })
        .state('route4', {
          url: '/fib200',
          templateUrl: 'content.html',
          controller: 'fibController',
          controllerAs: 'ctrl',
          resolve: {
            fibValue: fib200
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

  function fib4 (fibService) {
    return fibService.calculateFib(4);
  }

  function fib10 (fibService) {
    return fibService.calculateFib(10);
  }

  function fib50 (fibService) {
    return fibService.calculateFib(50);
  }

  function fib200 (fibService) {
    return fibService.calculateFib(200);
  }

  function fibN (fibService, $stateParams) {
    return fibService.calculateFib($stateParams.num);
  }

})();