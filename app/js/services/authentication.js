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

    service.logout = function(headers) {
        var defer = $q.defer();
        $http.post('http://softuni-social-network.azurewebsites.net/api/users/logout', null, {headers: headers})
            .success(function(data) {
                defer.resolve(data);
            }).error(function(error){
                defer.reject(error);
            })

        return defer.promise;
    }

    service.getUserProfile = function(success, error) {
        $http.get('http://softuni-social-network.azurewebsites.net/api/me', {headers: this.getHeaders()})
            .success(function(data){
                success(data);
            })
            .error(function(data){
                error(data);
            });
    }

    service.editProfile = function(userData, success, error) {
        $http.put('http://softuni-social-network.azurewebsites.net/api/me', userData, {headers: this.getHeaders()})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.setSessionStorage = function (serverData) {
        sessionStorage['accessToken'] = serverData.access_token;
        sessionStorage['username'] = serverData.userName;
    };

    service.clearSessionStorage = function () {
        delete sessionStorage['accessToken'];
        delete sessionStorage['username'];
    };

    service.getHeaders = function() {
        return {
            Authorization: "Bearer " + sessionStorage['accessToken']
        };
    }

    return service;
})