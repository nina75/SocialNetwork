'use strict';

app.controller('PostsController', function PostsController($scope, $location,posts, authentication, notifyService) {

    var headers = authentication.getHeaders();

    //home - like, unlike post
    var likeUnlikePost = function(post) {
        if(!post.liked) {
            posts.likePost(post.id, authentication.getHeaders(), function(data) {
                post.likesCount++;
                post.liked = true;

            }, function(error) {
                notifyService.showError("Unsuccessful Connection to Database!");
            })
        } else {
            posts.unlikePost(post.id, authentication.getHeaders(), function(data) {
                post.likesCount--;
                post.liked = false;
            }, function(error) {
                notifyService.showError("Unsuccessful Connection to Database!");
            })
        }
    }

    var getPostById = function(postId) {
        posts.getPostById(postId, headers, function(data) {

        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }

    $scope.likeUnlikePost = likeUnlikePost;

})