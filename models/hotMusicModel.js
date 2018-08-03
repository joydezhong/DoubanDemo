var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HotMusicSchema = new Schema({
    title: String,
    musicId: Number,
    typeInfo: String,
    grade: String,
    remark: String,
    musicImg: String
});

//分页静态方法
HotMusicSchema.statics = {
    fetch(id, condition, size, page, cb){
        if(condition == 1){  //下翻
            return this.find({'_id': {$gt: id}})
                .limit(25)
                .sort({'_id': 1})
                .exec(cb);
        }else if(condition == 0){  //上翻
            return this.find({'_id': {$lt: id}})  //正序 向下查询 变动lt/gt和id
                .limit(25)
                .sort({'_id': -1})
                .exec(cb);
        }else if(condition == -1){  //跳页
            console.log((page-1)*size);
            return this.find({})
                .skip((page-1) * size)
                .limit(25)
                .sort({'_id': 1})
                .exec(cb);
        }else{  //初始化
            return this.find({})
                .limit(25)
                .sort({'_id': 1})
                .exec(cb);
        }
    }
};

module.exports = mongoose.model('HotMusic', HotMusicSchema, 'topMusicList');