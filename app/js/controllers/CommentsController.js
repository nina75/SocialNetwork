'use strict';

app.controller('CommentsController', function CommentsController($scope, authentication, comments, notifyService) {

    var headers = authentication.getHeaders();

   //home - comment post
    var commentPost = function(postId) {
        comments.commentPost(postId, {commentContent: $scope.commentContent}, authentication.getHeaders(), function(data) {
            getPostComments(postId);
        }, function(error) {
            notifyService.showError(error.message);
        })
    }

    //home - get comments for post
    var getPostComments = function(postId) {
        comments.getPostComments(postId, headers, function(data) {
            if(data.length > 0) {
                $scope.commentsCount = data.length;
                $scope.commentsData = data;
                $scope.showAllComments = true;
                $scope.username = sessionStorage['username'];
            }
        }, function(error) {
            notifyService.showError(error.message);
        })
    }

    //delete comment
    var deleteComment = function(postId, commentId) {
        comments.deleteComment(postId, commentId, headers, function(data) {
            alert('dadada');
        }, function(error) {
            notifyService.showError(error.message);
        })
    }

    $scope.showAllComments = false;
    $scope.commentPost = commentPost;
    $scope.getPostComments = getPostComments;
    $scope.deleteComment = deleteComment;

})