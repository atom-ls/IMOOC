/**
 * Created by Administrator on 2017-01-10.
 */
var newsleft =document.getElementById("newsleft");
var newsright =document.getElementById("newsright");
var yinText = document.getElementById("yinText");
var wenzi1 =document.getElementById("wenzi1");
var wenzi2 =document.getElementById("wenzi2");
var li1 =document.getElementById("li1");
var li2 =document.getElementById("li2");
var li3 =document.getElementById("li3");
var li4 =document.getElementById("li4");
var elevator3 =document.getElementById("elevator3");
var elevator4 =document.getElementById("elevator4");
var span1 =document.getElementById("span1");
var span2 =document.getElementById("span2");
var span3 =document.getElementById("span3");
var span4 =document.getElementById("span4");
var a1 =document.getElementById("a1");
var a2 =document.getElementById("a2");
var a3 =document.getElementById("a3");
var a4 =document.getElementById("a4");
var li5 =document.getElementById("li5");
var span5 =document.getElementById("span5");
var li5_i = document.getElementById("li5_i");
    newsleft.onmouseover= function () {
       animate(wenzi1, {"top": 50});
       wenzi1.style.border = "none";
       yinText.style.display="block";
   }
    newsright.onmouseover= function () {
        animate(wenzi2, {"top": 50});
    }
    newsleft.onmouseout= function () {
        animate(wenzi1,{"top":110})
        yinText.style.display="none";
    };
    newsright.onmouseout= function () {
        animate(wenzi2,{"top":110})

    };
    li1.onmouseover= function () {
    span1.style.display="block";
    a1.style.background="none";
}
    li1.onmouseout= function () {
    span1.style.display="none";
    a1.style.background="url(images/r1_c2.png) 0  0 ";
}
    li2.onmouseover= function () {
    span2.style.display="block";
    a2.style.background="none";
}
    li2.onmouseout= function () {
    span2.style.display="none";
    a2.style.background="url(images/r1_c2.png) 0 -57px";
}
    li3.onmouseover= function () {
        elevator3.style.display="block";
        span3.style.display="block";
        a3.style.background="none";
    }
    li3.onmouseout= function () {
    elevator3.style.display="none";
    span3.style.display="none";
    a3.style.background="url(images/r1_c2.png) 0  -114px ";
}
    li4.onmouseover= function () {
        elevator4.style.display="block";
        span4.style.display="block";
        a4.style.background="none";
    }
    li4.onmouseout= function () {
        elevator4.style.display="none";
        span4.style.display="none";
        a4.style.background="url(images/r1_c2.png) 0  -171px ";
    }
window.onscroll = function () {
    if(scroll().top>=500){
        li5.style.display= "block";
        li5.onmouseover = function () {
            span5.style.display = "block";
            li5_i.style.display = "none"
        }
        li5.onmouseout = function () {
            span5.style.display = "none";
            li5_i.style.display = "block";
        }
    } else {
        li5.style.display = "none";
    }
}





    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15);
    }
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    };
