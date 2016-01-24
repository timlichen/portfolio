var email_controller = require('../controllers/email_controller.js')

module.exports = function(app){

  app.post('/email', function(req, res){
    email_controller.send_email(req, res);
  })

}