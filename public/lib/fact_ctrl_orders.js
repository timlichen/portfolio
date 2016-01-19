// //ORDERS FACTORY
// ordersCustomers.factory('orders_factory', function($http){
//   var orders = [];
//   var factory = {};

//   factory.getCustomers = function(callback){
//     $http.get('/getCustomers').success(function(customers){
//       callback(customers);
//       // console.log(orders);
//     })
//   }

//   factory.getOrders = function(callback){
//     $http.get('/getOrders').success(function(orders){
//       callback(orders);
//     })
//   }

//   factory.addOrder = function(data, callback){
//     console.log(data);
//     $http.post('/addOrder', data).success(function(customers){
//       callback(customers)
//     })
//   }

//   factory.removeOrder = function(id, callback){
//     console.log(id);
//     $http.post('/removeOrder/'+id).success(function(info){
//       callback(orders);
//     })
//   }

//   return factory;
// })

// //ORDERS CONTROLLER
// ordersCustomers.controller('ordersController', function ($scope, orders_factory){

// $scope.products = ['nike shoes', 'gold chains'];
// $scope.quantities = [1, 2];
// $scope.customerNames = [];

// orders_factory.getCustomers(function(data){
//   console.log(data);
//   $scope.customers = data;
//   console.log($scope.customers);

//   for(var i = 0; i< data.length; i++){
//     $scope.customerNames.push(data[i].name);
//   }
// })

// orders_factory.getOrders(function(data){
//   $scope.orders = data;
// })


// $scope.addOrder = function(){
//   orders_factory.addOrder($scope.newOrder, function(){
//     orders_factory.getOrders(function(data){
//       $scope.orders = data;
//     })
//   })
//   $scope.newOrder = {};
// }

//   $scope.removeOrder = function(id){
//     orders_factory.removeOrder(id, function(){
//       orders_factory.getOrders(function(data){
//         $scope.orders = data;
//       })
//     })
//   }
// })