angular
	.module('taxApp')
	.controller('startController', startController);

startController.$inject = ['$scope'];

function startController($scope) {
	console.log("working");
	$scope.chuj = "dupa";
}