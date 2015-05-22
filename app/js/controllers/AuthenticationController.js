'use strict';

app.controller('AuthenticationController', function AuthenticationController($scope, $location, $routeParams, authentication, notifyService) {

    //initial page - register
    var register = function() {
        authentication.register($scope.registerData, function(data) {
            authentication.setSessionStorage(data);
            $location.path('home');
        }, function(error) {
            notifyService.showError('Unsuccessful Connect To Database');
        })
    }

    //initial page - login
    var login = function() {
        authentication.login($scope.loginData, function(data) {
            authentication.setSessionStorage(data);
            $location.path('home');
        }, function(error) {
            notifyService.showError('Unsuccessful Connect To Database');
        })
    }

    $scope.register = register;
    $scope.login = login;
});