/**
 * Created by 李会娟 on 2018/8/14.
 */
var express = require('express');
var router = express.Router();
var lottery= require('../modules/lotteryManage.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users');
});
router.post('/list', function(req, res, next) {
    var rows = req.body.rows;
    var page = req.body.page;
    var phone = req.body.phone;
    var whereSql= req.body.names;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    lottery.getUserInfo(rows,page,phone,whereSql,startTime,endTime,function(err,result,total){
        res.send({total: total, rows: result});
    });
});
router.post('/update',function(req,res){
    var uid=req.body.id;
    var unickName=req.body.nickname;
    var uqq=req.body.qq;
    var uAddress=req.body.address;
    lottery.editUserInfo(uid,unickName,uqq,uAddress,function(err,result1){
        if(!err){
            res.send("true");
        }else {
            console.log(err);
            res.json("false");
        }
    });
});
router.post('/delete',function(req,res){
    var uid=req.body.id;
    lottery.delUserInfo(uid,function(err,result){
        if(!err){
            res.send("true");
        }else {
            console.log(err);
            res.json({suc:false,errMsg:'删除失败！'});
        }
    });
});
module.exports = router;