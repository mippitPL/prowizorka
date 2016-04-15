angular
    .module('taxApp')
    .controller('performanceController', performanceController);

performanceController.$inject = ['$scope' ,'$routeParams','httpService'];

function performanceController($scope, $routeParams, httpService) {
    $scope.performance = {};
    $scope.heartClicked = false;

    var id = $routeParams['id'];
    httpService.getPerformance(id).then(function(response) {
        $scope.performance = response.data;
    });

    $scope.heartClick = function() {
        $scope.heartClicked = $scope.heartClicked ? false : true;
        if($scope.heartClicked) {
            $scope.performance.likes++;
        } else {
            $scope.performance.likes--;
        }
    }
}