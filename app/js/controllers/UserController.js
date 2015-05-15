'use strict';

app.controller('UserController', function UserController($scope, $location, authentication){

    $scope.register = function(){
        authentication
            .register($scope.registerData)
            .then(function(data){
                sessionStorage['accessToken'] = data['access_token'];
                sessionStorage['username'] = data['userName'];
                $location.path('home');
                $scope.user = data['userName'];
                alert('Register successful');
            }, function(error) {
                alert('Register failed');
            })
    }

    $scope.login = function() {
        authentication
            .login($scope.loginData)
            .then(function(data) {
                sessionStorage['accessToken'] = data['access_token'];
                sessionStorage['username'] = data['userName'];
                $location.path('home');
                $scope.user = data['userName'];
                console.log($scope.user);

                alert('Login successful');
            }, function(error) {
                alert('Login failed');
            })
    }

    $scope.user = sessionStorage['username'];


    $scope.logout = function() {
        authentication
            .logout()
            .then(function(data){
                console.log($scope.user);
                clearSessionStorage();
                alert('Logout successful');
            })
    }

    function clearSessionStorage() {
        delete sessionStorage['accessToken'];
        delete sessionStorage['username'];
    }

});

