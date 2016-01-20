var portfolio_app = angular.module('portfolio_app', ['ngRoute']);

//ORDERS FACTORY
portfolio_app.factory('about_Factory', function($http){
  var orders = [];
  var factory = {};
  return factory;
})

//ORDERS CONTROLLER
portfolio_app.controller('portfolio_app', function ($scope, about_Factory){

$scope.languages = [];
$scope.frameworks = [];

$scope.customerNames = [];

})