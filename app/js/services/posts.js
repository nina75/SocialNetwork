'use strict';

app.factory('posts', function($http, BASE_URL) {
    var service = {};

    var serviceUrl = BASE_URL + '/Posts/';

    //like post
    service.likePost = function(postId, headers, success, error) {
        $http.post(serviceUrl + postId + '/likes', null, {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //unlike post
    service.unlikePost = function(postId, headers, success, error) {
        $http.delete(serviceUrl + postId + '/likes', {headers:headers})
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

    //add new post
    service.addNewPost = function(headers, postData, success, error) {
        $http.post(BASE_URL + '/posts', postData, {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //delete post by Id
    service.deletePost = function(postId, headers, success, error) {
        $http.delete(serviceUrl + '/' + postId, {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
        ;
    }

    //edit post by Id
    service.editPost = function(postId, postData, headers, success, error) {
        $http.put(serviceUrl + '/' + postId, postData, {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //get post likes
    service.getPostLikes = function(postId, headers, success, error) {
        $http.get(serviceUrl + '/' + postId + '/likes', {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    return service;
})