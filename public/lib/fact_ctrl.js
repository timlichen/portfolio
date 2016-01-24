var portfolio_app = angular.module('portfolio_app', ['ngRoute']);

//ORDERS FACTORY
portfolio_app.factory('about_Factory', function($http){
  var orders = [];
  var factory = {};
  return factory;
})

//ORDERS CONTROLLER
portfolio_app.controller('portfolio_app', function ($scope, $http, about_Factory){

$scope.submitEmail = function() {
        // console.log($scope.email);
        //Request
        $http.post('/email', $scope.email)
        .success(function(data, status) {
            $scope.success = data;
        })
        .error(function(data, status) {
            $scope.error = "Error, message not sent";
        })
    };
})