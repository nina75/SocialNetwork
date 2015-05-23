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
            notifyService.showError(error.message);
        })
    }

    var getUserPosts = function(username) {
        friendsData.getUserWall(headers, username, function(data) {
            $scope.userPostsData = data;
        }, function(error) {
            notifyService.showError(error.message);
        })
    }

    var getFriendsDetailedFriendsList = function(username) {
        friendsData.getFriendsDetailedFriendsList(headers, username, function(data) {
            $scope.friendsDetailedList = data;
        }, function(error) {
            //notifyService.showError('To view page send FRIEND REQUEST');
        })
    }

    var sendFriendRequest = function(username) {
        userData.sendFriendRequest(username, headers, function(data) {
            $scope.showInvite = false;
            $scope.showPendingRequest = true;
        }, function(error) {
            notifyService.showError(error.message);
        })
    }

    var addNewPost = function(username) {
        posts.addNewPost(headers, {postContent: $scope.postContent,username: username}, function(data) {
            //notifyService.showInfo('Post added successful');
            getUserPosts(username);
        }, function(error) {
            notifyService.showError(error.message);
        })
    }

    var deleteOwnPost = function(postId, username) {
        posts.deletePost(postId, headers, function(data) {
            //notifyService.showInfo("Post deleted");
            getUserPosts(username);
        }, function(error) {
            notifyService.showError(error.message);
        })
    }

    $scope.sendFriendRequest = sendFriendRequest;
    $scope.addNewPost = addNewPost;
    $scope.deleteOwnPost = deleteOwnPost;

    getUserFullData(username);
    getUserPosts(username);
    getFriendsDetailedFriendsList(username);
});