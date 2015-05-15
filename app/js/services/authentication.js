'use strict';

app.factory('authentication', function($http, $q) {
    var service = {};

    service.register = function(registerData) {
        var defer = $q.defer();
        $http.post('http://softuni-social-network.azurewebsites.net/api/users/register', registerData)
            .success(function(data, status, headers, config) {
                defer.resolve(data);
            }).error(function(error) {
                defer.reject(error);
                alert('Register failed');
            })

        return defer.promise;
    }

    service.login = function(loginData) {
        var defer = $q.defer();
        $http.post('http://softuni-social-network.azurewebsites.net/api/users/register', loginData)
            .success(function(data) {
                defer.resolve(data);
            }).error(function(error) {
                console.log('greshkaaaaaaa');
                defer.reject(error);
            })

        return defer.promise;
    }



    //service.login = function() {
    //    $http.post
    //}

    return service;
})