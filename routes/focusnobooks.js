var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var FocusNoBook = require('../models/focusNoBookModel');

router.get('/',function (req, res, next) {
    FocusNoBook.find({},(err, data)=>{
        if(err){
            res.status(500).json({ error: err })
        }else{
            res.json({code: 1, data: data})
        }

    })
});


module.exports = router;
