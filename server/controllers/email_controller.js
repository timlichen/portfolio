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
      transport.sendMail({
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        html: req.body.text + " " +req.body.from
      }, function(err, info) {
        if (err) {
          console.error(err);
        } else {
          console.log(info);
        }
      });
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