angular
	.module("taxApp", [
		'ngRoute',
		'taxApp.start'
	]).config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when( '/start', {
				'redirectTo': "start/startView.html"
			})
			.otherwise({redirectTo: '/chuj'});
	}]);
