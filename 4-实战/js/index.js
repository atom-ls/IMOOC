/*顶部轮播图start*/
var flag = true;
var config1 = [
    {
        "width": 600,
        "height": 200,
        "top": 20,
        "left": 0,
        "opacity": 0.9,
        "zIndex": 2
    },
    {
        "width": 800,
        "height": 240,
        "top": 0,
        "left": 200,
        "opacity": 1,
        "zIndex": 3
    },
    {
        "width": 600,
        "height": 200,
        "top": 20,
        "left": 600,
        "opacity": 0.9,
        "zIndex": 2
    }
];
var config3 = [
    {
        "width": 600,
        "height": 200,
        "top": 20,
        "left": 0,
        "opacity": 0.9,
        "zIndex": 2
    },
    {
        "width": 800,
        "height": 240,
        "top": 0,
        "left": 200,
        "opacity": 1,
        "zIndex": 3
    },
    {
        "width": 600,
        "height": 200,
        "top": 20,
        "left": 600,
        "opacity": 0.9,
        "zIndex": 2
    }
];
var bannerBox = document.getElementById("bannerBox")
var bannerPic = document.getElementById("bannerPic");
var bannerUl = bannerPic.children[0];
var bannerImgs = bannerUl.getElementsByTagName("img");
var arrLeft = document.getElementById("arrLeft")
var arrRight = document.getElementById("arrRight")
var odt = document.getElementById("odt");
var olLis = odt.children;
var timers = null ;

//鼠标经过 箭头亮背景色
arrLeft.onmouseover = function () {
    arrLeft.style.backgroundColor = "#ccc";
}
arrRight.onmouseover = function () {
    arrRight.style.backgroundColor = "#ccc";
}
arrLeft.onmouseout = function () {
    arrLeft.style.backgroundColor = "";
}
arrRight.onmouseout = function () {
    arrRight.style.backgroundColor = ""
}
//各就各位
/*for (var i = 0; i < bannerImgs.length; i++) {
 animate(bannerImgs[i], config1[i]);
 }*/
function assign1() { //各就各位的封装函数   //assign1重新分配
    for (var i = 0; i < bannerImgs.length; i++) {
        animate(bannerImgs[i], config1[i],15, function () {
            flag = true;
        });
    }
}

assign1();
//点击箭头
var pic = 0;
var square = 0;
arrRight.onclick = function () {
    if (flag) { //节流阀打开 执行动画
        flag = false;   //只要执行了 就关闭节流阀
        //arr.push(arr.shift());
        config1.push(config1.shift());  //点击右箭头 让配置单 把最前的放到最后
        assign1();
        //pic++;
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].className = "";
        }
        olLis[square].className = "dot1";
    }

};


arrLeft.onclick = function () {
    if (flag) { //节流阀打开 执行动画
        flag = false;   //只要执行了 就关闭节流阀
        //arr.unshift(arr.pop);
        config1.unshift(config1.pop());  //点击右箭头 让配置单 把最后的放到最前
        assign1();
        //pic--;
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].className = "";
        }
        olLis[square].className = "dot1";
    }
}

//按钮
for (var i = 0; i < olLis.length; i++) {
    olLis[i].index = i;
    olLis[i].onclick = function () {
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].className = "";
        }
        this.className = "dot1";
        //固定的按钮对应固定的图片；第一个按钮对应
        config1 = config3;
        if(this.index==0){
            animate(bannerImgs[0],config1[1],20);
            animate(bannerImgs[1],config1[2],20);
            animate(bannerImgs[2],config1[0],20);
            square=0;
        };
        if(this.index==1) {
            animate(bannerImgs[1],config1[1],20);
            animate(bannerImgs[2],config1[2],20);
            animate(bannerImgs[0],config1[0],20);
            square=1;
        };
        if(this.index==2){
            animate(bannerImgs[2],config1[1],20);
            animate(bannerImgs[0],config1[2],20);
            animate(bannerImgs[1],config1[0],20);
            square=2;
        }
    };
}


//添加自动旋转
timers = setInterval(playNext, 2000);//每隔二秒播放下一张
function playNext() {
    arrRight.onclick();
}
//鼠标经过bannerBox 停止自动旋转
bannerBox.onmouseover = function () {
    clearInterval(timers);
}
bannerBox.onmouseout = function () {
    timers = setInterval(playNext, 2000);
}

/*顶部轮播图end*/



/*课程列表start*/
var mainNav = document.getElementById("mainNav");
var mainNavA = mainNav.getElementsByTagName("a");
var mainCenter = document.getElementById("mainCenter");
var ul = mainCenter.children[0];
var ulLis = ul.children;


//菜单栏变色
for (var i = 0; i < mainNavA.length; i++) {
    //鼠标经过变色
    mainNavA[i].onmouseover = function () {
        for (var j = 0; j < mainNavA.length; j++) {
            mainNavA[j].className = "";
        }
        this.className = "mainColor";

    };

    //点击跳转
    mainNavA[i].index = i;
    mainNavA[i].onclick = function () {
        for (var k = 0; k < ulLis.length; k++) {
            ulLis[k].className = "";
            mainNavA[k].className = "";
        }
        this.className = "mainColor";
        ulLis[this.index].className = "cur";
    }

}


//课程列表
var lesson = document.getElementById("lesson");
var div = lesson.children[0];
var imgs = lesson.getElementsByTagName("img");
var h3 = lesson.getElementsByTagName("h3");
var arrH3 = [
    {innerHTML: " webApp书城整站开发,电商项目"},
    {innerHTML: "高性能可扩展MySQL数据库设计及架构优化,电商项目"},
    {innerHTML: "强力django+杀手级xadmin  打造上线标准的在线教育平台"},
    {innerHTML: "Android自动化测试实战  工具 框架 脚本,电商项目"},
    {innerHTML: "微信小程序入门与实战  常用组件 API 开发技巧 项目实战"},
    {innerHTML: "Vue.js高仿饿了么外卖App 2016最火前端框架"},
    {innerHTML: "Android专项测试-Python篇  10年测试经验讲师"},
    {innerHTML: "Android5.0+高级动画开发 矢量图动画 轨迹动画 路径变换"},
    {innerHTML: "算法与数据结构C++精解"},
    {innerHTML: "6小时用 jQuery作业 实现小应用"},
    {innerHTML: "Android网络层架构设计实战  基于okhttp3"},
    {innerHTML: "React Native快速开发 厕所在哪App LBS定位 框架封装"},
    {innerHTML: "Laravel和 AngularJS开发全栈知乎"},
    {innerHTML: "React Native贯穿全栈开发App"},
    {innerHTML: "Yii2.0打造完整电商平台"},
    {innerHTML: "Python高级编程技巧实战"},
    {innerHTML: "飞速上手的跨平台App开发"},
    {innerHTML: "所向披靡的响应式开发"},
    {innerHTML: "扛得住的MySQL数据库架构"},
    {innerHTML: "前端后台ThinkPHP开发整站"},
    {innerHTML: "Node.js七天搞定微信公众号"},
    {innerHTML: "组件方式开发 Web App全站"}
]

var p = lesson.getElementsByTagName("p");
var arrP = [
    {innerHTML: "HTML5、Vue.js、zepto、Koa框架综合运用"},
    {innerHTML: "从基础设计入手，设计高性能可扩展的千万级数据库架构"},
    {innerHTML: "全面掌握django框架,轻松应对python web开发工作"},
    {innerHTML: "找Android自动化测试工作必学的主流工具、框架和自动化脚本"},
    {innerHTML: "开发一个集新闻阅读与电影影讯为一体的小程序，学会小程序开发"},
    {innerHTML: "vue.js 兼具 angular.js 和 react.js 的优点，并剔除它们的缺点"},
    {innerHTML: "一套让你学会Android App压力，接口，性能等专项测试技术的课程"},
    {innerHTML: "Android5.0高级动画开发精髓，技术原理+实战技巧详解"},
    {innerHTML: "深入讲解面试和实际开发中都会遇到的算法和数据结构问题"},
    {innerHTML: "搭建一个清单应用，一次性掌握jQuery核心功能和使用技巧"},
    {innerHTML: "设计实现完全解耦合、灵活扩展的网络框架，打造属于自己的框架"},
    {innerHTML: "真实iOS APP项目讲解，多终端技术轻松实现一款APP从0到1的突破"},
    {innerHTML: "前端AngularJS，后端Laravel技术,全栈开发一个您自己的“知乎”"},
    {innerHTML: "18个小时纯干货内容，让您一个人从前端到后端完成APP开发。"},
    {innerHTML: "购物、下单、支付、收货...各功能模块开发，打造京东式电商平台"},
    {innerHTML: "精选50个python训练任务，提升实战技能与高效编程技巧"},
    {innerHTML: "以HTML5移动App开发框架Ionic，开发不受平台限制的App"},
    {innerHTML: "用一套代码开发出不受设备型号、尺寸限制的互联网金融网站"},
    {innerHTML: "面面俱到讲解影响MySQL性能的各个因素，将MySQL架构了然于胸。"},
    {innerHTML: "用PHP+MySQL+Ajax开完新闻资讯整站，实现“小全栈”的梦想"},
    {innerHTML: "Koa框架、ES2015新特性、MongoDB，开发微信公众号"},
    {innerHTML: "用HTML5/CSS3/JS流行技术，以组件式开发WebApp全站。"}
]
var money = lesson.getElementsByClassName("money");
var arrMoney = [
    {innerHTML: "&yen128.00"},
    {innerHTML: "&yen249.00"},
    {innerHTML: "&yen369.00"},
    {innerHTML: "&yen179.00"},
    {innerHTML: "&yen149.00"},
    {innerHTML: "&yen198.00"},
    {innerHTML: "&yen148.00"},
    {innerHTML: "&yen99.00"},
    {innerHTML: "&yen148.00"},
    {innerHTML: "&yen88.00"},
    {innerHTML: "&yen188.00"},
    {innerHTML: "&yen128.00"},
    {innerHTML: "&yen228.00"},
    {innerHTML: "&yen368.00"},
    {innerHTML: "&yen268.00"},
    {innerHTML: "&yen168.00"},
    {innerHTML: "&yen88.00"},
    {innerHTML: "&yen128.00"},
    {innerHTML: "&yen199.00"},
    {innerHTML: "&yen128.00"},
    {innerHTML: "&yen199.00"},
    {innerHTML: "&yen78.00"}
]

var num = lesson.getElementsByClassName("num");
var arrNum = [
    {innerHTML: "2187人学习"},
    {innerHTML: "34人学习"},
    {innerHTML: "160人学习"},
    {innerHTML: "67人学习"},
    {innerHTML: "1717人学习"},
    {innerHTML: "1483人学习"},
    {innerHTML: "187人学习"},
    {innerHTML: "148人学习"},
    {innerHTML: "684人学习"},
    {innerHTML: "398人学习"},
    {innerHTML: "233人学习"},
    {innerHTML: "351人学习"},
    {innerHTML: "293人学习"},
    {innerHTML: "434人学习"},
    {innerHTML: "731人学习"},
    {innerHTML: "611人学习"},
    {innerHTML: "1298人学习"},
    {innerHTML: "2096人学习"},
    {innerHTML: "756人学习"},
    {innerHTML: "2070人学习"},
    {innerHTML: "1248人学习"},
    {innerHTML: "1937人学习"}
]

for (var i = 0; i < 21; i++) {  //克隆
    var clone = div.cloneNode(true);
    lesson.appendChild(clone);
}
for (var i = 0; i < imgs.length; i++) {//换图
    imgs[i].src = "picture/" + (i + 1) + ".jpg";
}
for (var i = 0; i < h3.length; i++) {//换h3文字
    h3[i].innerHTML = arrH3[i].innerHTML;
}
for (var i = 0; i < h3.length; i++) {//换p文字
    p[i].innerHTML = arrP[i].innerHTML;
}
for (var i = 0; i < money.length; i++) {//换价格
    money[i].innerHTML = arrMoney[i].innerHTML;
}
for (var i = 0; i < num.length; i++) {//换人数
    num[i].innerHTML = arrNum[i].innerHTML;
}

//鼠标经过文字冒出
var conBox = lesson.getElementsByClassName("content-boxes");
var upward = lesson.getElementsByClassName("intro");

for (var i = 0; i < conBox.length; i++) {
    conBox[i].index = i;
    conBox[i].onmouseover = function () {
        animate(upward[this.index], {"bottom": 40},15);
    };
    conBox[i].onmouseout = function () {
        animate(upward[this.index], {"bottom": 0},15);
    };
}
/*课程列表end*/
//header部分js特效
var headerSearch = document.getElementById("header_search");
var headerSearchtxt = headerSearch.children[0];
var headerSearchA = headerSearch.children[1];
var header_car = document.getElementById("header_car");
var headercarcontent = document.getElementById("headercarcontent");
headerSearchtxt.onfocus = function () {
    headerSearchA.style.display = "none";
}
headerSearchtxt.onblur = function () {
    if(headerSearchtxt.value ===""){
        headerSearchA.style.display = "block";
    }
}
header_car.onmouseover = function () {
    headercarcontent.style.display = "block";
}
header_car.onmouseout = function () {
    headercarcontent.style.display = "none";
}
headercarcontent.onmouseover = function(){
    headercarcontent.style.display = "block";
}
headercarcontent.onmouseout = function(){
    headercarcontent.style.display = "none";
}

//footer部分js特效
var footericon = document.getElementById("footer_icon");
var footericonas = footericon.children;

var wechaterweima = document.getElementById("wechaterweima");
for (var i = 0; i < footericonas.length; i++) {
    footericonas[i].index = i;
    footericonas[i].style.background = "url(images/sprite.png) no-repeat -37px -" + (158 - i * 34) + "px";
    footericonas[i].style.right = 12 + (i * 44) + "px";
    footericonas[i].onmouseover = function () {
        if (this.index === 2) {
            wechaterweima.style.display = "block";
        }
        this.style.opacity = 1;
    }
    footericonas[i].onmouseout = function () {
        if (this.index === 2) {
            wechaterweima.style.display = "none";
        }
        this.style.opacity = 0.5;
    }
}

//侧面固定slider的js特效
    var li1 = document.getElementById("li1");
    var li2 = document.getElementById("li2");
    var li3 = document.getElementById("li3");
    var li4 = document.getElementById("li4");
    //var li5 =document.getElementById("li5");
    var elevator3 = document.getElementById("elevator3");
    var elevator4 = document.getElementById("elevator4");
    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");
    var span3 = document.getElementById("span3");
    var span4 = document.getElementById("span4");
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var li5 = document.getElementById("li5");
    var span5 = document.getElementById("span5");
    var li5_i = document.getElementById("li5_i");

    li1.onmouseover = function () {
        span1.style.display = "block";
        a1.style.background = "none";
    }
    li1.onmouseout = function () {
        span1.style.display = "none";
        a1.style.background = "url(images/r1_c2.png) 0  0 ";
    }
    li2.onmouseover = function () {
        span2.style.display = "block";
        a2.style.background = "none";
    }
    li2.onmouseout = function () {
        span2.style.display = "none";
        a2.style.background = "url(images/r1_c2.png) 0 -57px";
    }
    li3.onmouseover = function () {
        elevator3.style.display = "block";
        span3.style.display = "block";
        a3.style.background = "none";
    }
    li3.onmouseout = function () {
        elevator3.style.display = "none";
        span3.style.display = "none";
        a3.style.background = "url(images/r1_c2.png) 0  -114px ";
    }
    li4.onmouseover = function () {
        elevator4.style.display = "block";
        span4.style.display = "block";
        a4.style.background = "none";
    }
    li4.onmouseout = function () {
        elevator4.style.display = "none";
        span4.style.display = "none";
        a4.style.background = "url(images/r1_c2.png) 0  -171px ";
    }
    //侧面滑动到500px时，会显示返回顶部的按钮
    window.onscroll = function () {
        if (scroll().top >= 500) {
            li5.style.display = "block";
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

