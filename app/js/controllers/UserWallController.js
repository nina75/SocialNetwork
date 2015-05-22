'use strict';

app.controller('UserWallController', function UserWallController($scope, authentication, friendsData, notifyService) {

    var headers = authentication.getHeaders();
    var username = sessionStorage['username'];

    var getUserPosts = function(username) {
        friendsData.getUserWall(headers, username, function(data) {
            $scope.userPostsData = data;
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }

    getUserPosts(username);
});