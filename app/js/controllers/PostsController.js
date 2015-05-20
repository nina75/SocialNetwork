'use strict';

app.controller('PostsController', function PostsController($scope, posts, authentication, notifyService) {

    //home - like, unlike post
    var likeUnlikePost = function(post) {
        if(!post.liked) {
            posts.likePost(post.id, authentication.getHeaders(), function(data) {
                post.likesCount++;
                post.liked = true;

            }, function(error) {
                alert('LikeUnlike йок');
            })
        } else {
            posts.unlikePost(post.id, authentication.getHeaders(), function(data) {

                post.likesCount--;
                post.liked = false;

            }, function(error) {
                alert('LikeUnlike йок');
            })
        }
    }

    $scope.likeUnlikePost = likeUnlikePost;
})