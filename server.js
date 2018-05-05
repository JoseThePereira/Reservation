//dependencies
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var lists = require("./lists.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));

//parse json
app.use(bodyParser.json());

//set up listener to make sure server is functioning
app.listen(PORT, function (){
    console.log("App listening on Port: " + PORT);
});

app.get("/", function(req, res) {
    res.send("It's Working!");
});

app.get("/api/tables", function(req, res) {
    return res.json(lists.reservedTables);
});

app.get("/api/waitlist", function(req, res) {
    if (lists.reservedTables.length < 5) {
        console.log("There are still open tables available!");
    }
    else {
        return res.json(lists.waitlist);
    }
})