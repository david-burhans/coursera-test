// (function() {
// 'use strict';
//
// var diApp = angular.module('diApp', []);
//
// diApp.controller('diController', diController);
//
// diController.$inject = ['$scope', '$filter', '$injector'];
// function diController($scope, $filter, $injector) {
//   $scope.name = "Kapow";
//
//   $scope.toUpper = function(input) {
//     var uppercase = $filter('uppercase');
//
//     $scope.name = uppercase(input);
//   }
//
//   function annotateMe(name, job, blan) {
//     return "Bladgh";
//   }
//
//   console.log($injector.annotate(diController));
// }
//
// })();
(function(){'use strict';var diApp=angular.module('diApp',[]);diApp.controller('diController',diController);diController.$inject=['$scope','$filter','$injector'];function diController($scope,$filter,$injector){$scope.name="Kapow";$scope.toUpper=function(input){var uppercase=$filter('uppercase');$scope.name=uppercase(input)}
function annotateMe(name,job,blan){return"Bladgh"}
console.log($injector.annotate(diController))}})()
