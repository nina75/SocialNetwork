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

            })

        return defer.promise;
    }

    service.login = function(loginData) {
        var defer = $q.defer();
        $http.post('http://softuni-social-network.azurewebsites.net/api/users/login', loginData)
            .success(function(data) {
                defer.resolve(data);
            }).error(function(error) {
                defer.reject(error);
            })

        return defer.promise;
    }

    service.logout = function() {
        var defer = $q.defer();
        var headers = {
            Authorization: 'Bearer ' + sessionStorage['accessToken']
        }
        $http.post('http://softuni-social-network.azurewebsites.net/api/users/logout', null, {headers: headers})
            .success(function(data) {
                defer.resolve(data);
            }).error(function(error){
                defer.reject(error);
            })

        return defer.promise;
    }

    //service.isLogged = function () {
    //    return sessionStorage['accessToken'];
    //};




    //service.login = function() {
    //    $http.post
    //}

    return service;
})