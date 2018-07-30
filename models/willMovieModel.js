var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WillMovieSchema = new Schema({
    title: String,
    movieId: Number,
    grade: String,
    release: String,
    type: String,
    region: String,
    movieImg: String,
    videoHref: String
});

module.exports = mongoose.model('WillMovie', WillMovieSchema, 'willMovies');