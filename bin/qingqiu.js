/**
 * Created by 李会娟 on 2018/8/11.
 */
var querystring=require("querystring");
var querystring = require('querystring');
var superagent = require('superagent');
var sup_req = new Object();

function req_post(path,data,callback) {
    superagent
        .post()
        .set('Content-Type','application/x-www-form-urlencoded')
        .set('Accept','application/json')
        .send(JSON.stringify(data))
        .end(function(err,res){
            callback(err,res);
        })
}
function req_get(path,data,callback) {
    path=path+'?'+querystring.stringify(data);
    superagent
        .get(config.visit+path)
        .set('Accept','application/json')
        .end(function(err,res){
            callback(err,res);
        })
}
req_get=req_get;
req_post=req_post;

module.exports=sup_req;