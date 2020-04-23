const express = require("express");
const fetch = require("node-fetch");
//const sqlite3 = require("sqlite3").verbose();
const MongoClient = require('mongodb').MongoClient;
require("dotenv/config");
var app = express();
var port = process.env.PORT || 8000;
app.use(express.static(__dirname + "/public"));

app.listen(port, function () {
  console.log("Node app is running at localhost:" + port);
});

//Connect to DB
// const db = new sqlite3.Database("./db/food_place.db", (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Connnected to the food_place database");
// });

// db.serialize(()=>{
//   db.run(
//     "CREATE TABLE IF NOT EXISTS food_inspection(establishment_id integer  , name text , category text , inspection_date text, inspection_result text, city text, state text, zip integer, address_line_1 text, address_line_2 text, inspection_type text, owner text, establishment_type text )"
//   );

//   for (var key in data){
//     var info = data[key];
//     const param = [info.establishment_id, info.name , info.category , info.inspection_date , info.inspection_results , info.city , info.state , info.zip , info.address_line_1 , info.address_line_2 , info.inspection_type , info.owner , info.type]
    
//     const sql = "INSERT INTO food_inspection VALUES(:establishment_id, :name , :category , date(:inspection_date) ,:inspection_results, :city , :state , :zip , :address_line_1 , :address_line_2 , :inspection_type , :owner , :type)"

//     db.run(sql,param,(err)=>{
//       if(err){
//         return console.error(err.message);
//       }
      
//     });
    
    
//   }
 
//   console.log("Insert Complete");
  
// });
// db.close();

const baseURL = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json?$limit=36000";
const uri = process.env.MONGODB_URL;
 fetch(baseURL)
  .then((r) => r.json())
  .then((data) => {
   
     MongoClient.connect(uri, { useNewUrlParser: true },{ useUnifiedTopology: true },(err,client) => {
      if  (err) {
        console.error(err);
        return;
      }
      const db = client.db('data')
      const collection = db.collection('restaurant')
        collection.insertMany(data,function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          client.close();
        });
        
    });
  });
