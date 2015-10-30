// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngStorage', 'ngResource', 'ngCordova', 'jett.ionic.filter.bar'])

.run(function ($ionicPlatform, AppZanatlijaFactory, $localStorage, $http, $state) {

    $ionicPlatform.ready(function () {
        $state.go('home');
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.swipeBackEnabled(true);
    $ionicConfigProvider.backButton.text('');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .state('mojiOglasi', {
            url: "/mojiOglasi",
            templateUrl: 'templates/mojiOglasi.html',
            controller: 'MojiOglasiController'
        })
        .state('postaviOglas', {
            url: '/postaviOglas',
            templateUrl: 'templates/postaviOglas.html',
            controller: 'PostaviOglasController'
        })
        .state('pretraga', {
            url: '/pretraga',
            templateUrl: 'templates/pretraga.html',
            controller: 'PretragaController'
        })
        .state('podkategorija', {
            url: '/podkategorija/:kategorijaId',
            templateUrl: 'templates/podkategorija.html',
            controller: 'PodkategorijaController'
        })
        .state('lista-zanatlija', {
            url: '/lista-zanatlija/:podkategorijaId',
            templateUrl: 'templates/lista-zanatlija.html',
            controller: 'ListaZanatlijaController'
        })
        .state('oglas-single-view', {
            url: "/oglas-single-view/:zanatlijaId",
            templateUrl: 'templates/oglas-single-view.html',
            controller: 'OglasSingleController'
        })
        .state('about-us', {
            url: '/about-us',
            templateUrl: 'templates/about-us.html',
            controller: 'AboutUsController'
        })
        .state('lajkovaniOglasi', {
            url: '/lajkovaniOglasi',
            templateUrl: 'templates/lajkovaniOglasi.html',
            controller: 'LajkovaniOglasiController'
        })
    $urlRouterProvider.otherwise('/home');
});
