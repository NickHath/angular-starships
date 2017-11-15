angular.module('starships').service('shipSrvc', function($http) {
  // this.ships = ['Millenium Falcon', 'Death Star', 'X-Fighter'];
  this.getShips = function() { 
    return $http.get('https://swapi.co/api/starships/');
  }
})