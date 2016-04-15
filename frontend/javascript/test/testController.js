angular
	.module('taxApp')
	.controller('testController', testController);

testController.$inject = ['$scope','httpService'];

function testController($scope, httpService) {
	console.log("working");
	$scope.chuj = "dupa";
	httpService.getPerformances().then(function(data) { console.log(data)});
}