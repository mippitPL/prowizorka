angular
	.module('taxApp', [
		'ngRoute',
		'geolocation',
		'mobile-angular-ui',
	])

	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
	     	.when('/start', {
	        	templateUrl: 'javascript/start/startView.html', 
	        	controller: 'startController'
	      	})	     	
	      	.when('/discover', {
	        	templateUrl: 'javascript/discover/discoverView.html',
	        	controller: 'discoverController'
	      	})
		.when('/test', {
				templateUrl: 'javascript/test/testView.html',
				controller: 'testController'
			})
	      	.when('/createuser', {
	        	templateUrl: 'javascript/createuser/createuserView.html', 
	        	controller: 'createuserController'
	      	})
	}]); 
	 
