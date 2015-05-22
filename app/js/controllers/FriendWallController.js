'use strict';

app.controller('FriendWallController', function FriendWallController($scope, $location, $routeParams, authentication, posts, userData, friendsData, notifyService) {

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
            notifyService.showError('Unsuccessful Connect To Database');
        })
    }

    var getUserPosts = function(username) {
        friendsData.getUserWall(headers, username, function(data) {
            $scope.userPostsData = data;
        }, function(error) {
            notifyService.showError('Unsuccessful Connect To Database');
        })
    }

    var getFriendsDetailedFriendsList = function(username) {
        friendsData.getFriendsDetailedFriendsList(headers, username, function(data) {
            $scope.friendsDetailedList = data;
        }, function(error) {
            notifyService.showError('Unsuccessful Connect To Database');
        })
    }

    var sendFriendRequest = function(username) {
        userData.sendFriendRequest(username, headers, function(data) {
            $scope.showInvite = false;
            $scope.showPendingRequest = true;
        }, function(error) {
            notifyService.showError('Unsuccessful Connect To Database');
        })
    }

    var addNewPost = function(username) {
        posts.addNewPost(headers, {postContent: $scope.postContent,username: username}, function(data) {
            getUserPosts(username);
        }, function(error) {
            notifyService.showError('Unsuccessful Connect To Database');
        })
    }

    $scope.sendFriendRequest = sendFriendRequest;
    $scope.addNewPost = addNewPost;

    getUserFullData(username);
    getUserPosts(username);
    getFriendsDetailedFriendsList(username);
});