var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

//city
var getcity = require('./routes/getcity');
//book
var newbooks = require('./routes/newbooks');
var focusbook = require('./routes/focusbooks');
var focusnobook = require('./routes/focusnobooks');
var topbooks = require('./routes/topbooks');
//movie
var hotmovies = require('./routes/hotmovies');
var willmovies = require('./routes/willmovies');
var topmovies = require('./routes/topmovies');
var weekmovies = require('./routes/weekmovies');
var usamovies = require('./routes/usamovies');
//music
var daymusics = require('./routes/daymusics');
var newmusics = require('./routes/newmusics');
var hotmusics = require('./routes/hotmusics');
//actives
var hotactives = require('./routes/hotactives');



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

// login register API


//get city with ip
app.use('/api/getCity', getcity);

// API books
app.use('/api/books/newBookList', newbooks);
app.use('/api/books/focusBookList', focusbook);
app.use('/api/books/focusNoBookList', focusnobook);
app.use('/api/books/topBookList', topbooks);
//API movies
app.use('/api/movies/hotMovieList', hotmovies);
app.use('/api/movies/willMovieList', willmovies);
app.use('/api/movies/topMovieList', topmovies);
app.use('/api/movies/weekMovieList', weekmovies);
app.use('/api/movies/usaMovieList', usamovies);
//API musics
app.use('/api/musics/dayMusicList', daymusics);
app.use('/api/musics/newMusicList', newmusics);
app.use('/api/musics/hotMusicList', hotmusics);
//API actives
app.use('/api/actives/hotActiveList', hotactives);

// API error
app.get('*', function(req, res) {
    res.render('/error/error404.ejs',{ title: '', data:''});
})


module.exports = app;
