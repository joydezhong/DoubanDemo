var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usaMovieSchema = new Schema({
    date: String,
    subjects: Array,
    title: String
});


module.exports = mongoose.model('UsaMovie', usaMovieSchema, 'usaMovies');