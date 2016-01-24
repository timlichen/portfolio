var portfolio_app = angular.module('portfolio_app', ['ngRoute']);

//ORDERS FACTORY
portfolio_app.factory('portfolio_Factory', function($http){
  var factory = {};
    factory.sendEmail = function(emailData, callback){
      console.log(emailData);
      $http.post('/email', emailData)
      .success(function(data, status) {
          callback(data);
      })
    }
  return factory;
})

//ORDERS CONTROLLER
portfolio_app.controller('portfolio_app', function ($scope, portfolio_Factory){

$scope.submitEmail = function() {
    portfolio_Factory.sendEmail($scope.email, function(data){
      $scope.success = data;
    });
  };
})