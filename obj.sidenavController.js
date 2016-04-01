(function (){  
angular.module('objApp')
  .controller('sidenavCtrl', ['peopleFactory', sidenavCtrl]);

  function sidenavCtrl (peopleFactory) {
    pf = peopleFactory;
    var vm = this;
    this.objlist = pf.getPeople();
  };
})();
