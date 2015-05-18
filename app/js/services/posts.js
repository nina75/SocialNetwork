'use strict';

app.factory('posts', function($http) {
    var service = {};

    service.getNewFeedPages = function(headers, success, error) {
        $http.get('http://softuni-social-network.azurewebsites.net/api/me/feed?StartPostId=&PageSize=5', {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.likePost = function(postId, headers, success, error) {
        $http.post('http://softuni-social-network.azurewebsites.net/api/Posts/' + postId + '/likes', null, {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.unlikePost = function(postId, headers, success, error) {
        $http.delete('http://softuni-social-network.azurewebsites.net/api/Posts/' + postId + '/likes', {headers:headers})
            .success(function(data) {
                success(data);
            }).error(function(data) {
                error(data);
            })
    }

    service.commentPost = function(postId, headers, success, error) {
        
    }

    return service;

})