'use strict';

angular.module('nlpMusic.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {

}]);
