'use strict';

app.controller('UserWallController', function UserWallController($scope, authentication, friendsData) {

    var headers = authentication.getHeaders();
    var username = sessionStorage['username'];

    var getUserPosts = function(username) {
        friendsData.getUserWall(headers, username, function(data) {
            $scope.userPostsData = data;
        }, function(error) {
            alert('Tz');
        })
    }

    getUserPosts(username);
});