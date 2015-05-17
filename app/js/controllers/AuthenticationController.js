'use strict';

app.controller('AuthenticationController', function AuthenticationController($scope, $location, $routeParams, authentication) {
    var headers = {
        Authorization: "Bearer " + sessionStorage['accessToken']
    }
    
    $scope.username = sessionStorage['username'];

    $scope.register = function(){
        authentication
            .register($scope.registerData)
            .then(function(data){
                authentication.setSessionStorage(data);
                $location.path('home');
            }, function(error) {
                alert('Register failed');
            })
    }

    $scope.login = function() {
        authentication
            .login($scope.loginData)
            .then(function(data) {
                authentication.setSessionStorage(data);
                $location.path('home');
            }, function(error) {
                alert('Login failed');
            })
    }

    $scope.logout = function() {
        authentication
            .logout(headers)
            .then(function(data){
                authentication.clearSessionStorage();
                alert('Logout successful');
            }, function(error) {
                console.log(error);
            })
    }


    



    //$scope.editProfile($scope.userData, function(data) {
    //    console.log(data);
    //}, function(error) {
    //    console.log(error);
    //})

});

