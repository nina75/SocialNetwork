'use strict';

app.controller('AuthenticationController', function AuthenticationController($scope, $location, $routeParams, authentication, notifyService) {

    //initial page - register
    var register = function(registerForm) {
        if(registerForm.$valid) {
            authentication.register($scope.registerData, function(data) {
                authentication.setSessionStorage(data);
                $location.path('home');
            }, function(error) {
                notifyService.showError(error.message);
            })
        } else {
            notifyService.showError('Invalid data');
        }
    }

    //initial page - login
    var login = function(loginForm) {
        if(loginForm.$valid) {
            authentication.login($scope.loginData, function(data) {
                authentication.setSessionStorage(data);
                $location.path('home');
            }, function(error) {
                notifyService.showError('Invalid username or password');
            })
        } else {
            notifyService.showError('Invalid username or password');
        }

    }

    $scope.register = register;
    $scope.login = login;
});