'use strict';

app.controller('FriendWallController', function FriendWallController($scope, $location, $routeParams, authentication, posts, userData, friendsData) {

    var headers = authentication.getHeaders();
    var username = $routeParams.username;

    var getUserFullData = function(username) {
        friendsData.getUserFullData(headers, username, function(data) {
            if(!(data.isFriend || data.hasPendingRequest)) {
                $scope.showInvite = true;
            } else if(!data.isFriend && data.hasPendingRequest) {
                $scope.showPendingRequest = true;
            }
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

    var sendFriendRequest = function(username) {
        userData.sendFriendRequest(username, headers, function(data) {
            $scope.showInvite = false;
            $scope.showPendingRequest = true;
        }, function(error) {
            alert('Tz');
        })
    }

    var addNewPost = function(username) {
        posts.addNewPost(headers, {postContent: $scope.postContent,username: username}, function(data) {
            getUserPosts(username);
            alert('Stana');
        }, function(error) {
            alert('error');
        })
    }

    $scope.sendFriendRequest = sendFriendRequest;
    $scope.addNewPost = addNewPost;

    getUserFullData(username);
    getUserPosts(username);
    getFriendsDetailedFriendsList(username);
});