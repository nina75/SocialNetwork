'use strict';

app.controller('MainController', function MainController($scope, $location) {

    $scope.username = sessionStorage['username'];


    //if (!sessionStorage['accessToken']) {
    //    $location.path('/');
    //}
})