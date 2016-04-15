angular
    .module('taxApp')
    .controller('performanceController', performanceController);

performanceController.$inject = ['$scope' ,'$routeParams','httpService'];

function performanceController($scope, $routeParams, httpService) {
    $scope.performance = {};
    var id = $routeParams['id'];
    httpService.getPerformance(id).then(function(response) {
        $scope.performance = response.data;
    });
}