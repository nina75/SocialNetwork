'use strict';

app.factory('authentication', function($http, BASE_URL) {
    var service = {};

    var serviceUrl = BASE_URL + '/users'

    //authentication
    service.register = function(registerData, success, error) {
        $http.post(serviceUrl + '/register', registerData)
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data)
            })
    }

    service.login = function(loginData, success, error) {
        $http.post(serviceUrl + '/login', loginData)
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.logout = function(success, error) {
        $http.post(serviceUrl + '/logout', null, {headers: this.getHeaders()})
            .success(function(data) {
                success(data);
            }).error(function(data){
                error(data);
            })
    }

    service.searchUser = function(searchTerm, success, error) {
        $http.get(serviceUrl + '/search?searchTerm=' + searchTerm, {headers: this.getHeaders()})
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