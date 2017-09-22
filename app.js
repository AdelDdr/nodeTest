var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var postController = require('./post/postController');
app.use('/users', UserController);
app.use('/post', postController);

module.exports = app;