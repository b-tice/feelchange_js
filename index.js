const express = require('express');
const Datastore = require('nedb');
const fs = require('fs');

const content_zero =  '0';
const content =       '1';
const content_two =   '2';
const content_three = '3';

const app = express();

var obj;
var data_int;

var feelchange;
var filtersweep;
var ambient;

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log(`Starting server at ${port}`);
});

// Serve up a static web page
app.use(express.static('public'));

app.use(express.json({ limit: "1mb" }));

const database = new Datastore('database.db');
database.loadDatabase();
//database.insert({name: 'Feel Change', status: 'state'});

app.get('/api', (request, response) => {
  
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.send(data);
  });
});

// working on this function, want to read and write to json, and make sure MAX can pick it up. 2/14
app.post("/api", (request, response) => {
  
  var object = {
    table: []
  };
  
  //console.log("I got a request!");
  //console.log(request.body);
  
  const data = request.body;
  const timestamp = Date.now();
  //database.insert({name: 'Feel Change', status: 'state'});
  
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
    
    else if(data_int == 1)  {
        
    fs.writeFile('public/test.txt', content_zero, err => {
      if (err) {
        console.error(err);
      } 
      else {
        console.log('File Written OK: 0');// file written successfully
      }
    });       
  }
   
  
  // attempt to read and write JSON seen below:
  // ***
  /*
  fs.readFile('public/state.json', 'utf8', function (err, data) {
    
    if (err) throw err;
    console.log('Data in state.json:');
    console.log(data)
    
    data_int = parseInt(data, 10); 
    object = JSON.parse(data);
    console.log('Data in feelchange field:');
    console.log(object.feelchange);
    
    feelchange = object.feelchange;
    filtersweep = object.filtersweep;
    ambient = object.ambient;
    
    
  });
  
  console.log(feelchange+5);
  
  //if(feelchange == 0) {
    
    //object.table.push({"feelchange": 1});
    var json_string = JSON.stringify(object);
    
    const update = { "feelchange": 1, "filtersweep": filtersweep, "ambient": ambient};
  
    fs.writeFile('public/state.json', JSON.stringify(update), 'utf8', err => {
      if (err) {
        console.error(err);
      } 
      else {
        console.log('File Written OK: 1');// file written successfully
      }
    });    
  //}
  
  else if(feelchange === 1)  {
    
    object.push({feelchange: 0});
    var json_string = JSON.stringify(object);
        
    fs.writeFile('public/state.json', json_string, 'utf8', err => {
      if (err) {
        console.error(err);
      } 
      else {
        console.log('File Written OK: 0');// file written successfully
      }
    });       
  }
  
    */
  data.timestamp = timestamp;
  //database.insert(data);
  //database.insert({name: 'Feel Change', status: 'state'});
  response.json({
    status: "success",
    state: content,
    
  });
  
  });
  
  app.post("/api2", (request, response) => {
    
    console.log("You clicked filter button!");
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    
    fs.readFile('public/filter.txt', 'utf8', function (err, data) {
    
      if (err) throw err;
      console.log('Data in filter.txt:');
      console.log(data)
      data_int = parseInt(data, 10); 
      obj = JSON.parse(data);
    });
    
    if(data_int == 0) {
    
      fs.writeFile('public/filter.txt', content, err => {
        if (err) {
          console.error(err);
        } 
        else {
          console.log('File Written OK: 1');// file written successfully
        }
      });    
    }
    
    else if(data_int == 1)  {
        
    fs.writeFile('public/filter.txt', content_zero, err => {
      if (err) {
        console.error(err);
      } 
      else {
        console.log('File Written OK: 0');// file written successfully
      }
    });       
  }
   
    
    
  });
  
  
  app.post("/api3", (request, response) => {
    
    console.log("You clicked ambient button!");
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    
    fs.readFile('public/ambient.txt', 'utf8', function (err, data) {
    
      if (err) throw err;
      console.log('Data in ambient.txt:');
      console.log(data)
      data_int = parseInt(data, 10); 
      obj = JSON.parse(data);
    });
    
    if(data_int == 0) {
    
      fs.writeFile('public/ambient.txt', content, err => {
        if (err) {
          console.error(err);
        } 
        else {
          console.log('File Written OK: 1');// file written successfully
        }
      });    
    }
    
    else if(data_int == 1)  {
        
    fs.writeFile('public/ambient.txt', content_zero, err => {
      if (err) {
        console.error(err);
      } 
      else {
        console.log('File Written OK: 0');// file written successfully
      }
    });       
  }
   
    
    
  });
  
  
  
  


