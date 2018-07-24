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
//分页静态方法
FocusBookSchema.statics = {
    fetch(id, cb){
        console.log(id);
        if(id){
            return this.find({'_id': {$lt: id}})
                .limit(24)
                .sort({'_id': 1})
                .exec(cb);
        }else{
            return this.find({})
                .limit(24)
                .sort({'_id': 1})
                .exec(cb);
        }
    }
};

module.exports = mongoose.model('TopBook', FocusBookSchema, 'topbooklist');