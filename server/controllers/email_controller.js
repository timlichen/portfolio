var nodemailer = require("nodemailer");
var mandrillTransport = require('nodemailer-mandrill-transport');


// var smtpTransport = nodemailer.createTransport("SMTP",{
//     service: "Mandrill",
//     auth: {
//         user: "tim.li.chen@gmail.com",
//         pass: "sR3RRKyZJIar9LLns-D38Q"
//     }
// });

var transport = nodemailer.createTransport(mandrillTransport({
  auth: {
    apiKey: 'sR3RRKyZJIar9LLns-D38Q'
  }
}));

module.exports = (function() {
  return {
    send_email: function(req, res){
      console.log(req.body.from)
      if(req.body.from == null || req.body.text == null){
        console.log("error");
      } else {
        transport.sendMail({
          from: 'iamtim@timlichen.com',
          to: 'iamtim@timlichen.com',
          subject: "FROM: " + req.body.from + " - " + req.body.subject,
          text: "FROM: " + req.body.from + " - " + req.body.text
        }, function(err, info) {
          if (err) {
            console.error(err);
          } else {
            console.log(info);
          }
        });
      }
  } //END send_email

    //   var mailOptions={
    //      to : req.body.to,
    //      subject : req.body.subject,
    //      text : req.body.text + " " +req.body.from
    //   }
    //   console.log(mailOptions);
    //     smtpTransport.sendMail(mailOptions, function(error, response){
    //       if(error){
    //         console.log(error);
    //         res.end("error");
    //       }else{
    //         console.log("Message sent: " + response.message);
    //         res.end("sent");
    //       }
    //   });
  } // END return
})(); // END module.exports function