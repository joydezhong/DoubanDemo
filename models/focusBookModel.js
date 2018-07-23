var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FocusBookSchema = new Schema({
    title: String,
    bookId: Number,
    copyrightInfo: String,
    grade: String,
    remark: String,
    bookImg: String,
    price: Number,
    buyHref: String,
    eBookHref: String
});

module.exports = mongoose.model('FocusBook', FocusBookSchema, 'focusbook');