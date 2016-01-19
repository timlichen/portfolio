// var about = require('../controllers/customers.js')
// var projects = require('../controllers/orders.js')

module.exports = function(app) {
  //SHOW USER
  app.get('/getCustomers', function(req, res){
    // console.log(req.body);
    customers.getCustomers(req, res)
  })

  app.get('/getOrders', function(req, res){
    orders.getOrders(req, res)
  })

  app.post('/addCustomer', function(req, res){
    customers.addCustomer(req, res);
  })

  app.post('/addOrder', function(req, res){
    orders.addOrder(req, res);
  })

  app.post('/removeCustomer/:customerId', function(req, res){
    console.log('removeCustomer', req.params.customerId);
    customers.removeCustomer(req, res);
  })

  app.post('/removeOrder/:orderId', function(req, res){
    console.log('removeOrder', req.params.orderId);
    orders.removeOrder(req, res);
  })
}