/**
 * Created by 李会娟 on 2018/8/9.
 */
var express=require('express');
var path = require('path');
var app=new express();  /*实例化*/

var session = require("express-session");//保存用户信息

app.use(session({    //配置中间件  固定格式
    secret: 'keyboard cat',//这是我随便写的String字符串
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge:1000*60*30
    },
    rolling:true
}))
app.get('/test',function (req,res) {
    res.render('test')
})
//引入模块
 var admin =require('./routes/admin.js');
var index =require('./index.js');

// //使用ejs模板引擎   默认找views这个目录
app.set('view engine','ejs');

//配置public目录为我们的静态资源目录
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.use('/admin',admin); //引入admin 的模块
app.use('/index',index)
app.listen(8010);
// console.log("http://127.0.0.1:8010/admin/notes");

console.log("http://127.0.0.1:8010/admin/notes");