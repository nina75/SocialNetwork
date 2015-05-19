'use strict';

app.controller('AuthenticationController', function AuthenticationController($scope, $location, $routeParams, authentication) {

    var register = function() {
        authentication.register($scope.registerData, function() {
            authentication.setSessionStorage(data);
            $location.path('home');
        }, function(error) {
            alert('Register failed');
        })
    }

    var login = function() {
        authentication.login($scope.loginData, function(data) {
            authentication.setSessionStorage(data);
            $location.path('home');
        }, function(error) {
            alert('Login failed');
        })
    }

    var logout = function() {
        authentication.logout(function (data) {
            authentication.clearSessionStorage();
            alert('Logout successful');
        }, function (error) {
            console.log(error);
        })
    }

    $scope.register = register;
    $scope.login = login;
    $scope.logout = logout;

});