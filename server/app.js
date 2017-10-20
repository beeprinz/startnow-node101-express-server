// import files and packages up here


// create your express server below
var express = require('express'); 
var morgan = require('morgan');
var data = require('./data.json');

var app = express(); //the app that operates our web server

app.use(morgan('combined'));

 
app.get('/data', function(req, res){
    //res.status(200)res.json auto sets the status to 200 
    res.json(data);
     //res.json(200, {status:"success"}); //can i do res twice?
});

// var server = app.listen(3000, function(){ 
//     console.log('listening on port 3000');
// }); 


// add your routes and middleware below

// finally export the express application
module.exports = app;
