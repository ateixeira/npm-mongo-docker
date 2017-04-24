var express = require('express');
var app = express();
var mongoose = require('mongoose');

// MongoDB setup
mongoose.connect("mongodb://mongo:27017");

//routes
app.get('/', function(req, res){
  res.send("Hello World");
});

//Server startup
app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
