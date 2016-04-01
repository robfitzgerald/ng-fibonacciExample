(function (){
  angular.module('objApp')
    .factory('selectedObj', ['$rootScope', selectedObj]);
  // selectedObj service notifies registered listeners that an object
  // was selected on the main table
  function selectedObj($rootScope) {
    var s = {
      setSelected: setSelected
    };

    return s;

    // $rootScope.$emit only sends to registered listeners
    // unlike $scope.$emit, which sends upwards to all parents
    function setSelected(obj) {
      $rootScope.$emit('ObjectChanged', obj);
    }
  }

})();
