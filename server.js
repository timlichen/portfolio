var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded);
app.use(bodyParser.json());
require('./server/config/routes.js')(app);

app.use(express.static( __dirname + '/public'));

app.listen(8000, function(){
  console.log("Listening on port 8000");
})