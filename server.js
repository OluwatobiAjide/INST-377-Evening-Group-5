var express = require('express');
const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;
require('dotenv/config')
var app = express();
var port = process.env.PORT || 8000;
app.use(express.static(__dirname + '/public'));



app.listen(port, function() {
  console.log("Node app is running at localhost:" + port);
});



//Connect to DB

const baseURL = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const uri = "mongodb+srv://admin:snw1B9IdJvv0Ds0m@cluster0-ufrmk.mongodb.net/test?retryWrites=true&w=majority";
fetch(baseURL).then((r) => r.json()).then((data) => {
  MongoClient.connect(uri, { useNewUrlParser: true },{ useUnifiedTopology: true },(err,client) => {
    if  (err) {
      console.error(err);
      return;
    }
    const db = client.db('data')
    const collection = db.collection('restaurant')
    data.forEach(function(item){
        collection.insertOne(item);
    });
    
  });
  
})

