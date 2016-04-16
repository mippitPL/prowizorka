angular
    .module('taxApp')
    .controller('performanceController', performanceController);

performanceController.$inject = ['$scope' ,'$routeParams','httpService', "$location"];

function performanceController($scope, $routeParams, httpService, $location) {
    if (localStorage.getItem("userId") == null) {
        $location.path("/start");
    }

    $scope.activeTab = 1;

    $scope.performance = {};
    $scope.currentUser = localStorage.getItem('userId');
    $scope.heartClicked = false;

    var id = $routeParams['id'];
    httpService.getPerformance(id).then(function(response) {
        $scope.performance = response.data;
        $scope.mapData = {
            lat: $scope.performance.lat,
            long: $scope.performance.long
        }

        httpService.isLiked($scope.performance.user_id,  $scope.currentUser).then(function(data) {
            console.log(data);
            console.log(data.data);
            console.log(data.data.status);
            $scope.heartClicked = data.data.status;

        })
    });

    // newR = currentR + (255 - currentR) * tint_factor
    // newG = currentG + (255 - currentG) * tint_factor
    // newB = currentB + (255 - currentB) * tint_factor

    $scope.getColor = function (colors) {
        var tint_factor = 0.1;
        var newColors = [];
        newColors[0] = colors[0] + (255 - colors[0]) * tint_factor;
        newColors[1] = colors[1] + (255 - colors[1]) * tint_factor;
        newColors[2] = colors[2] + (255 - colors[2]) * tint_factor;
        console.log(newColors);
        return 'rgb('+newColors[0]+','+newColors[1]+','+newColors[2]+')';
    };

    $scope.heartClick = function() {
        $scope.heartClicked = $scope.heartClicked ? false : true;
        if($scope.heartClicked) {
            httpService.toggleHeart($scope.performance.user_id,  $scope.currentUser).then(function() {
                $scope.performance.likes++;
            })
        } else {
            httpService.toggleHeart($scope.performance.user_id,  $scope.currentUser).then(function() {
                $scope.performance.likes--;
            })
        }
    }

    $scope.renewPerformance = function(performance) {
        httpService.renewPerformance(performance).then(function () {
            // location.path("performance")
        })
    }

    $scope.removePerformance = function(performance) {
        httpService.removePerformance(performance).then(function () {
            localStorage.setItem("currentPerformance", null);
            location.path("addperformance");
        })
    }
}
