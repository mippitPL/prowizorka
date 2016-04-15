angular
	.module('taxApp', [
		'ngRoute',
		'mobile-angular-ui'
	])

	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
	     	.when('/start', {
	        	templateUrl: 'javascript/start/startView.html', 
	        	controller: 'startController'
	      	})
	}]); 
	 