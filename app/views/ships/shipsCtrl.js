angular.module('starships').controller('shipsCtrl', function($scope, shipSrvc) {
  $scope.ships = shipSrvc.ships;
})