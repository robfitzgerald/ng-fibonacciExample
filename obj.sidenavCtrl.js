(function (){
  angular.module('objApp')
    .controller('sidenavCtrl', [sidenavCtrl]);

  function sidenavCtrl() {
    var vm = this;
    vm.hello = "string";   

  };
})();
