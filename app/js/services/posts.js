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

    //get post comments
    service.getPostComments = function() {
        $http.get('http://softuni-social-network.azurewebsites.net/api/posts/170/comments')
    }

    return service;
})