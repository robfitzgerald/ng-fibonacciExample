(function (){
  angular.module('objApp')
    .controller('svcCtrl', ['$mdSidenav', svcCtrl]);

  function svcCtrl($mdSidenav) {
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
    
    function toggleRight() {
      $mdSidenav('right').toggle();
    };

  };
})();
