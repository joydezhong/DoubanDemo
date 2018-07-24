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
router.get('/', function(req, res, next){
    var id = "";
    console.log(req.body);
    TopBook.countDocuments({}, (err, count)=>{
        TopBook.fetch(id, (err, data)=>{
            if(err) next(err);
            res.json({code: 1, data: data, count: count});
        });
    });
});



module.exports = router;
