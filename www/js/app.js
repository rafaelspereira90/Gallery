// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'HomeCtrl'
  })

  .state('app.newNot', {
    url: '/newNot',
    views: {
      'menuContent': {
        templateUrl: 'templates/notificacoes.html'
      }
    }
  })

  .state('app.secoes', {
      url: '/secoes',
      views: {
        'menuContent': {
          templateUrl: 'templates/secoes.html',
          controller:'HomeCtrl'
        }
      }
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

  .state('app.oldNot', {
    url: '/oldNot',
    views: {
      'menuContent': {
        templateUrl: 'templates/notificacoeslidas.html',
        controller: 'HomeCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
