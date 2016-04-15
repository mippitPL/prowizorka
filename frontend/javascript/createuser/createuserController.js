angular.module('taxApp').controller('createuserController', createuserController);

angular.$inject = ['$scope', 'geolocation']

function createuserController($scope) {
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

		// resetCreateUserForm();
	}

	$scope.submitCreateUser = submitCreateUser;
}
