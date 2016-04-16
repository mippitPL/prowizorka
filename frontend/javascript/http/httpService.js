angular.module("taxApp").factory('httpService', ['$http', '$q', httpService]);

function httpService($http, $q) {
    var factory = {};

    factory.getPerformances = function() {
        return $http.get('http://192.168.47.42:3000/performances');
    }

    factory.getPerformance = function(id) {
        return $http.get('http://192.168.47.42:3000/performances/'+id);
    }

    factory.createUser = function(user) {
        return $http.post('http://192.168.47.42:3000/users', user);
    }

    factory.addPerformance = function(performance) {
        return $http.post('http://192.168.47.42:3000/performances', performance);
    }

    factory.removePerformance = function(performance) {
        return $http.post('http://192.168.47.42:3000/removePerformance', performance);
    }

    factory.renewPerformance = function(performance) {
        return $http.post('http://192.168.47.42:3000/renewPerformance', performance);
    }

    return factory;
}