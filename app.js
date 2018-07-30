var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//book
var newbooks = require('./routes/newbooks');
var focusbook = require('./routes/focusbooks');
var focusnobook = require('./routes/focusnobooks');
var topbooks = require('./routes/topbooks');
//movie
var hotmovies = require('./routes/hotmovies');
var willmovies = require('./routes/willmovies');
var topmovies = require('./routes/topmovies');

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

// API books
app.use('/api/books/newBookList', newbooks);
app.use('/api/books/focusBookList', focusbook);
app.use('/api/books/focusNoBookList', focusnobook);
app.use('/api/books/topBookList', topbooks);
//API movies
app.use('/api/movies/hotMovieList', hotmovies);
app.use('/api/movies/willMovieList', willmovies);
app.use('https://api.douban.com//v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E', topmovies);


module.exports = app;
