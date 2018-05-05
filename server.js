//dependencies
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// app.use(bodyParser.urlencoded({extended: false}));

// //parse json
// app.use(bodyParser.json());

//set up listener to make sure server is functioning
app.listen(PORT, function (){
    console.log("App listening on Port: " + PORT);
});

app.get("/", function(req, res) {
    res.send("It's Working!");
});