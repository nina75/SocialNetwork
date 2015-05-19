'use strict';

app.factory('authentication', function($http, BASE_URL) {
    var service = {};

    //authentication
    service.register = function(registerData, success, error) {
        $http.post(BASE_URL + '/users/register', registerData)
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data)
            })
    }

    service.login = function(loginData, success, error) {
        $http.post(BASE_URL + '/users/login', loginData)
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.logout = function(headers, success, error) {
        $http.post(BASE_URL + '/users/logout', null, {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data){
                error(data);
            })
    }

    service.searchUser = function(searchTerm, success, error) {
        $http.get(BASE_URL + '/users/search?searchTerm=' + searchTerm, {headers: this.getHeaders()})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }


    //data about me
    service.changePassword = function(userData, headers, success, error) {
        $http.put(BASE_URL + '/me/changepassword', userData, {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.getUserProfile = function(success, error) {
        $http.get(BASE_URL + '/me', {headers: this.getHeaders()})
            .success(function(data){
                success(data);
            })
            .error(function(data){
                error(data);
            });
    }

    service.getUserFriends = function(success, error) {
        $http.get(BASE_URL + '/me/friends', {headers: this.getHeaders()})
            .success(function(data){
                success(data);
            })
            .error(function(data){
                error(data);
            });
    }

    service.editProfile = function(userData, success, error) {
        $http.put(BASE_URL + '/me', userData, {headers: this.getHeaders()})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.getFriendsRequests = function(success, error) {
        $http.get(BASE_URL + '/me/requests', {headers:this.getHeaders()})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.approveFriendRequest = function(requestId, success, error) {
        $http.put(BASE_URL + '/me/requests/' +requestId+ '?status=approved', null, {headers:this.getHeaders()})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.rejectFriendRequest = function(requestId, success, error) {
        $http.put(BASE_URL + '/me/requests/' + requestId + '?status=rejected', null, {headers:this.getHeaders()})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.getNewFeedPages = function(headers, success, error) {
        $http.get(BASE_URL + '/me/feed?StartPostId=&PageSize=5', {headers:headers})
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