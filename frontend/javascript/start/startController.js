angular
	.module('taxApp')
	.controller('startController', startController);

startController.$inject = ['$scope', '$location', 'httpService'];

function startController($scope, $location, httpService) {
	if (localStorage.getItem("userId") != null) {
		console.log(localStorage.getItem("userId"));
		$location.url("/discover");
	}

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
			$location.path("addperformance");
		});
		// resetCreateUserForm();
	}

	function humanSubmit(user) {
		console.warn(user);
		httpService.createUser(user).then(function(data) {
			$scope.newUserId = data.data.id;
			localStorage.setItem("userId", $scope.newUserId);
			$location.path("discover");
		});
		// resetCreateUserForm();
	}

	$scope.submitCreateUser = submitCreateUser;
	$scope.humanSubmit = humanSubmit;
}
