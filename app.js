var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var newbooks = require('./routes/newbooks');
var focusbook = require('./routes/focusbooks');
var focusnobook = require('./routes/focusnobooks');
var topbooks = require('./routes/topbooks');

var usersRouter = require('./routes/users');

var app = express();

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//connect mongoDB
var mongoose = require('mongoose');
var mongoURL = 'mongodb://localhost/Douban';
mongoose.connect(mongoURL);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.engine('ejs',require('ejs').__express);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/bower_components",express.static(path.join(__dirname, 'bower_components')));



app.use('/', indexRouter);
app.use('/users', usersRouter);

// API
app.use('/api/books/newbooklist', newbooks);
app.use('/api/books/focusbooklist', focusbook);
app.use('/api/books/focusnobooklist', focusnobook);
app.use('/api/books/topbooklist', topbooks);

module.exports = app;
