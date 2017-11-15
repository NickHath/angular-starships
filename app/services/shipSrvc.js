angular.module('starships').service('shipSrvc', function($http) {
  this.getShips = function() { 
    return $http.get('https://swapi.co/api/starships/')
                .then(res => {
                  return res.data.results.map(ship => {
                    // modify ship object directly
                    let splitUrl = ship.url.split('/');
                    ship.id = splitUrl[splitUrl.length - 2];
                    return ship;
                  });
                });
  }

  this.getShip = function(id) {
    return $http.get('https://swapi.co/api/starships/' + id)
                .then(res => res.data);
  }
})
