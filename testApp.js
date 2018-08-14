/**
 * Created by 李会娟 on 2018/8/14.
 */
var temodule=require('./testModule')
var obj={}
obj.a={}
var a=obj.a  //
console.log(a == obj.a);//true,a和obj.a是同一个对象

a.name='li'
console.log(obj.a.name);//li因为指向的是同一对象

a.name='lui'
a=new Object()
console.log(a.name);//undefined因为
console.log(obj.a.name);//lui因为指向的是同一对象

var str="hello li"
var buf=Buffer.from(str)
console.log(buf);