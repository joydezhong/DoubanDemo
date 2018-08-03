var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var HotActive = require('../models/hotActiveModel');

router.get('/',function (req, res, next) {
    HotActive.find({},(err, data)=>{
        if(err){
            res.status(500).json({ error: err })
        }else{
            res.json({code: 1, data: data})
        }
    })
});

module.exports = router;
