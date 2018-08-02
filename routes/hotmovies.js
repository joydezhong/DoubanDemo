var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var NewMovie = require('../models/newMovieModel');


//查询IP
// const IP2Region = require('/bower_components/ipregion/ip2region.js');
// var instance = IP2Region.create('/bower_components/ipregion/ip2region.db');
// var result = instance.binarySearchSync('61.144.96.142');


router.get('/',function (req, res, next) {
    NewMovie.find({},(err, data)=>{
        if(err){
            res.status(500).json({ error: err })
        }else{
            res.json({code: 1, data: data})
        }
    })
});


module.exports = router;
