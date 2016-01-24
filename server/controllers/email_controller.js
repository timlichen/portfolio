var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "timlichen206",
        pass: "temppass"
    }
});

module.exports = (function() {
  return {
    send_email: function(req, res){
      var mailOptions={
         to : req.body.to,
         subject : req.body.subject,
         text : req.body.text + " " +req.body.from
      }
      console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function(error, response){
          if(error){
            console.log(error);
            res.end("error");
          }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
          }
      });
    } //END send_email
  } // END return
})(); // END module.exports function