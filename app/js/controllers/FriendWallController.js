'use strict';

app.controller('FriendWallController', function FriendWallController($scope, $location, $routeParams, authentication, friendsData) {

    var headers = authentication.getHeaders();
    var username = $routeParams.username;

    var getUserFullData = function(username) {
        friendsData.getUserFullData(headers, username, function(data) {
            $scope.userFullData = data;
        }, function(error) {
            alert('Error');
        })
    }

    var getUserPosts = function(username) {
        friendsData.getUserWall(headers, username, function(data) {
            $scope.userPostsData = data;
        }, function(error) {
            alert('Tz');
        })
    }

    var getFriendsDetailedFriendsList = function(username) {
        friendsData.getFriendsDetailedFriendsList(headers, username, function(data) {
            $scope.friendsDetailedList = data;
        }, function(error) {
            alert('Tz');
        })
    }

    getUserFullData(username);
    getUserPosts(username);
    getFriendsDetailedFriendsList(username);
});