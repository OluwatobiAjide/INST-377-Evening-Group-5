var express = require('express');
var mongoose = require('mongoose');
require('dotenv/config')
var app = express();
var port = process.env.PORT || 8000;
app.use(express.static(__dirname + '/public'));



app.listen(port, function() {
  console.log("Node app is running at localhost:" + port);
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true } , ()=>console.log("Database Connected"));
