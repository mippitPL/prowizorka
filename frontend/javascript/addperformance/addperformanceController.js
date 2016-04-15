angular.module('taxApp').controller('addperformanceController', addperformanceController);

angular.$inject = ['$scope', 'geolocation']

function addperformanceController($scope, geolocation) {
	$scope.newPerformance = {
		short_description: ''
	}

	geolocation.getLocation().then(function(data){
		$scope.mapData = {
			lat:  data.coords.latitude, 
			long: data.coords.longitude,
		};
		console.warn($scope.mapData);
	});

	function submitAddPerformance(performance) {
		console.warn(performance);
	}

	$scope.submitAddPerformance = submitAddPerformance;
}
