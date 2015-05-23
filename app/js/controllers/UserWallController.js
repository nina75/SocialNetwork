'use strict';

app.controller('UserWallController', function UserWallController($scope, authentication,posts, friendsData, notifyService) {

    var headers = authentication.getHeaders();
    var username = sessionStorage['username'];

    var getUserPosts = function(username) {
        friendsData.getUserWall(headers, username, function(data) {
            $scope.userPostsData = data;
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }

    var addNewPost = function(username) {
        posts.addNewPost(headers, {postContent: $scope.postContent,username: username}, function(data) {
            notifyService.showInfo('Post added successful');
            getUserPosts(username);
        }, function(error) {
            notifyService.showError('Unsuccessful Connect To Database');
        })
    }

    $scope.addNewPost = addNewPost;
    getUserPosts(username);
});