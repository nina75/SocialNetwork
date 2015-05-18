'use strict';

app.controller('MainController', function MainController($scope, $location, authentication, posts) {
    var headers = {
        Authorization: "Bearer " + sessionStorage['accessToken']
    }
    $scope.username = sessionStorage['username'];

    if ($scope.username) {
        authentication.getUserProfile(function(data) {
            //console.log(data);
            $scope.userData = data;
        }, function(error) {
            alert('Unsuccesful get user data');
        })

        posts.getNewFeedPages(headers, function(postsData) {
            $scope.postsData = postsData;
            
        }, function(error) {
            alert('Йок');
        })
    }

    $scope.editProfile = function() {
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

    $scope.changePassword = function() {
        authentication.changePassword($scope.userData, headers, function(data){
            authentication.clearSessionStorage();
            alert('Password changed');
            $location.path('login');
        }, function(error) {
            alert('Йок');
        })
    }
    

    $scope.likeButtonText = $scope.liked ? 'Unlike' : 'Like';
    
});