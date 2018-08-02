var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NewMusicSchema = new Schema({
    title: String,
    musicId: Number,
    order: Number,
    days: String,
    movieImg: String,
    upRate: Number,
    info: String
});

module.exports = mongoose.model('NewMusic', NewMusicSchema, 'newMusics');