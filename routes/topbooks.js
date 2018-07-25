var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var TopBook = require('../models/topBookModel');

// router.get('/',function (req, res, next) {
//     TopBook.find({},(err, data)=>{
//         if(err){
//             res.status(500).json({ error: err })
//         }else{
//             res.json({code: 1, data: data})
//         }
//
//     })
// });

//启动翻页 改版
var beforePage = 1;
router.get('/', function(req, res, next){

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

    TopBook.countDocuments({}, (err, count)=>{
        TopBook.fetch(id, condition, size, page, (err, data)=>{
            if(err) next(err);
            res.json({code: 1, data: data, count: count, pageCount: Math.ceil(count/24)});
        });
    });


});



module.exports = router;
