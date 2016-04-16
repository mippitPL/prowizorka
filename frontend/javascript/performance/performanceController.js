angular
    .module('taxApp')
    .controller('performanceController', performanceController);

performanceController.$inject = ['$scope' ,'$routeParams','httpService'];

function performanceController($scope, $routeParams, httpService) {
    if (localStorage.getItem("userId") == null) {
        $location.path("/start");
    }

    
    $scope.performance = {};
    $scope.currentUser = localStorage.getItem('userId');
    $scope.heartClicked = false;

    var id = $routeParams['id'];
    httpService.getPerformance(id).then(function(response) {
        $scope.performance = response.data;

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
            $scope.performance.likes++;
        } else {
            $scope.performance.likes--;
        }
    }

    $scope.renewPerformance = function(performance) {
        httpService.renewPerformance(performance).then(function () {
            // location.path("performance")
        })
    }

    $scope.removePerformance = function(performance) {
        httpService.removePerformance(performance).then(function () {
            location.path("addperformance");
        })
    }
}