// var portfolio_app = angular.module('portfolio_app', ['ngRoute']);

// //CUSTOMERS FACTORY
//     ordersCustomers.factory('customers_factory', function($http){
//       var customers = [];
//       var factory = {};
//       var errors = [];

//       factory.getError = function(callback){
//         callback(errors);
//       }

//       factory.getCustomers = function(callback){
//         $http.get('/getCustomers').success(function(customers){
//           callback(customers);
//         })
//       }

//       factory.addCustomer = function(data, callback){
//         $http.post('/addCustomer', {name: data.name}).then(
//           function successCallback(serverResponse){
//             console.log(serverResponse);
//             if(typeof serverResponse.data == "object"){

//               // if server returns and object, which means a the written object is handed back, clear errors array, and run the callback which is getCustomers, but also run the getErrors function but with empty data passed through.

//               errors = [];
//               callback();
//             } else {

//               // if the server resonds with data that is not an object, but the message string written into to the data of the returned json, set the errors variable to the error string.

//               errors = serverResponse.data;

//               // run the callback, but this time with errors being filled with an string.

//               console.log(errors);

//               callback(errors);
//             }
//           });
//       }

//       factory.removeCustomer = function(id, callback){
//         console.log(id);
//         $http.post('/removeCustomer/'+id).success(function(info){
//           callback(customers);
//         })
//       }

//       return factory;
//     })

// //CUSTOMERS CONTROLLER
//     ordersCustomers.controller('customersController', function ($scope, customers_factory){

//       customers_factory.getCustomers(function(data){
//         $scope.customers = data;
//       })

//       $scope.getErrors = function(){
//         customers_factory.getError(function(data){
//           console.log(data);
//           //this function gets run, with or without something in it, angular determines if it will display anything with ternar operation.
//           $scope.errors = data;
//         })
//       }

//       $scope.addCustomer = function(){
//         customers_factory.addCustomer($scope.newCustomer, function(data){
//             //on call back run...
//             $scope.getErrors();
//             //set customer scope to ...
//             $scope.customers =
//               customers_factory.getCustomers(function(data){
//                 $scope.customers = data;
//               })
//         })
//         $scope.newCustomer = {};
//       }

//       $scope.removeCustomer = function(id){
//         customers_factory.removeCustomer(id, function(){
//           customers_factory.getCustomers(function(data){
//             $scope.customers = data;
//           })
//         })
//       }
//     }) //END Customers Controller