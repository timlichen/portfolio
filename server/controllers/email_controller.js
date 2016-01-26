var nodemailer = require("nodemailer");
var mandrillTransport = require('nodemailer-mandrill-transport');
var transport = nodemailer.createTransport(mandrillTransport({
  auth: {
    apiKey: 'sR3RRKyZJIar9LLns-D38Q'
  }
}));
module.exports = (function() {
  return {
    send_email: function(req, res){
      var mailOptions = {
        from: 'Contact Form <iamtim@timlichen.com>',
        to: 'iamtim@timlichen.com',
        replyto: req.body.from,
        subject: "FROM: " + req.body.from + " - " + req.body.subject,
        text: "FROM: " + req.body.from + " - " + req.body.text
      };
      if(req.body.from == undefined || req.body.text == "" || req.body.from == null){
        res.send("");
      } else {
        transport.sendMail(mailOptions, function(err, info) {
          if (err) {
            res.send("Oops, message failed to send.");
          } else {
            res.send("Success, message sent!");
          }
        });
      }
    } //END send_email
  } // END return
})(); // END module.exports