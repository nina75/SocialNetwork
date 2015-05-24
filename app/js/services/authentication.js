'use strict';

app.factory('authentication', function($http, BASE_URL) {
    var service = {};

    var serviceUrl = BASE_URL + '/users/'

    //user register
    service.register = function(registerData, success, error) {
        $http.post(serviceUrl + 'register', registerData)
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data)
            })
    }

    //user login
    service.login = function(loginData, success, error) {
        $http.post(serviceUrl + 'login', loginData)
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //user logout
    service.logout = function(success, error) {
        $http.post(serviceUrl + 'logout', null, {headers: this.getHeaders()})
            .success(function(data) {
                success(data);
            }).error(function(data){
                error(data);
            })
    }

    //search user by name
    service.searchUser = function(searchTerm, success, error) {
        $http.get(serviceUrl + 'search?searchTerm=' + searchTerm, {headers: this.getHeaders()})
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

    service.isLogged = function () {
        return sessionStorage['accessToken'];
    };

    return service;
})