angular.module('starships', ['ui-router']).config(function($stateProvider, $urlRouteProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: 'This is the home state'
  }).state('ships', {
    url: '/ships',
    template: 'This is the ships state'
  })
})