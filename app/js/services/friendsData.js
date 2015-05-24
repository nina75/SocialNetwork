'use strict';

app.factory('friendsData', function($http, BASE_URL) {
    var service = {};

    var serviceUrl = BASE_URL + '/users/'

    //get friend wall by page
    service.getUserWall = function(headers, username, success, error) {
        $http.get(serviceUrl + username + '/wall?StartPostId=&PageSize=10', {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //get user full data
    service.getUserFullData = function(headers, username, success, error) {
        $http.get(serviceUrl + username, {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //get friend's detailed friends list
    service.getFriendsDetailedFriendsList = function(headers, username, success, error) {
        $http.get(serviceUrl + username + '/friends', {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    return service;
})
