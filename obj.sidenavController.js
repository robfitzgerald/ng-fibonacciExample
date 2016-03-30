(function (){  
angular.module('objApp')
  .controller('sidenavCtrl', ['peopleFactory', sidenavCtrl]);

  function sidenavCtrl (peopleFactory) {
    tf = peopleFactory;
    var vm = this;
    this.objlist = tf.people;
  };
})();
