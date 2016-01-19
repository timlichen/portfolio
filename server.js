var express = require('express');
var path = require('path');

var app = express();

var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded);
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public'));

require('./server/config/routes.js')(app);

app.listen(8000, function(){
  console.log("Listening on port 8000");
})