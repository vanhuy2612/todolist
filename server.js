'use strict'

const express = require('express');
const Config = require('./config');
const mongoose = require('mongoose');
const { PORT = 3000 } = process.env;
const app = express();
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
