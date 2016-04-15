angular.module('taxApp').controller('discoverController', discoverController);

angular.$inject = ['$scope', 'geolocation']

function discoverController($scope, geolocation) {
	geolocation.getLocation().then(function(data){
     	$scope.mapData = {
     		lat:  data.coords.latitude, 
     		long: data.coords.longitude
     	};
    });
}