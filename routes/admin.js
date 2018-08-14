/**
 * Created by 李会娟 on 2018/8/9.
 */
var express=require('express')
var router=express.Router();//可使用express.Router类创建模块化，可挂载的句柄


var  notes=require('./admin/notes')//所有的路由经过的地方
    // plans=require('./admin/plans')


// 配置路由,/admin/letcure  加载相应的模块
router.use('/notes',notes);
// router.use('/plans',plans);

 module.exports=router;//暴露rooter模块


