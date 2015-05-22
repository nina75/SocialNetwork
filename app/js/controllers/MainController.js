'use strict';

app.controller('MainController', function MainController($scope, $location, $route, authentication, userData, posts, notifyService) {

    var headers = authentication.getHeaders();

    //header - picture and name
    var getUserProfile = function() {
        userData.getUserProfile(headers, function(data) {
            $scope.userData = data;
            console.log(data.profileImageData);
            $scope.myProfileImage = data.profileImageData;
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!")
        })
    }

    //header - new feeds
    var getNewFeedPages = function() {
        userData.getNewFeedPages(headers, function(postsData) {
            $scope.postsData = postsData;

        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!")
        })

    }

    //header - friend requests
    var getFriendsRequests = function() {
        userData.getFriendsRequests(headers, function(data){
            $scope.requestsCount = data.length;
            $scope.showRequestsCount = $scope.requestsCount > 0 ? true : false;
            $scope.requestsData = data;
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!")
        })
    }
    console.log($scope.requestsCount);


    var approveFriendRequest = function(requestId) {
        userData.approveFriendRequest(headers, requestId, function(data) {
            alert('Request accepted');
            getFriendsRequests();
            getOwnFriendsPreview();
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!")
        })
    }

    var rejectFriendRequest = function(requestId) {
        userData.rejectFriendRequest(headers, requestId, function(data) {
            notifyService.showInfo("Request accepted")
            getFriendsRequests();
            getOwnFriendsPreview();
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }

    //header - edit profile
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
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }

    //header - change profile password
    var changePassword = function() {
        userData.changePassword($scope.userData, headers, function(data){
            authentication.clearSessionStorage();
            notifyService.showInfo("Password changed!")
            $location.path('login');
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!")
        })
    }

    //header - search users
    var searchUser = function(term) {
        authentication.searchUser(term, function(data) {
            $scope.foundUsersCount = data.length;
            $scope.foundUsers = data;
            $scope.showFoundUsers = true;
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }

    //header - logout
    var logout = function() {
        authentication.logout(function (data) {
            authentication.clearSessionStorage();
            notifyService.showInfo("Successfully logout")
        }, function (error) {
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }

    var hideFoundUsers = function() {
        $scope.showFoundUsers = false;
    }

    //home section - friends
    var getOwnFriendsPreview = function() {
        userData.getOwnFriendsPreview(headers, function(data) {
            $scope.friendsPreviewData = data;
            $scope.friendsCount = data.totalCount;
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }

    //delete post
    var deletePost = function(postId) {
        posts.deletePost(postId, headers, function(data) {
            notifyService.showInfo("Post deleted");
            getNewFeedPages();
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }
    
    //edit post
    var editPost = function(postId, postContent) {
        posts.editPost(postId, {postContent: postContent}, headers, function(data) {
            notifyService.showInfo("Successful edit post");
            getNewFeedPages();
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }

    $scope.username = sessionStorage['username'];
    $scope.showFoundUsers = false;
    $scope.likeButtonText = $scope.liked ? 'Unlike' : 'Like';

    $scope.getUserProfile = getUserProfile;
    $scope.approveFriendRequest = approveFriendRequest;
    $scope.rejectFriendRequest = rejectFriendRequest;
    $scope.editProfile = editProfile;
    $scope.changePassword = changePassword;
    $scope.logout = logout;
    $scope.searchUser = searchUser;
    $scope.hideFoundUsers = hideFoundUsers;
    $scope.deletePost = deletePost;
    $scope.editPost = editPost;

    if ($scope.username) {
        getUserProfile();
        getOwnFriendsPreview();
        getNewFeedPages();
        getFriendsRequests();
    }


});