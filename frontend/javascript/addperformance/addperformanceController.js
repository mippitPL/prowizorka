angular.module('taxApp').controller('addperformanceController', addperformanceController);

angular.$inject = ['$scope', 'geolocation', 'httpService']

function addperformanceController($scope, geolocation, httpService) {
	$scope.newPerformance = {
		short_description: '',
		location_lat:      null,
		location_long:     null,
		image: 			   null,
		user_id: localStorage.getItem('userId') 	
	}

    $scope.uploadFile = function(event){
        var files = event.target.files;
    };


	geolocation.getLocation().then(function(data){
		$scope.newPerformance.location_lat  = String(data.coords.latitude);
		$scope.newPerformance.location_long = String(data.coords.longitude);

		$scope.mapData = {
			lat:  data.coords.latitude,
			long: data.coords.longitude,
		};
	});

	function submitAddPerformance(performance) {
		httpService.addPerformance(performance);
	}

	$scope.submitAddPerformance = submitAddPerformance;
}
