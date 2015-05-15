'use strict';

var app = angular.module('SocialNetwork', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl:'partials/initial.html',
            controller:'UserController'
        })
        .when('/login', {
            templateUrl:'partials/login.html',
            controller:'UserController'
        })
        .when('/register', {
            templateUrl:'partials/register.html',
            controller:'UserController'

        })
        .when('/home', {
            templateUrl:'partials/home.html',
            controller:'UserController'

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
        //.otherwise({redirectTo: '/'})

});