/**
 * Created by 李会娟 on 2018/8/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('main', { title: 'Express' });
});
module.exports = router;