var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var home = require('./routes/home');
var status = require('./routes/status');
var value = require('./routes/value');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1', home);
app.use('/api/v1/status', status);
app.use('/api/v1/value', value);

module.exports = app;
