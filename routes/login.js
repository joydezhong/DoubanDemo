var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var UserInfo = require('../models/userModels');

//对话框模式 省去get方式
router.post('/', function(req, res, next){
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;

    UserInfo.find({username: username}, function(err, obj){
        if(err){
            console.log("Error:" + err);
        }else{
            if(obj.length == 0){
                res.send({code: 0, message: "此用户不存在"});
            }else{
                console.log(obj);
                for(var i = 0; i < obj.length; i++){
                    if(obj[i].username == username && obj[i].userpswd == password){
                        req.session.user = req.body.username;
                        res.send({code: 1, message: '登录成功！'});
                    }
                }
            }
        }
    })
});

module.exports = router;