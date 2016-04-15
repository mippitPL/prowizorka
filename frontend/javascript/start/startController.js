angular
	.module('taxApp')
	.controller('startController', startController);

startController.$inject = ['$scope'];

function startController($scope) {
	$scope.chuj = "chuj";
}