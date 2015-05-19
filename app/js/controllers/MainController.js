'use strict';

app.controller('MainController', function MainController($scope, $location, $route, authentication, posts) {
   
    var getUserProfile = function() {
        authentication.getUserProfile(function(data) {
            $scope.userData = data;
        }, function(error) {
            alert('Unsuccesful get user data');
        })
    }

    var getUserFriends = function() {
        authentication.getUserFriends(function(data) {
            $scope.friendsCount = data.length;
            $scope.friendsData = data;
        }, function(error) {
            console.log(error);
        })
    }

    var searchUser = function(term) {
        authentication.searchUser(term, function(data) {
            $scope.foundUsersCount = data.length;
            $scope.foundUsers = data;
            $scope.showFoundUsers = true;
        }, function(error) {
            console.log(error);
        })
    }

    var editProfile = function() {
        if($scope.profileImage) {
            $scope.userData.profileImageData = $scope.profileImage.base64;
        }
        if($scope.coverImage) {
            $scope.userData.coverImageData = $scope.coverImage.base64;
        }

        authentication.editProfile($scope.userData, function(data) {
            alert('Successful edit');
            $location.path('home');
        }, function(error) {
            alert('Edit unsuccessful');
        })
    }

    var changePassword = function() {
        authentication.changePassword($scope.userData, authentication.getHeaders(), function(data){
            authentication.clearSessionStorage();
            alert('Password changed');
            $location.path('login');
        }, function(error) {
            alert('Йок');
        })
    }

    var approveFriendRequest = function(requestId) {
        authentication.approveFriendRequest(requestId, function(data) {
            alert('Request accepted');
            $location.path('home');
        }, function(error) {
            alert('Jok');
        })
    }

    var rejectFriendRequest = function(requestId) {
        authentication.rejectFriendRequest(requestId, function(data) {
            alert('Request rejected');
            $route.reload();
        }, function(error) {
            alert('Jok');
        })
    }

    var getNewFeedPages = function() {
        authentication.getNewFeedPages(authentication.getHeaders(), function(postsData) {
            $scope.postsData = postsData;

        }, function(error) {
            alert('Йок');
        })

    }

    var getFriendsRequests = function() {
        authentication.getFriendsRequests(function(data){
            $scope.requestsCount = data.length;
            $scope.requestsData = data;
        }, function(error) {
            console.log(error);
        })
    }

    var hideFoundUsers = function() {
        $scope.showFoundUsers = false;
    }

    $scope.username = sessionStorage['username'];
    $scope.showFoundUsers = false;
    $scope.likeButtonText = $scope.liked ? 'Unlike' : 'Like';

    $scope.editProfile = editProfile;
    $scope.changePassword = changePassword;
    $scope.approveFriendRequest = approveFriendRequest;
    $scope.rejectFriendRequest = rejectFriendRequest;
    $scope.hideFoundUsers = hideFoundUsers;
    $scope.searchUser = searchUser;
    $scope.getUserProfile = getUserProfile;
    $scope.getUserFriends = getUserFriends;

    if ($scope.username) {
        getUserProfile();
        getUserFriends();
        getNewFeedPages();
        getFriendsRequests();
    }

});