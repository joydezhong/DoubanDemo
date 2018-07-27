var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NewMovieSchema = new Schema({
    title: String,
    movieId: Number,
    grade: Number,
    release: Number,
    duration: String,
    region: String,
    actors: String,
    movieImg: String,
    buyHref: String
});

module.exports = mongoose.model('NewMovie', NewMovieSchema, 'hotMovies');