/**
 * Created by 李会娟 on 2018/8/9.
 */
var express=require('express');
var router = express.Router(); //可使用express.Router类创建模块化，可挂载的句柄
var multiparty = require('multiparty');  /*图片上传模块  即可以获取form表单的数据 也可以实现上传图片*/
var DB=require('../../bin/db')
var fs=require('fs');

// router.get('/',function(req,res){
//     DB.find('notes',{},function(err,data){
//         res.render('admin/index',{
//             list:data
//         });
//         console.log(data)
//     })
// })

router.get('/',function(req,res){
    res.render('admin/index');
});
router.get('/test2',function(req,res){
    res.render('admin/notes/test2');
})
router.get('/addnotes',function(req,res){
    res.render('admin/notes/addnotes');
})

router.get('/noteslist',function (req,res) {
    DB.find('notes',{},function(err,data){
        res.render("admin/notes/noteslist",{
            list:data
        });
    })
});


router.post('/doAdd',function(req,res){
    var form = new multiparty.Form();//获取表单的数据 以及post过来的图片
    form.parse(req, function(err, fields) {
        var planner=fields.planner[0];
        var members=fields.members[0];
        var name=fields.name[0];
        var starttime=fields.starttime[0];
        DB.insert('notes',{
            planner:planner,
            members:members,
            name,
            starttime
        },function(err,data){
            if(!err){
                res.redirect('/admin/notes/noteslist');
            }
        })
    });
});
router.get('/delete',function(req,res){
    var  id=req.query.id;
    DB.deleteOne('notes',{"_id":new DB.ObjectID(id)},function(err){
        if(!err){
            res.redirect('/admin/notes/noteslist');
        }
    })
});
router.get('/edit',function(req,res){
    var id=req.query.id;
    // console.log(id);
    //去数据库查询这个id对应的数据     自增长的id 要用{"_id":new DB.ObjectID(id)
    DB.find('notes',{"_id":new DB.ObjectID(id)},function(err,data){
        res.render('admin/notes/edit',{
            list:data[0]
        });
    });
})
router.post('/doEdit',function(req,res){
    var form = new multiparty.Form();
    form.parse(req, function(err, fields) {
        //获取提交的数据以及图片上传成功返回的图片信息
        var _id=fields._id[0];   /*修改的条件*/
        var planner=fields.planner[0];
        var name=fields.name[0];
        var starttime=fields.starttime[0];

            var setData={
                planner,
                name,
                starttime

            };
        DB.update('notes',{"_id":new DB.ObjectID(_id)},setData,function(err,data){
            if(!err){
                res.redirect('/admin/notes/noteslist');
            }

        })
    });
})

module.exports = router; //暴露rooter模块


