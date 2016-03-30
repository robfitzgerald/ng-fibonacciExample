angular.module('objApp')
  .controller('sidenavCtrl', ['testFactory', sidenavCtrl]);

  function sidenavCtrl (testFactory) {
    tf = testFactory;
    var vm = this;
    this.Data = tf.people;
  };