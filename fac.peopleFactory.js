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
  .factory('peopleFactory', ['Person', peopleFactory]);

    function peopleFactory(){
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
})();
