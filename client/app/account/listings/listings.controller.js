'use strict';

angular.module('listingTestApp')
  .controller('ListingsCtrl', function ($scope) {
    

    var self = this;

    self.users = [{
    	'name':'phil', 
    	'colors':['red', 'blue', 'black', 'purple']

    },{'name':'mike', 'colors':['orange', 'pink']},{'name':'dathan'},{'name':'lyndsey'}];

    $scope.users = self.users;
    $scope.message = 'Hello';
    $scope.name = '';
    $scope.count = 0;

    $scope.myFunct = function(keyEvent) {
  if (keyEvent.which === 13) {
  	$scope.alertMe();
  }
    
}

    $scope.alertMe = function() {
      
    	$scope.users.push({'name':$scope.name});
    	$scope.name = '';
    	$scope.count = $scope.count + 1 

    
    };

  });
