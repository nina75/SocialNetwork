'use strict';

app.controller('OwnFriendsController', function OwnFriendsController($scope, userData, authentication, notifyService){
    var headers = authentication.getHeaders();

    //friends page
    var getUserFriends = function() {
        userData.getUserFriends(headers, function(data) {
            $scope.friendsCount = data.length;
            $scope.friendsData = data;
        }, function(error) {
            notifyService.showError("Unsuccessful Connection to Database!");
        })
    }

    getUserFriends();

})