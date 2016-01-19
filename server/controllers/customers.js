// var mongoose = require('mongoose');
// var customer = mongoose.model('customer_model');

module.exports = (function() {
  return {

//     getCustomers: function(req, res){
//       customer.find({}, function(err, customers){
//         if(err){
//           console.log(err);
//         } else {
//           console.log("successful read to DB");
//           res.json(customers);
//         }
//       })
//     }, //END getCustomers

// addCustomer: function(req, res){
//   var customerInstance = new customer({
//     name: req.body.name
//   })
//   customerInstance.save(
//     function(err){
//       if(err){
//         console.log(err.message);
//         var message = "Customer already registered";
//         res.json(message);
//       } else {
//         var message = "Successfully registered";
//         res.json(message);
//       }
//     })
// }, //END addCustomer

//     removeCustomer: function(req, res){
//       customer.find({_id: req.params.customerId}, function(err, customers){
//         if(err){
//           console.log(err);
//         } else {
//           customer.remove({_id: req.params.customerId}, function(err){
//             res.redirect('/');
//           })
//         }
//       })
//     }

  } // END return
})(); // END module.exports function