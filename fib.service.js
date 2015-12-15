(function() {

  var UPPER_LIMIT = 100000;

  angular
    .module('fib.module')
    .factory('fibService', ['$q', fibService]);

  function fibService ($q) {
    var fibService = {};
    fibService.calculateFib = calculateFib;

    return fibService;


    function calculateFib(n) {
      var deferred = $q.defer();
      n = Number(n);
      if (n >= 0 && n < UPPER_LIMIT) {
        deferred.resolve({
          num: fibonacci(n),
          nth: n
        });
      } else {
        console.log('fibService.calculateFib(' + n + ') is invalid');
        deferred.reject('fibService.calculateFib(' + n + ') is invalid');
      }
      return deferred.promise;
    };

  };

  function fibonacci(n) {
    var memo = {};
    return _fibonacci(n);

    function memoize(n, val) {
      var index = 'fib' + n;
      memo[index] = val;
      return val;
    }

    function _fibonacci(n) {
      var memoIndex = 'fib' + n;
      if (memo.hasOwnProperty(memoIndex)) {
        return memo[memoIndex];
      }
      if (n == 0 || n == 1) {
        return 1;
      }
      return memoize(n, (_fibonacci(n - 1) + _fibonacci(n - 2)));
    }
  }

})();