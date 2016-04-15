angular.module('taxApp').controller('discoverController', discoverController);

angular.$inject = ['$scope', 'geolocation', '$rootScope', 'httpService'];

function discoverController($scope, geolocation, $rootScope, httpService) {
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
    	alert(perf.id);
    }
}