angular.module('taxApp').controller('discoverController', discoverController);

angular.$inject = ['$scope', 'geolocation', '$rootScope', 'httpService', '$location'];

function discoverController($scope, geolocation, $rootScope, httpService, $location) {
	$scope.performances = [];

	httpService.getPerformances().then(function(response) {
		$scope.performances = response.data;
	});

	geolocation.getLocation().then(function(data){
     	$scope.mapData = {
     		lat:  data.coords.latitude, 
     		long: data.coords.longitude,
     		performances: $scope.performances
     	};
    });

    $scope.showPerfModal = function (perf) {
		console.log(perf);
		$scope.$apply(function () {
			$location.path('performance/'+perf.id);
		});
    }
}