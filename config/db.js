var mongoose = require('mongoose');
var url = 'mongodb://localhost/tododlist';

mongoose.connect(url,{useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});

module.exports = db;