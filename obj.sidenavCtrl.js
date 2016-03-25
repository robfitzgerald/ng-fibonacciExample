(function (){
  angular.module('objApp')
    .controller('sidenavCtrl', [sidenavCtrl]);

  function sidenavCtrl() {
    var vm = this;
    vm.hello = "string";   
    //need vm.someobject to hold what is passed from other controller
    //need to inject service into controller
  };
})();
