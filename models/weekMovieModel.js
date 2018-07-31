var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var weekMovieSchema = new Schema({
    title: String,
    movieId: Number,
    grade: String,
    remark: String,
    movieImg: String,
    description: String
});


module.exports = mongoose.model('WeekMovie', weekMovieSchema, 'weeklyMovies');