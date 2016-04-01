(function (){
  angular.module('objApp')
    .controller('sidenavCtrl', ['$rootScope', 'selectedObj', sidenavCtrl]);

  function sidenavCtrl($rootScope, selectedObj) {
    var vm = this;
    vm.hello = "string";   
    vm.selected = ""; 

   $rootScope.$on('ObjectChanged', changeHandler);

    function changeHandler(event, args) {
      vm.selected = args;
    }
    //need vm.someobject to hold what is passed from other controller
    //need to inject service into controller
  };
})();
