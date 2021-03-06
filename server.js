var config = require('./config');

var express = require('express');
var mongoose = require('mongoose');

var app = express();

// Bootstrap application settings
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);

app.listen(3000);
console.log('Express app started on port 3000');

// Connect to mongodb
mongoose.connect(config.db, {
    server: {
        socketOptions: {
            keepAlive: 1
        }
    }
});
mongoose.connection.on('connected', function () {
    console.log('Connected to database')
});
mongoose.connection.on('error', function (err) {
    console.log(err);
});
