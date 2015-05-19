'use strict';

app.controller('AuthenticationController', function AuthenticationController($scope, $location, $routeParams, authentication) {

    //initial page - register
    var register = function() {
        authentication.register($scope.registerData, function() {
            authentication.setSessionStorage(data);
            $location.path('home');
        }, function(error) {
            alert('Register failed');
        })
    }

    //initial page - login
    var login = function() {
        authentication.login($scope.loginData, function(data) {
            authentication.setSessionStorage(data);
            $location.path('home');
        }, function(error) {
            alert('Login failed');
        })
    }

    $scope.register = register;
    $scope.login = login;
});