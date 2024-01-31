const express = require('express');
const Datastore = require('nedb');
const fs = require('fs');
const content = '1';
const app = express();


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
  
  fs.writeFile('public/test.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('File Written OK');// file written successfully
  }
});
  
  data.timestamp = timestamp;
  database.insert(data);
  response.json({
    status: "success",
    latitude: data.lat,
    longitude: data.lon,
  });
});