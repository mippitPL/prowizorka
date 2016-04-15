angular.module('taxApp').controller('createuserController', createuserController);

angular.$inject = ['$scope', 'geolocation', 'httpService']

function createuserController($scope, httpService) {
	$scope.newUser = {
		name:        '',
		description: ''
	}

	function resetCreateUserForm() {
		$scope.newUser = {
			name:        '',
			description: ''
		}
	}

	function submitCreateUser(user) {
		console.warn(user);
		httpService.createUser(user); // todo - change page or something like that
			// and add id to localstorage or sth
		// resetCreateUserForm();
	}

	$scope.submitCreateUser = submitCreateUser;
}
