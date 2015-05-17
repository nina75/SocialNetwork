'use strict';

app.controller('MainController', function MainController($scope, $location, authentication) {
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
});