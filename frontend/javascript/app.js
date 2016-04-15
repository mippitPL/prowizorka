myapp = angular
	.module('taxApp', [
		'ngRoute',
		'geolocation',
		'mobile-angular-ui',
		'angularMoment'
	])
	.run(function(amMoment) {
		amMoment.changeLocale('pl');
	})

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
		.when('/performance/:id', {
			templateUrl: 'javascript/performance/performanceView.html',
			controller: 'performanceController'
		})
	      	.when('/addperformance', {
	        	templateUrl: 'javascript/addperformance/addperformanceView.html', 
	        	controller: 'addperformanceController'
	      	})
	}]);
