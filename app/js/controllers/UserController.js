'use strict';

app.controller('UserController', function UserController($scope, authentication){
    $scope.register = function(){
        authentication
            .register($scope.registerData)
            .then(function(data){
                sessionStorage['accessToken'] = data['access_token'];
                sessionStorage['username'] = data['userName'];
                alert('Register success');
            }, function(error) {
                console.log(error);
            })
    }

});

