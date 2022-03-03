(function() {
'use strict';

var myFirstApp = angular.module('myFirstApp', []);

myFirstApp.controller('myFirstController', function($scope) {
  $scope.name = "Burhans";
  $scope.sayHello = function() {
    return "hello " + $scope.name;
  }
});

})();
