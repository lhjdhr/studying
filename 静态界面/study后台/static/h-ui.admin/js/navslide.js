/**
 * Created by 李会娟 on 2018/8/9.
 */
window.onload = function(){
    var oUl = document.getElementById("list");
    var caution = document.getElementById("caution");
    var aLi = oUl.getElementsByTagName('dt');
    var timer = null;  //定时器管理

    var leader = 0;//缓动
    var target = 0;

    var current =0;//停留
    for(var i = 0;i<aLi.length;i++){
        //鼠标移动
        aLi[i].onmouseover = function(){
            //关闭定时器
            clearInterval(timer);
            //获取当前的top值
            target = this.offsetTop;
            //开启定时器
            timer = setInterval(autoCaution,20);
        }
        //鼠标点击
        // aLi[i].onmousedown = function(){
        //     //清楚所有高亮的文字
        //     for(var j = 0;j<aLi.length;j++){
        //         aLi[j].style.background = "#333";
        //     }
        //     //当前点击栏变为红色
        //     this.style.color = "#333";
        //     //提示框
        //     current = this.offsetTop;
        //     caution.style.top = current+"px";
        // }
    }
    //鼠标离开
    oUl.onmouseout = function(){
        //关闭定时器
        clearInterval(timer);
        target = current;
        timer = setInterval(autoCaution,20);
    }
    //缓动动画
    function autoCaution(){
        leader = leader +(target - leader) /10;
        caution.style.top = leader+15+"px";
    }
}