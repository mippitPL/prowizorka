angular.module('taxApp').controller('addperformanceController', addperformanceController);

angular.$inject = ['$scope', 'geolocation']

function addperformanceController($scope, geolocation) {
	geolocation.getLocation().then(function(data){
		$scope.mapData = {
			lat:  data.coords.latitude, 
			long: data.coords.longitude,
		};
		console.warn($scope.mapData);
	});
	// $scope.newUser = {
	// 	name:        '',
	// 	description: ''
	// }

	// function resetCreateUserForm() {
	// 	$scope.newUser = {
	// 		name:        '',
	// 		description: ''
	// 	}
	// }

	// function submitCreateUser(user) {
	// 	console.warn(user);

	// 	// resetCreateUserForm();
	// }

	// $scope.submitCreateUser = submitCreateUser;
}
