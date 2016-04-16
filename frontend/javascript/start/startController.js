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
		if (user.name) {
			httpService.createUser(user).then(function(data) {
				$scope.newUserId = data.data.id;
				localStorage.setItem("userId", $scope.newUserId);
				$location.path("addperformance");
			});
		} else {
			$scope.notValid = true;
		}
		// resetCreateUserForm();
	}

	function humanSubmit(user) {
		console.warn(user);
		if (user.name) {
			httpService.createUser(user).then(function(data) {
				$scope.newUserId = data.data.id;
				localStorage.setItem("userId", $scope.newUserId);
				$location.path("discover");
			});
		} else {
			$scope.notValid = true;
		}
		// resetCreateUserForm();
	}

	$scope.submitCreateUser = submitCreateUser;
	$scope.humanSubmit = humanSubmit;
}
