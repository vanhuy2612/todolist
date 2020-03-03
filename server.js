const express = require('express');
const Config = require('./config');
const mongoose = require('mongooes');
const { PORT = 3000 } = process.env;
const app = express();

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
