'use strict';

app.controller('FriendsFriendsController', function FriendsFriendsController($scope, $routeParams ,authentication, friendsData, notifyService){

    var headers = authentication.getHeaders();
    var username = $routeParams.username;

    //friends friends page

    var getFriendsFriends = function(username) {
        friendsData.getFriendsDetailedFriendsList(headers, username, function(data) {
            $scope.friendsFriendsData = data;
            $scope.friendsFriendsCount = data.length;
        }, function(error) {
            notifyService.showError(error.message);
        })

    }

    getFriendsFriends(username);

})