(function (){  

// class definition
angular.module('objApp')
  .service ('Person', [Person]);
  
  function Person (first, last, skills, background){
    this.first = first;
    this.last = last;
    this.skills = skills;
    this.background = background;
  };

// factory definition
angular.module('objApp')
  .factory('peopleFactory', ['Person', peopleFactory]);
    
    //define object to be returned
    function peopleFactory(){
    var factory = {
      people: [],
      addPerson: addPerson,
      getPeople: getPeople
    };

    // initialize object with data 
    factory.people = 
      [{
        first: 'Napoleon',
        last: 'Dynamite',
        skills: ['nunchucks', 'drawing', 'fighting bears'],
        background: 'green'
      },
      {
        first: 'Vote For',
        last: 'Pedro',
        skills: ['Government', 'Big Air'],
        background: 'blue'
      }
    ];

    function addPerson (first, last, skills, background){
      var temp = new Person (first, last, skills, background);
      factory.people.push(temp);
    };

    function getPeople () {
      return factory.people;
    };

    return factory;
  };
})();
