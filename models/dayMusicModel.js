var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DayMusicSchema = new Schema({
    name: String,
    performers: String,
    url: String,
    id: Number,
    averageRating: Array
});

module.exports = mongoose.model('DayMusic', DayMusicSchema, 'dayMusic');