var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FocusBookSchema = new Schema({
    title: String,
    entitle: String,
    bookId: Number,
    copyrightInfo: String,
    grade: String,
    remark: String,
    bookImg: String
});

module.exports = mongoose.model('TopBook', FocusBookSchema, 'topbooks');