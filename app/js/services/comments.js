'use strict';

app.factory('comments', function($http, BASE_URL) {
    var service = {};

    var serviceUrl = BASE_URL + '/posts/';

    //add comments to post
    service.commentPost = function(postId, commentData, headers, success, error) {
        $http.post(serviceUrl + postId + '/comments', commentData, {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //get post comments
    service.getPostComments = function(postId, headers, success, error) {
        $http.get(serviceUrl + postId +'/comments', {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    //delete post comment
    service.deleteComment = function(postId, commentId, headers, success, error) {
        $http.delete(serviceUrl + postId +'/comments/' + commentId, {headers: headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    return service;
})