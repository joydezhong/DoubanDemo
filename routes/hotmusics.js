var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var HotMusic = require('../models/hotMusicModel');

router.get('/',function (req, res, next) {

    var page = req.query.page || 1;
    var last_id = req.query.last_id || ""; //下翻id
    var first_id = req.query.first_id || ""; //上翻id
    var size = req.query.pageSize || "";
    var condition = req.query.condition || 9; //翻页情况 1下翻 0上翻 -1跳页 9初始化

    if(condition == 1){
        var id = last_id;
    }else if(condition == 0){
        var id = first_id;
    }else{
        var id = last_id;
    }

    HotMusic.countDocuments({}, (err, count)=>{
        HotMusic.fetch(id, condition, size, page, (err, data)=>{
            if(err) next(err);
            if(condition == 0){
                data.sort(function(x, y){ //解决倒序问题
                    if(x < y){
                        return -1;
                    }
                    if(x > y){
                        return 1;
                    }
                    return 0;
                })
            }
            res.json({code: 1, data: data, count: count, pageCount: Math.ceil(count/24)});
        });
    });

});

module.exports = router;
