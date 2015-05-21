'use strict';

var app = angular.module('SocialNetwork', ['ngRoute', 'naif.base64']);

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


        //.when('/user/home', {
        //    templateUrl:'templates/all-ads.html',
        //    controller:'MainController'
        //})
        //.when('/user/ads', {
        //    templateUrl:'templates/user-ads.html',
        //    controller:'MainController'
        //})
        //.when('/user/profile', {
        //    templateUrl:'templates/edit-user.html',
        //    controller:'MainController'
        //})
        //.when('/user/ads/publish', {
        //    templateUrl:'templates/publish-ad.html',
        //    controller:'MainController'
        //})
        //.when('/user/ads/edit/:id', {
        //    templateUrl:'templates/edit-ad.html',
        //    controller:'MainController'
        //})
        //.when('/user/ads/delete/:id', {
        //    templateUrl:'templates/delete-ad.html',
        //    controller:'MainController'
        //})
        //.when('/admin/home', {
        //    templateUrl:'templates/admin-ads.html',
        //    controller:'MainController'
        //})
        //.when('/admin/ads', {
        //    templateUrl:'templates/user-ads.html',
        //    controller:'MainController'
        //})
        //.when('/admin/profile', {
        //    templateUrl:'templates/edit-user.html',
        //    controller:'MainController'
        //})
        //.when('/admin/ads/publish', {
        //    templateUrl:'templates/publish-ad.html',
        //    controller:'MainController'
        //})
        //.when('/admin/ads/edit/:id', {
        //    templateUrl:'templates/edit-ad.html',
        //    controller:'MainController'
        //})
        //.when('/admin/ads/delete/:id', {
        //    templateUrl:'templates/delete-ad.html',
        //    controller:'MainController'
        //})
        .otherwise({redirectTo: '/'})

});
