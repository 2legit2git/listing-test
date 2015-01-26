'use strict';

angular.module('listingTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .state('listings', {
        url: '/listings',
        templateUrl: 'app/account/listings/listings.html',
        authenticate: true
      })
      .state('listings.profile', {
        url: '/profile',
        templateUrl: 'app/account/listings/profile.html'
      })
      .state('listings.account', {
        url: '/account',
        templateUrl: 'app/account/listings/account.html',
        controller: 'ListingsCtrl',
      });
  });