angular.module('taxApp').controller('createuserController', createuserController);

angular.$inject = ['$scope', 'geolocation', 'httpService']

function createuserController($scope, httpService) {
	$scope.newUserId = {}
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
		httpService.createUser(user).then(function(data) {
			$scope.newUserId = data.data.id;
			localStorage.setItem("userId", $scope.newUserId);
		});
		// resetCreateUserForm();
	}

	$scope.submitCreateUser = submitCreateUser;
}
