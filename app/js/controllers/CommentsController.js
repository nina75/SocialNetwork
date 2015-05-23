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
                $scope.showComments = !$scope.showComments;
            }
        }, function(error) {
            notifyService.showError(error.message);
        })
    }

    var hideComments = function(){
        $scope.showAllComment = false;
    }

    $scope.showAllComment = false;
    $scope.hideComments = hideComments;
    $scope.commentPost = commentPost;
    $scope.getPostComments = getPostComments;

})