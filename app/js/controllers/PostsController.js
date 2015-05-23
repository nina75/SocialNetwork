'use strict';

app.controller('PostsController', function PostsController($scope, $location, posts, authentication, notifyService) {

    var headers = authentication.getHeaders();

    //home - like, unlike post
    var likeUnlikePost = function(post) {
        if(!post.liked) {
            posts.likePost(post.id, authentication.getHeaders(), function(data) {
                post.likesCount++;
                post.liked = true;

            }, function(error) {
                notifyService.showError(error.message);
            })
        } else {
            posts.unlikePost(post.id, authentication.getHeaders(), function(data) {
                post.likesCount--;
                post.liked = false;
            }, function(error) {
                notifyService.showError(error.message);
            })
        }
    }

    var getPostById = function(postId) {
        posts.getPostById(postId, headers, function(data) {
            //
        }, function(error) {
            notifyService.showError(error.message);
        })
    }

    var getPostLikes = function(postId) {
        posts.getPostLikes(postId, headers, function(data) {
            $scope.postLikesData = data;
            $scope.showLikes = true;
        }, function(error) {
            notifyService.showError(error.message);
        })
    }

    $scope.showLikes = false;
    $scope.likeUnlikePost = likeUnlikePost;
    $scope.getPostLikes = getPostLikes;
    $scope.hideLikes = function() {
        $scope.showLikes = false;
    }

})