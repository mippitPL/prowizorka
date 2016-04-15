angular.module("taxApp").factory('httpService', ['$http', '$q', httpService]);

function httpService($http, $q) {
    var factory = {};

    factory.getPerformances = function() {
        return $http.get('http://192.168.47.42:3000/performances');
    }

    return factory;
}