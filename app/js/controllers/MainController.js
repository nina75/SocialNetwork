'use strict';

app.controller('MainController', function MainController($scope, $location, $route, authentication, userData) {

    var headers = authentication.getHeaders();

    var getUserProfile = function() {
        userData.getUserProfile(headers, function(data) {
            $scope.userData = data;
        }, function(error) {
            alert('Unsuccesful get user data');
        })
    }

    var getUserFriends = function() {
        userData.getUserFriends(headers, function(data) {
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

        userData.editProfile(headers, $scope.userData, function(data) {
            alert('Successful edit');
            $location.path('home');
        }, function(error) {
            alert('Edit unsuccessful');
        })
    }

    var changePassword = function() {
        userData.changePassword($scope.userData, headers, function(data){
            authentication.clearSessionStorage();
            alert('Password changed');
            $location.path('login');
        }, function(error) {
            alert('Йок');
        })
    }

    var approveFriendRequest = function(requestId) {
        userData.approveFriendRequest(headers, requestId, function(data) {
            alert('Request accepted');
            getFriendsRequests();
            getUserFriendsPreview();
        }, function(error) {
            alert('Jok');
        })
    }

    var rejectFriendRequest = function(requestId) {
        userData.rejectFriendRequest(headers, requestId, function(data) {
            alert('Request rejected');
            getFriendsRequests();
            getUserFriendsPreview();
        }, function(error) {
            alert('Jok');
        })
    }

    var getNewFeedPages = function() {
        userData.getNewFeedPages(headers, function(postsData) {
            $scope.postsData = postsData;

        }, function(error) {
            alert('Йок');
        })

    }

    var getFriendsRequests = function() {
        userData.getFriendsRequests(headers, function(data){
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