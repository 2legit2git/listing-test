'use strict';

angular.module('listingTestApp')
  .controller('ListingsCtrl', function($scope, User) {
    $scope.users = [{
      name: 'phil',
      colors: ['red', 'blue', 'black', 'purple']
    }, {
      name: 'mike',
      colors: ['orange', 'pink']
    }, {
      name: 'dathan'
    }, {
      name: 'lyndsey'
    }];
    $scope.message = 'Hello';
    $scope.count = 0;

    $scope.alertMe = function() {

      $scope.users.push({
        name: $scope.name
      });
      $scope.name = '';
      $scope.count = $scope.count + 1

    };

    $scope.me = User.get();

    $scope.changeName = function() {
      $scope.me.name = $scope.name;
      $scope.me.$update()
        .then(function() {
          console.log($scope.me);
        });
    }

  });
