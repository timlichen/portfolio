var portfolio_app = angular.module('portfolio_app', ['ngRoute']);

//ORDERS FACTORY
portfolio_app.factory('portfolio_Factory', function($http){
  var factory = {};
    factory.sendEmail = function(emailData, callback){
      // console.log(emailData.from);

if(emailData == undefined || !emailData.text){
      data = "Uhoh, something is wrong!";
      callback(data);
      console.log("no");
    } else {
        $http.post('/email', emailData)
          .success(function(data, status) {
            data = "Success, message sent!"
            callback(data);
        })
      }
    }
  return factory;
})

//ORDERS CONTROLLER
portfolio_app.controller('portfolio_app', function ($scope, portfolio_Factory){

$scope.submitEmail = function() {
      portfolio_Factory.sendEmail($scope.email, function(data){
        console.log(data);
        $scope.success = data;
      });
  };
})