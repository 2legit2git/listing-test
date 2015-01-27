'use strict';

angular.module('listingTestApp')
  .config(function ($stateProvider) {
    $stateProvider
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
