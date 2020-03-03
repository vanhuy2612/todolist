var express = require('express');
var db = require('./config/db');
var tasksSchema = require('./app/model/task');

var app = express();


app.get('/', (req,res) => {
    console.log('First app.');
})

app.listen(3000);   