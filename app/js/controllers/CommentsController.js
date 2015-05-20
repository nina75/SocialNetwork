'use strict';

app.controller('CommentsController', function CommentsController($scope, authentication, comments, notifyService) {

    var headers = authentication.getHeaders();

   //home - comment post
    var commentPost = function(postId) {
        comments.commentPost(postId, {commentContent: $scope.commentContent}, authentication.getHeaders(), function(data) {
            alert('Stana');
            getPostComments(postId);
        }, function(error) {
            alert('Tz');
        })
    }

    //home - get comments for post
    var getPostComments = function(postId) {
        comments.getPostComments(postId, headers, function(data) {
            $scope.commentsCount = data.length;
            $scope.commentsData = data;
            $scope.showComments = true;
        }, function(error) {
            alert('Tz');
        })
    }

    $scope.commentPost = commentPost;
    $scope.getPostComments = getPostComments;
})