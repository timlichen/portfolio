// var mongoose = require('mongoose');
// var order = mongoose.model('order_model');

module.exports = (function() {
  return {

  //   getOrders: function(req, res){
  //     order.find({}, function(err, order){
  //       if(err){
  //         console.log(err);
  //       } else {
  //         console.log("successful read to DB");
  //         res.json(order);
  //       }
  //     })
  //   },

  // addOrder: function(req, res){
  //   var orderInstance = new order({
  //     name: req.body.name,
  //     product: req.body.product,
  //     quantity: req.body.quantity
  //   })
  //   orderInstance.save(function(err){
  //     if(err){
  //       console.log(err);
  //     } else {
  //       console.log("successful write to DB");
  //       res.redirect('/');
  //     }
  //   })
  // },

  // removeOrder: function(req, res){
  //     order.find({_id: req.params.orderId}, function(err, orders){
  //       if(err){
  //         console.log(err);
  //       } else {
  //         order.remove({_id: req.params.orderId}, function(err){
  //           res.redirect('/');
  //         })
  //       }
  //     })
  //   }

  } // END return
})(); // END module.exports function