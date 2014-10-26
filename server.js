var express = require('express');
var mongoose = require('mongoose');

var app = express();

// Bootstrap application settings
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);

app.listen(3000);
console.log('Express app started on port 3000');
