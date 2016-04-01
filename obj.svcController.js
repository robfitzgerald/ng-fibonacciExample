(function (){
  angular.module('objApp')
    .controller('svcCtrl', ['$mdSidenav', 'selectedObj', svcCtrl]);

  function svcCtrl($mdSidenav, selectedObj) {
    var vm = this;
    
    vm.toggleRight = toggleRight;
    vm.objlist = [
      {
        first: 'Napoleon',
        last: 'Dynamite',
        skills: ['nunchucks', 'drawing', 'fighting bears'],
        background: 'blue'
      },
      {
        first: 'Vote For',
        last: 'Pedro',
        skills: ['Government', 'Big Air'],
        background: 'green'
      }
    ];
    
    function toggleRight(obj) {
      // notify the controller of the selected object
      selectedObj.setSelected(obj);
      $mdSidenav('right').toggle();
    };

  };
})();
