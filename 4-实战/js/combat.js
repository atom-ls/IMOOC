/**
 * Created by dayedeng on 2017/1/10.
 */
//老师介绍 开始
var mes = document.getElementById("mes");
var mLis = mes.children;
var ti = null;
for(var i = 0 ; i<mLis.length;i++){
    var mSpan = mLis[i].children[0];
    mSpan.style.background = "url(images/"+(i+1)+".jpg) no-repeat center center";
    mSpan.style.backgroundSize = "100% 100%";
}

for(var j = 0 ;j<mLis.length;j++){
    mLis[j].onmouseover = function(){
        var tSpan = this.children[1].children[2];
        var tBottom =this.children[1].children[3];
        var tP = getPreviousElement(tSpan);
        var tH3 = getPreviousElement(tP);
        this.style.backgroundColor = "white";
        tSpan.style.display = "block";
        tBottom.style.display = "block";
        tBottom.children[0].style.color = "red";
        animate(this,{"bottom":180,"height":452},10);
        tP.style.color = "black";
        tH3.style.color = "black";
        clearInterval(ti);
    }
    mLis[j].onmouseout = function(){
        var tSpan = this.children[1].children[2];
        var tBottom =this.children[1].children[3];
        var tP = getPreviousElement(tSpan);
        var tH3 = getPreviousElement(tP);
        this.style.backgroundColor = "";
        tSpan.style.display = "none";
        tBottom.style.display = "none";
        tBottom.children[0].style.color = "";
        animate(this,{"bottom":0,"height":332},10)
        tP.style.color = "";
        tH3.style.color = "";
        ti  = setInterval(tplay,3000);
    }
}
var tUl = document.getElementById("t-ul");
var tLis =  tUl.children;
for(var i = 0 ; i<tLis.length;i++){
    tLis[i].index = i;
    tLis[i].onclick = function(){
        for(var i = 0 ; i <tLis.length;i++){
            tLis[i].className = "";
        }
        this.className = "t-current";
        animate(mes,{"left":-this.index*1200},15)
    }
}
var teacher = document.getElementById("teach");
var tbtn = document.getElementById("tbtn");
var pr_L = tbtn.children[0];
var ne_R = tbtn.children[1];
teacher.onmouseover = function(){
    animate(tbtn,{"opacity":1},50)
    tbtn.style.display = "block";
}
teacher.onmouseout = function(){
    animate(tbtn,{"opacity":0},50)
    tbtn.style.display = "none";
}
var tpic = 0 ;
var flag = true;
pr_L.onclick = function(){
   if(flag){
       flag = false;
       if(tpic === 0){
           tpic = 4;
       }
       tpic--;
       var target = -tpic*1200;
       animate(mes,{"left":target},15,function(){
           flag = true;
       });
       for(var i = 0 ; i<tLis.length;i++){
           tLis[i].className = "";
       }
       tLis[tpic].className ="t-current";
   }
}
ne_R.onclick = function(){
    if(flag){
        flag = false;
        if(tpic === 3){
            tpic = -1 ;
        }
        tpic++;
        var target = -tpic*1200;
        animate(mes,{"left":target},15,function(){
            flag = true;
        });
        for(var i = 0 ; i<tLis.length;i++){
            tLis[i].className = "";
        }
        tLis[tpic].className ="t-current";
    }
}
ti = setInterval(tplay,3000);
function tplay(){
    ne_R.onclick();
}
//老师介绍 结束

//用户评价轮播 开始
var cSlide = document.getElementById("cSlide");
var sUl = cSlide.children[0];
var slis = sUl.children;
var iBtn = document.getElementById("ibtn");
var next = iBtn.children[0];
var prev = iBtn.children[1];
var timer = null;

for(var i = 0 ; i< slis.length;i++){
    var imgI = slis[i].children[0];
    imgI.src = "images/user"+(i+1)+".jpg";
}

    var flag = true;
    var config2 = [
        {
            "width": 800,
            "left": 0,
            "opacity": 0.3,
            "zIndex": 1,
        },//0
        {
            "width": 800,
            "left": 100,
            "opacity": 0.6,
            "zIndex": 2,
        },//1
        {
            "width": 800,
            "left": 200,
            "opacity": 1,
            "zIndex": 3,
        },//2
        {
            width: 800,
            left: 300,
            opacity: 0.6,
            zIndex: 2,
        },//3
        {
            "width": 800,
            left: 400,
            "opacity": 0.3,
            "zIndex": 1,
        },//4
    ];

    cSlide.onmouseover = function(){
        iBtn.style.display ="block";
        animate(iBtn,{"opacity":1},30);
        clearInterval(timer);
    }
    cSlide.onmouseout = function(){
        iBtn.style.display ="none";
        animate(iBtn,{"opacity":0},30);
        timer = setInterval(play,1500);
    }
    function assign2(){
        for(var i = 0 ; i<slis.length;i++){
            animate(slis[i],config2[i],15,function(){
                flag = true;
            })
        }
    }
    assign2();

    next.onclick = function(){
        if(flag){
            flag = false;
            config2.push(config2.shift());
            assign2();
        }
    };

    prev.onclick = function(){
        if(flag){
            flag = false;
            config2.unshift(config2.pop());
            assign2();
        }
    }
    timer = setInterval(play,1500);
    function play(){
        prev.onclick();
    }
//用户评价轮播 结束

