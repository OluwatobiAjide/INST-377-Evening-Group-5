/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const express = require('express');
const fetch = require('node-fetch');
const sqlite3 = require('sqlite3').verbose();
require('dotenv/config');

const app = express();
const port = process.env.PORT || 8000;
app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
  console.log(`Node app is running at localhost:${port}`);
});

const baseURL = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json?$limit=36000';

const db = new sqlite3.Database('./db/food_place.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connnected to the food_place database');
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.route("/api").put((req,res) => {

)}
=======
=======
>>>>>>> ba5f45e5bc148effec4bda29529abb77282bff57
app.route("/api").put((req,res) =>{
  console.log("/api put request", req.body);
  if(req.body.name){
    writeUser(req.body.name,db)
    .then((result)=> {
      console.log(result);
      res.json({"success": true})
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/error');
    })
  }else{
  console.log(req.body);
  res.status("418")
  }
});
<<<<<<< HEAD
>>>>>>> 24605592b73b7dbe7e0fd6b5d6bdea13d005c14f
=======
>>>>>>> ba5f45e5bc148effec4bda29529abb77282bff57
=======
app.route("/api").put((req,res) =>{

});
>>>>>>> 0051a640fc8d35717eddaa5f4057a49111fba908

fetch(baseURL)
  .then((r) => r.json())
  .then((data) => {
    db.serialize(() => {
      db.run(
        'CREATE TABLE IF NOT EXISTS food_inspection(establishment_id integer  , name text , category text , inspection_date text, inspection_result text, city text, state text, zip integer, address_line_1 text, address_line_2 text, inspection_type text, owner text, establishment_type text )',
      );

      for (const key in data) {
        const info = data[key];
        if (
          info.category === 'Restaurant'
          || info.category === 'Carry-out'
          || info.category === 'Fast Food'
        ) {
          const param = [
            info.establishment_id,
            info.name,
            info.category,
            info.inspection_date,
            info.inspection_results,
            info.city,
            info.state,
            info.zip,
            info.address_line_1,
            info.address_line_2,
            info.inspection_type,
            info.owner,
            info.type,
          ];

          const sql = 'INSERT INTO food_inspection VALUES(:establishment_id, :name , :category , date(:inspection_date) ,:inspection_results, :city , :state , :zip , :address_line_1 , :address_line_2 , :inspection_type , :owner , :type)';

          db.run(sql, param, (err) => {
            if (err) {
              return console.error(err.message);
            }
          });
        }
      }

      console.log('Insert Complete');
    });
    db.close();
  });

<<<<<<< HEAD
  app.post('/api/post', (req, res) => {
    res.json({
      message: 'POST'
    });
  });
  
<<<<<<< HEAD
  app.put('/api/put', (req, res) => { 
    res.json({  
      message: 'PUT'  
=======
  
  
  app.put('/api/put', (req, res) => { 
    res.json({
      message: 'PUT' 
>>>>>>> ba5f45e5bc148effec4bda29529abb77282bff57
    });  
  });
=======
>>>>>>> 0051a640fc8d35717eddaa5f4057a49111fba908
