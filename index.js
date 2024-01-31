const express = require('express');
const Datastore = require('nedb');
const fs = require('fs');
const content = '1';
const content_zero = '0';
const app = express();

var obj;
var data_int;

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

// Serve up a static web page
app.use(express.static('public'));

app.use(express.json({ limit: "1mb" }));

const database = new Datastore('database.db');
database.loadDatabase();


app.post("/api", (request, response) => {
  console.log("I got a request!");
  console.log(request.body);
  const data = request.body;
  const timestamp = Date.now();
  
  fs.readFile('public/test.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log('Data in test.txt:');
    console.log(data)
    data_int = parseInt(data, 10); 
    obj = JSON.parse(data);
  });
  
  if(data_int == 0) {
    
    fs.writeFile('public/test.txt', content, err => {
      if (err) {
        console.error(err);
      } 
      else {
        console.log('File Written OK: 1');// file written successfully
      }
    });    
  }
  else {
    
    if(data_int == 1) {
    
    fs.writeFile('public/test.txt', content_zero, err => {
      if (err) {
        console.error(err);
      } 
      else {
        console.log('File Written OK: 0');// file written successfully
      }
    });    
  }
    
  }
  
  
  data.timestamp = timestamp;
  database.insert(data);
  response.json({
    status: "success",
    state: content,
    
  });
});
