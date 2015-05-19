'use strict';

app.controller('PostsController', function PostsController($scope, posts, authentication) {

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

    var commentPost = function(post) {
        $scope.commentContent = 'MAsaasa';
        posts.commentPost(post.id, $scope.commentData, authentication.getHeaders(), function(data) {
            alert('Ok');
        }, function(error) {
            alert('Tz');
        })
    }

    $scope.showComments = false;

    $scope.likeUnlikePost = likeUnlikePost;
    $scope.commentPost = commentPost;
})