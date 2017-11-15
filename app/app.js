angular.module('starships', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
      url:'/',
      templateUrl:'app/views/home/home.html'
  }).state('ships', {
      url:'/ships',
      templateUrl: 'app/views/ships/ships.html',
      controller: 'shipsCtrl'
  }).state('ship', {
      url:'/ship/:id',
      templateUrl:'app/views/ship/ship.html',
      controller: 'shipCtrl'
  });
  $urlRouterProvider.otherwise('/');
});