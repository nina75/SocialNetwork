'use strict';

app.factory('posts', function($http, BASE_URL) {
    var service = {};

    var serviceUrl = BASE_URL + '/Posts';

    //like post
    service.likePost = function(postId, headers, success, error) {
        $http.post(serviceUrl + '/' + postId + '/likes', null, {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //unlike post
    service.unlikePost = function(postId, headers, success, error) {
        $http.delete(serviceUrl + '/' + postId + '/likes', {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //add comments to post
    service.commentPost = function(postId, commentData, headers, success, error) {
        $http.post(BASE_URL + '/posts/' + postId + '/comments', commentData, {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //get post by id
    service.getPostById = function(postId, headers, success, error) {
        $http.get(serviceUrl + '/' + postId, {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    return service;
})