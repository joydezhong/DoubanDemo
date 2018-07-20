var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    title: String,
    bookId: Number,
    grade: String,
    bookInfo: String,
    description: String
});

module.exports = mongoose.model('NewBook', NewBookSchema, 'newbooks');