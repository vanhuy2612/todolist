'use strict'
require('dotenv').config().parsed;
const express = require('express');
const Config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { PORT = 3000 } = process.env;
const app = express();
// Disable caching of scripts for easier testing
app.use(function noCache(req, res, next) {
    if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
    }
    next();
});

app.locals.pretty = true;
app.locals.compileDebug = true;

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./routes/index'));
mongoose.connect(Config.mongodb.dbConnectURI, Config.mongodb.options);
mongoose.connection.on('error', function (e) {
  console.log('********************************************');
  console.log('*          MongoDB was not connect.     *');
  console.log('********************************************\n');
  console.log(e)
  process.exit(1);
});

const server = require('http').createServer(app);
server.listen(PORT);
console.log('Server is listening on http:localhost:' + PORT);
