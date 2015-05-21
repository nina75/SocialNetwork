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

    var getPostById = function(postId) {
        posts.getPostById(postId, headers, function(data) {
            console.log()
            alert('Взе поста бай ID');
        }, function(error) {
            alert('Tz');
        })
    }



    $scope.likeUnlikePost = likeUnlikePost;

})