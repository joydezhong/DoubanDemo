var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FocusNoBookSchema = new Schema({
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

module.exports = mongoose.model('FocusNoBook', FocusNoBookSchema, 'focusnobook');