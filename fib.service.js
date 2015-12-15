(function() {

  var UPPER_LIMIT = 100000;

  angular
    .module('fib.module')
    .factory('fibService', ['$q', fibService]);

  function fibService ($q) {
    var fibService = {};
    fibService.calculateFib = calculateFib;

    return fibService;

    /**
     * @description calculates the nth fibonacci number using a memoized recursive function
     * @param {Number} n a number from zero to UPPER_LIMIT
     * @returns {Number,Number} tuple containing the fibonacci number requested and the resulting fibonacci value
     * @example
     * // resolved promise returns {num: 8, nth: 5}
     * fibService.calculateFib(5).then(function(res) { console.log(res); });
     * @example
     * // will be rejected with the string 'fibService.calculateFib(-1) is invalid'
     * var promise = fibService.calculateFib(-1)
     */
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