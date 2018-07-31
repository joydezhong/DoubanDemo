var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TopMovieSchema = new Schema({
    title: String,
    movieId: Number,
    copyrightInfo: String,
    grade: String,
    remark: String,
    movieImg: String,
    description: String
});
//分页静态方法
TopMovieSchema.statics = {
    fetch(id, condition, size, page, cb){
        if(condition == 1){  //下翻
            return this.find({'_id': {$gt: id}})
                .limit(24)
                .sort({'_id': 1})
                .exec(cb);
        }else if(condition == 0){  //上翻
            return this.find({'_id': {$lt: id}})  //正序 向下查询 变动lt/gt和id
                .limit(24)
                .sort({'_id': -1})
                .exec(cb);
        }else if(condition == -1){  //跳页
            console.log((page-1)*size);
            return this.find({})
                .skip((page-1) * size)
                .limit(24)
                .sort({'_id': 1})
                .exec(cb);
        }else{  //初始化
            return this.find({})
                .limit(24)
                .sort({'_id': 1})
                .exec(cb);
        }
    }
};


module.exports = mongoose.model('TopMovie', TopMovieSchema, 'topMovieList');