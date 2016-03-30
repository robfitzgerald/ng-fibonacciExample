(function (){  
angular.module('objApp')
  .controller('sidenavCtrl', ['peopleFactory', sidenavCtrl]);

  function sidenavCtrl (testFactory) {
    tf = testFactory;
    var vm = this;
    this.objlist = tf.people;
  };
})();
