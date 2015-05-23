'use strict';

var app = angular.module('SocialNetwork', ['ngRoute', 'naif.base64', 'angular-loading-bar']);

app.constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api')

app.config(function ($routeProvider,$locationProvider) {
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl:'partials/initial.html',
            controller:'AuthenticationController'
        })
        .when('/home', {
            templateUrl:'partials/home.html',
            controller:'MainController'

        })
        .when('/user/me', {
            templateUrl:'partials/user-wall.html',
            controller:'MainController'

        })
        .when('/user/me/friends', {
            templateUrl:'partials/user-friends.html',
            controller:'MainController'

        })
        .when('/user/:username/friends', {
            templateUrl:'partials/friends-friends.html',
            controller:'MainController'

        })
        .when('/user/:username', {
            templateUrl:'partials/friend-wall.html',
            controller:'MainController'

        })
        .when('/profile', {
            templateUrl:'partials/edit-profile.html',
            controller:'MainController'

        })
        .when('/changepassword', {
            templateUrl:'partials/change-password.html',
            controller:'MainController'

        })

        .otherwise({redirectTo: '/home'})
});