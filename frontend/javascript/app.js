var app = angular.module('taxApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
 $routeProvider
      .when('/start', {
        templateUrl: 'javascript/start/startView.html', 
        controller: 'startController'
      })
}]); 
 