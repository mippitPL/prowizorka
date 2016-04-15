angular.module('taxApp').controller('addperformanceController', addperformanceController);

angular.$inject = ['$scope', 'geolocation']

function addperformanceController($scope, geolocation) {
	$scope.newPerformance = {
		short_description: '',
		location_lat:      null,
		location_long:     null,
	}

	geolocation.getLocation().then(function(data){
		$scope.newPerformance.location_lat  = String(data.coords.latitude);
		$scope.newPerformance.location_long = String(data.coords.longitude);

		$scope.mapData = {
			lat:  data.coords.latitude,
			long: data.coords.longitude,
		};
	});

	function submitAddPerformance(performance) {
		console.warn(performance);
	}

	$scope.submitAddPerformance = submitAddPerformance;
}
