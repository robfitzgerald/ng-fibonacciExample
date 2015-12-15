(function() {

  angular
    .module('fib.module')
    .controller('fibController', ['fibValue', routeController]);

  function routeController (fibValue) {
    var vm = this;
    vm.num = fibValue.num;
    vm.nth = fibValue.nth;
  };

})();