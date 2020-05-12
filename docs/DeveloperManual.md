# Developer manual:

## System Requirement

1. Windows: Github Desktop and Visual Studio
2. Mac: Github Desktop and your own Bash

## Dependencies

### Nodejs & npm

1. Here is the down load link of Nodejs, follow the instruction for downloading and install: https://nodejs.org/en/download/
2. to create the package.json by using:
   `npm init`
3. Install the node-fetch which is required for fetching APIS form other wesites, type this code on command line and save it into dependencies:
   `npm install node-fetch --save`

### dotenv

1. this will load environment variables from .env files. In the command line, type:
   `npm install dotenv --save`

### Express

1. In your directory, and type this code on the command line:
   `npm install express --save`
2. for testing by:
   `npm test`
3. we also need to install the body-parser in express.js, this will allow us to grab information from the POST (reference: https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters):
   `npm install body-parser --save`

### generate-schema

1. To install generate-scgena:
   `npm install generate-scgena --save`

### mongodb

1. Mongodb is the document database that we are using to sorting data
2. to install mongodb by using npm
   `npm install mongodb --save`

### nodemon

1. nodemon is a utility that will monitor for any changes in our source and automatically restart the server: reference: https://nodemon.io/
2. install:
   `npm nodemon --save`

## TO run our application on heroku

1. Make sure add any .env process variables to heroku.
   2.You must have a file called Procfile with content web: npm start.
2. Attach the github files to heruku with all the important files in a public folder.

## API we used

1. leaflet 1.6.0, here is the downloading link: https://leafletjs.com/2019/11/17/leaflet-1.6.0.html
2. Prince Georges County open data: https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json?$limit=36000'
3. API end points
   - `app.get` : The GET request, this is to get data from the Prince Georges County dataset
   - `app.post`: this is going to requests the web server accepts the data enclose.
   - `app.put`: we used the put request to retrive search information from the user to render requested info.

## The functions

1. `renderInfo(res, type)`
   - Makes a table version of json data(3 columns) and ammends to to document.
   - It also adds markers to map
2. `getInfo()`
   - The main function that use all the functions above render results based on search bar
3. `jsonTable(res)`
   - Makes a table version of json data( 2 columns) and ammends to to document.
4. `checkComp(res)`
   - Goes through the data of test to change background of document to red or green based compliance
5. `custom_sort(a, b)`
   - Custom sort for year
