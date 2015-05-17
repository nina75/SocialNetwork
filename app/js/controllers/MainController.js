'use strict';

app.controller('MainController', function MainController($scope, $location, authentication) {

    $scope.username = sessionStorage['username'];

    if ($scope.username) {
        authentication.getUserProfile(function(data) {
            console.log(data);
            $scope.userData = data;
        }, function(error) {
            alert('Unsuccesful get user data');
        })
    }

    $scope.editProfile = function() {
        authentication.editProfile($scope.userData, function(data) {
            alert('Successful edit');
            $location.path('home');
        }, function(error) {
            alert('Edit unsuccessful');
        })
    }

});