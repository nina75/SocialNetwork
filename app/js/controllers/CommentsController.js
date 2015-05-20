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
            if(data.length > 0) {
                $scope.commentsCount = data.length;
                $scope.commentsData = data;
                $scope.showComments = !$scope.showComments;
            }
        }, function(error) {
            alert('Tz');
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