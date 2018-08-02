var express = require('express');
var router = express.Router();

// var mongoose = require('mongoose');
// var NewMovie = require('../models/newMovieModel');


//通过ip获取城市名字 依赖bower_components的ipregion
const IP2Region = require('../bower_components/ipregion/ip2region');
const asyncFor = require('../bower_components/ipregion/asyncFor');
// var instance = IP2Region.create('./bower_components/ipregion/ip2region.db');
instance = new IP2Region({ dbPath: './bower_components/ipregion/ip2region.db' });

router.get('/',function (req, res, next) {
    var ip = req.query.ip;
    console.log(ip);
    var result = instance.binarySearchSync(ip);
    if(result){
        res.json({code: 1, data: result});
    }else{
        res.status(500).json({ error: 'error' });
    }
});

module.exports = router;
