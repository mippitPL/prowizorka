angular.module('taxApp').controller('addperformanceController', addperformanceController);

angular.$inject = ['$scope', 'geolocation', 'httpService', '$location', '$rootScope']

function addperformanceController($scope, geolocation, httpService, $location, $rootScope) {
	if (localStorage.getItem("userId") == null) {
		$location.path("/start");
	}
	
	if (localStorage.getItem("currentPerformance") !== null) {
		$location.path("/performance/"+localStorage.getItem("currentPerformance"));
	}


	$rootScope.dataLoading = false;
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
		$scope.dataLoading = true;
		httpService.addPerformance(performance).then(function(data) {
			localStorage.setItem("currentPerformance", data.data.id);
			$location.path('performance/'+data.data.id);
		});
	}

	$scope.submitAddPerformance = submitAddPerformance;
}
