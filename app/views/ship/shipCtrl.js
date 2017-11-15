angular.module('starships').controller('shipCtrl', function($scope, $stateParams) {
  $scope.id = $stateParams.id;
  $scope.ship = 'This is the ship with the id ' + $stateParams.id;
})