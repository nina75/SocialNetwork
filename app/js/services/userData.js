'use strict';

app.factory('userData', function($http, BASE_URL) {
    var service = {};

    var serviceUrl = BASE_URL + '/me'

    //get data about me
    service.getUserProfile = function(headers, success, error) {
        $http.get(serviceUrl, {headers: headers})
            .success(function(data){
                success(data);
            })
            .error(function(data){
                error(data);
            });
    }

    //get new feeds page
    service.getNewFeedPages = function(headers, success, error) {
        $http.get(serviceUrl + '/feed?StartPostId=&PageSize=5', {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //get friend requests
    service.getFriendsRequests = function(headers, success, error) {
        $http.get(serviceUrl + '/requests', {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //approve friend request
    service.approveFriendRequest = function(headers, requestId, success, error) {
        $http.put(serviceUrl + '/requests/' +requestId+ '?status=approved', null, {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //reject friend request
    service.rejectFriendRequest = function(headers, requestId, success, error) {
        $http.put(serviceUrl + '/requests/' + requestId + '?status=rejected', null, {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //edit profile
    service.editProfile = function(headers, userData, success, error) {
        $http.put(serviceUrl, userData, {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //change profile password
    service.changePassword = function(userData, headers, success, error) {
        $http.put(serviceUrl + '/changepassword', userData, {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //get own friends
    service.getUserFriends = function(headers, success, error) {
        $http.get(serviceUrl + '/friends', {headers: headers})
            .success(function(data){
                success(data);
            })
            .error(function(data){
                error(data);
            });
    }

    //send friend request
    service.sendFriendRequest = function(userData, headers, success, error) {
        $http.post(serviceUrl + '/requests/' + userData, null, {headers:headers})
            .success(function(data){
                success(data);
            })
            .error(function(data){
                error(data);
            });
    }

    return service;
})
