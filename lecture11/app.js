(function() {
'use strict';

var messageApp = angular.module('MessageApp', []);

messageApp.controller('MessageController', MessageController);

MessageController.$inject = ['$scope'];
function MessageController($scope) {
  $scope.choise = 'first';

  $scope.blamReaction = function () {
    if ($scope.choise === 'first')
      $scope.choise = 'second';
    else
      $scope.choise = 'first';
  };
}

})();
