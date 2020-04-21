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
mongoose.connect('mongodb+srv://admin:snw1B9IdJvv0Ds0m@cluster0-ufrmk.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true } , ()=>console.log("Database Connected"));
