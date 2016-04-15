angular.module('taxApp').controller('discoverController', discoverController);

angular.$inject = ['$scope', 'geolocation'];

function discoverController($scope, geolocation) {
	geolocation.getLocation().then(function(data){
     	$scope.mapData = {
     		lat:  data.coords.latitude, 
     		long: data.coords.longitude,
     		performances: [
     			{
     				lat: "51.1077836",
     				long: "17.0777168"
     			}
     		]
     	};
    });
}