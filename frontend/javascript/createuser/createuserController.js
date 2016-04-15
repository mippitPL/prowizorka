angular.module('taxApp').controller('createuserController', createuserController);

angular.$inject = ['$scope', 'geolocation']

function createuserController($scope) {
	$scope.hello = "Hello World!";
}
