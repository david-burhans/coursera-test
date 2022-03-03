(function() {
'use strict';

var counterApp = angular.module('counterApp', []);

counterApp.controller('counterController', function($scope) {
  $scope.name = "";
  $scope.numericValue = 0;

  $scope.performCalculation = function() {
    var totalValue;

    totalValue = calculateNameValue($scope.name);

    $scope.numericValue = totalValue;
  };

  function calculateNameValue(stringValue) {
    var returnValue = 0;

    for (var index = 0; index < stringValue.length; index++) {
      returnValue += stringValue.charCodeAt(index);
    }

    return returnValue;
  };
});

})();
