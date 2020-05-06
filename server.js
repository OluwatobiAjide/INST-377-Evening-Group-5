/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import sqlite3 from 'sqlite3';
import writeInfo from './writeInfo';

const express = require('express');
require('dotenv/config');

const dbSettings = {
  filename: './db/food_place.db',
  driver: sqlite3.Database,
};

const app = express();
const port = process.env.PORT || 8000;
app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
  console.log(`Node app is running at localhost:${port}`);
});

const baseURL = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json?$limit=36000';

writeInfo(dbSettings, baseURL);
