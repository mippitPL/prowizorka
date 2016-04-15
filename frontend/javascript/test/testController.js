angular
	.module('taxApp')
	.controller('testController', testController);

testController.$inject = ['$scope','httpService'];

function testController($scope, httpService) {
	console.log("working");
	$scope.chuj = localStorage.getItem("userId");
	// httpService.getPerformances().then(function(data) { console.log(data)});
}