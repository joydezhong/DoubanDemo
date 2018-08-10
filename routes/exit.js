var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
    req.session.destroy();
    res.redirect('/#/index');   //重定向首页
});


module.exports = router;