'use strict';

app.controller('PostsController', function PostsController($scope, posts) {
    var headers = {
        Authorization: "Bearer " + sessionStorage['accessToken']
    }

    $scope.likeUnlikePost = function(post) {
        if(!post.liked) {
            posts.likePost(post.id, headers, function(data) {
                post.likesCount++;
                post.liked = true;

            }, function(error) {
                alert('LikeUnlike йок');
            })
        } else {
            posts.unlikePost(post.id, headers, function(data) {

                post.likesCount--;
                post.liked = false;

            }, function(error) {
                alert('LikeUnlike йок');
            })
        }
    }

    $scope.commentPost = function(post) {

    }
})