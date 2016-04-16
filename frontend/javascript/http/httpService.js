angular.module("taxApp").factory('httpService', ['$http', '$q', httpService]);

function httpService($http, $q) {
    var factory = {};
    var serverName = "http://hack4culture.cloudapp.net:3000";

    factory.getPerformances = function() {
        return $http.get(serverName + '/performances');
    }

    factory.getPerformance = function(id) {
        return $http.get(serverName + '/performances/'+id);
    }

    factory.createUser = function(user) {
        return $http.post(serverName + '/users', user);
    }

    factory.addPerformance = function(performance) {
        return $http.post(serverName + '/performances', performance);
    }

    factory.removePerformance = function(id) {
        return $http.delete(serverName + '/performances/' + id);
    }

    factory.toggleHeart = function(artist, user) {
        var data = {artist_id: artist, user_id: user};
        return $http.post(serverName + '/likes/toggle', data);
    }

    factory.isLiked = function(artist, user) {
        var data = {artist_id: artist, user_id: user};
        return $http.post(serverName + '/likes/is_liked', data);
    }

    factory.renewPerformance = function(performance) {
        return $http.post(serverName + '/renewPerformance', performance);
    }

    return factory;
}
