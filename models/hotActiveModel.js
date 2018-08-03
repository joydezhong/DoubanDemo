var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HotActiveSchema = new Schema({
    title: String,
    eventId: Number,
    eventImg: String
});

module.exports = mongoose.model('HotActive', HotActiveSchema, 'hotActives');