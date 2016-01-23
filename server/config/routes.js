var email_controller = require('../controllers/email_controller.js')

module.exports = function(app){

  app.post('/email', function(req, res){
    console.log(req.body);
    email_controller.send_email(req,res);
  })

  app.post('/updateName', function(req, res){

  })

}