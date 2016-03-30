(function (){

angular.module('objApp')
  .service ('Person', [Person]);
 
function Person (first, last, skills, background){
  this.first = first;
  this.last = last;
  this.skills = skills;
  this.background = background;
};

angular.module('objApp')
  .factory('testFactory', ['Person', testFactory]);

    function testFactory(){
    var factory = {
      people: [],
      addPerson: addPerson
    };

    function addPerson (first, last, skills, background){
      var temp = new Person (first, last, skills, background);
      factory.people.push(temp);
    };

    return factory;
  };
  
angular.module('objApp')
  .controller('svcCtrl', ['$mdSidenav', 'testFactory' ,svcCtrl]);

  function svcCtrl($mdSidenav, testFactory) {
    var vm = this;
    vm.toggleRight = toggleRight;

    skills = ['nunchucks', 'drawing', 'fighting bears'];
    skillstwo = ['Government', 'Big Air'];
    tf = testFactory;
    tf.addPerson('Napoleon', 'Dynamite', skills, 'blue');
    tf.addPerson( 'Vote For', 'Pedro', skillstwo, 'green');


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

    console.log(tf.people);
    console.log(objlist);
    if (angular.toJson(tf.people) == angular.toJson(objlist)) 
      console.log('EQUAL');
    else
      console.log('NOT EQUAL');

    vm.objlist = tf.people;
    
    function toggleRight() {
      $mdSidenav('right').toggle();
    };
  };



})();
