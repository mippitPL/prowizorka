angular
	.module('taxApp')
	.controller('startController', startController);

startController.$inject = ['$scope', '$location'];

function startController($scope, $location) {
	$scope.chuj = "dupa";
	if (localStorage.getItem("userId")) {
		$location.url("/discover");
	}
}
