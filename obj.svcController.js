(function (){  
angular.module('objApp')
  .controller('svcCtrl', ['$mdSidenav', 'peopleFactory' ,svcCtrl]);

  function svcCtrl($mdSidenav, peopleFactory) {
    var vm = this;
    vm.toggleRight = toggleRight;

    skills = ['nunchucks', 'drawing', 'fighting bears'];
    skillstwo = ['Government', 'Big Air'];
    pf = peopleFactory;

    var objlist = [
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

    console.log(pf.people);
    console.log(objlist);
    if (angular.toJson(pf.getPeople()) === angular.toJson(objlist)) 
      console.log('EQUAL');
    else
      console.log('NOT EQUAL');

    vm.objlist = pf.getPeople();
    
    function toggleRight() {
      $mdSidenav('right').toggle();
    };
  };
})();
