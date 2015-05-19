'use strict';

app.factory('posts', function($http, BASE_URL) {
    var service = {};

    var serviceUrl = BASE_URL + '/Posts';

    service.likePost = function(postId, headers, success, error) {
        $http.post(serviceUrl + '/' + postId + '/likes', null, {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.unlikePost = function(postId, headers, success, error) {
        $http.delete(serviceUrl + '/' + postId + '/likes', {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.commentPost = function(postId, commentData, headers, success, error) {
        $http.post(serviceUrl + '/' + postId + '/comments', commentData, {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    return service;
})