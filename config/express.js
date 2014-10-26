var express = require('express');
var ejsLocals = require('ejs-locals');
var bodyParser = require('body-parser');

module.exports = function (app) {

    // Static files middleware
    app.use(express.static('public'));

    // set views path, template engine and default layout
    app.engine('ejs', ejsLocals);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // bodyParser should be above methodOverride
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

}
