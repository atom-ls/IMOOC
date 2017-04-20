/**
 * Created by CTT on 2017/1/9.
 */

/**
 * Created by Administrator on 2017/1/8.
 */

window.onload= function () {
    //header部分的js特效
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

    //设置轮播图
    var iconn = document.getElementById("iconn");
    var bbkg = document.getElementById("bbkg");
    var tus = bbkg.getElementsByTagName("div");
    var left = iconn.children[0];
    var right = iconn.children[1];
    var pic = 0;
    var timers = null;
    var ul = document.getElementById("circle");
    var lis = ul.children;
    lis[0].className = "current";
    bbkg.parentNode.onmouseover= function () {
        clearInterval(timers);
    };
    bbkg.parentNode.onmouseout= function () {
        timers = setInterval(function () {
            right.onclick();
        }, 2500);
    };
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = "";
                tus[j].style.display = "none";
                tus[j].style.opacity = 0;

            }
            this.className = "current";
            pic = this.index;
            tus[pic].style.display = "block";
            //tus[pic].style.opacity = 1;
            animate(tus[pic],{"opacity":1},80);
        };
    }
    left.onclick = function () {
        if (pic === 0) {
            pic = 5;
        }
        pic--;
        for (var i = 0; i < tus.length; i++) {
            tus[i].style.display = "none";
            tus[i].style.opacity = 0;
            lis[i].className = "";
        }
        tus[pic].style.display = "block";
        lis[pic].className = "current";
        animate(tus[pic], {"opacity": 1},80);
    };
    right.onclick = function () {
        if (pic === 4) {
            pic = -1;
        }
        pic++;
        for (var i = 0; i < tus.length; i++) {
            tus[i].style.display = "none";
            tus[i].style.opacity = 0;
            lis[i].className = "";
        }
        tus[pic].style.display = "block";
        animate(tus[pic], {"opacity": 1},80);
        lis[pic].className = "current";
    };
    timers = setInterval(function () {
        right.onclick();
    }, 2500);
    left.onmouseover = function () {
        this.style.backgroundColor = "rgba(7,17,27,.5)";
    };
    right.onmouseover = function () {
        this.style.backgroundColor = "rgba(7,17,27,.5)";
    };
    left.onmouseout = function () {
        this.style.backgroundColor = "";
    };
    right.onmouseout = function () {
        this.style.backgroundColor = "";
    };
    var kf = document.getElementById("u_left");
    var uldiv=document.getElementById("uldiv");
    var  kfs = kf.children;
    for (var i = 0; i < kfs.length; i++) {
        kfs[i].onmouseover = function () {
            for (var j = 0; j < kfs.length; j++) {
                kfs[j].style.backgroundColor = "";
            }
            this.style.backgroundColor = "rgba(6,4,4,.3)";
        };
        kfs[i].onmouseout= function () {
            this.style.backgroundColor = "";
        }
    }

    //设置轮播图下面实战
    var szdiv1=document.getElementById("szdiv1");
    var divs1=szdiv1.getElementsByTagName("div");
    var szdiv2=document.getElementById("szdiv2");
    var divs2=szdiv2.getElementsByTagName("div");
    for(var i=0;i<divs1.length;i++){
        divs1[i].onmouseover= function () {
            animate(this,{bottom:0},15)
        };
        divs1[i].onmouseout= function () {
            animate(this,{bottom:-45},15)
        };
    }
    for(var i=0;i<divs2.length;i++){
        divs2[i].onmouseover= function () {
            animate(this,{bottom:0},15)
        };
        divs2[i].onmouseout= function () {
            animate(this,{bottom:-45},15)
        };
    }


    //设置左侧nav详细隐藏显示内容 动态生成
    var hideconfig = [
        {//前端开发
            s1:'<span>基础：</span>',
            s1content:'<div class="hide_a_1_1"><a href="#">&nbsp;HTML&nbsp;</a>/<a href="#">&nbsp;CSS&nbsp;</a>/ <a href="#">&nbsp;JavaScript&nbsp;</a>/ <a href="#">&nbsp;jQuery&nbsp;</a></div>',
            s2:'<span>进阶：</span>',
            s2content:'<div class="hide_a_1_1"><a href="#">&nbsp;Html5&nbsp;</a>/ <a href="#">&nbsp;CSS3&nbsp;</a>/ <a href="#">&nbsp;Node.js&nbsp;</a>/ <a href="#">&nbsp;AngularJS&nbsp;</a>/ <a'
            +'href="#">&nbsp;Bootstrap&nbsp;</a>/ <a href="#">&nbsp;React&nbsp;</a>/ <a href="#">&nbsp;Sass/Less&nbsp;</a>/<br/> <a href="#">&nbsp;Vue.js&nbsp;</a>/ <a'
            +'href="#">&nbsp;WebApp&nbsp;</a></div>',
            s3:'<span>其它：</span>',
            s3content:'<div class="hide_a_1_1"><a href="#">&nbsp;前端工具&nbsp;</a></div>',
            s4:'<span class="hide_a_2_span1">职业路径</span>',
            s4content:'<a href="#" class="hide_a_2_a1">&nbsp;HTML5与CSS3实现动态网页&nbsp;</a>',
            s5:'',
            s5content:'',
            s6:'<span>实战</span>',
            s6content:'<a href="#">&nbsp;微信小程序入门与实战 常用组件 API 开发技巧 项目实战&nbsp;</a>',
            s7:'<span>实战</span>',
            s7content:'<a href="#">&nbsp;Vue.js高仿饿了么外卖App 2016最火前端框架&nbsp;</a>',
            s8:'<span>课程</span>',
            s8content:'<a href="#">&nbsp;jQM Web App –列车时刻表&nbsp;</a>',
            s9:'<span>课程</span>',
            s9content:'<a href="#">&nbsp;用JS实现购物车特效&nbsp;</a>',
            s10:'',
            s10content:''
        },
        {//后端开发
            s1:'',
            s1content:'',
            s2:'',
            s2content:'<div class="hide_a_1_1"><a href="#">&nbsp;PHP&nbsp;</a>/ <a href="#">&nbsp;Java&nbsp;</a>/ <a href="#">&nbsp;Python&nbsp;</a>/ <a href="#">&nbsp;C&nbsp;</a>/ <a'
            +'href="#">&nbsp;C++&nbsp;</a>/ <a href="#">&nbsp;Go&nbsp;</a>/ <a href="#">&nbsp;C#&nbsp;</a>/<br/> <a href="#">&nbsp;Ruby&nbsp;</a>/ </div>',
            s3:'',
            s3content:'',
            s4:'',
            s4content:'',
            s5:'',
            s5content:'',
            s6:'<span>实战</span>',
            s6content:'<a href="#">&nbsp;强力django+杀手级xadmin打造上线标准的在线教育平台&nbsp;</a>',
            s7:'<span>实战</span>',
            s7content:'<a href="#">&nbsp;Android自动化测试实战 工具 框架 脚本&nbsp;</a>',
            s8:'<span>课程</span>',
            s8content:'<a href="#">&nbsp;项目管理利器——maven&nbsp;</a>',
            s9:'<span>课程</span>',
            s9content:'<a href="#">&nbsp;PHP+Sphinx+MySQL实现全文检索——理论篇&nbsp;</a>',
            s10:'<span>课程</span>',
            s10content:'<a href="#">&nbsp;C++远征之封装篇（上）&nbsp;</a>'
        },
        {//移动开发
            s1:'',
            s1content:'',
            s2:'',
            s2content:'<div class="hide_a_1_1"><a href="#">&nbsp;Android&nbsp;</a>/ <a href="#">&nbsp;iOS&nbsp;</a>/ <a href="#">&nbsp;Unity 3D&nbsp;</a>/ <a href="#">&nbsp;Cocos2d-x&nbsp;</a>/ </div>',
            s3:'',
            s3content:'',
            s4:'<span class="hide_a_2_span1">职业路径</span>',
            s4content:'<a href="#" class="hide_a_2_a1">&nbsp;零基础入门Android语法与界面&nbsp;</a>',
            s5:'<span class="hide_a_2_span1">职业路径</span>',
            s5content:'<a href="#" class="hide_a_2_a1">&nbsp;iOS基础语法与常用控件&nbsp;</a>',
            s6:'<span>实战</span>',
            s6content:'<a href="#">&nbsp;Android自动化测试实战 工具 框架 脚本&nbsp;</a>',
            s7:'<span>实战</span>',
            s7content:'<a href="#">&nbsp;Android5.0+高级动画开发 矢量图动画 轨迹动画 路径变换&nbsp;</a>',
            s8:'<span>课程</span>',
            s8content:'<a href="#">&nbsp;如何使用高德云图在线制作属于你的地图&nbsp;</a>',
            s9:'<span>课程</span>',
            s9content:'<a href="#">&nbsp;Android-Service系列之Notification综合应用&nbsp;</a>',
            s10:'',
            s10content:''
        },
        {//数据库
            s1:'',
            s1content:'',
            s2:'',
            s2content:'<div class="hide_a_1_1"><a href="#">&nbsp;MySQL&nbsp;</a>/ <a href="#">&nbsp;MongoDB&nbsp;</a>/ <a href="#">&nbsp;Oracle&nbsp;</a>/ <a href="#">&nbsp;SQL Server&nbsp;</a>/</div>',
            s3:'',
            s3content:'',
            s4:'',
            s4content:'',
            s5:'',
            s5content:'',
            s6:'<span>实战</span>',
            s6content:'<a href="#">&nbsp;高性能可扩展MySQL数据库设计及架构优化 电商项目&nbsp;</a>',
            s7:'<span>实战</span>',
            s7content:'<a href="#" class="hide_a_2_a1">&nbsp;Yii2.0打造完整电商平台&nbsp;</a>',
            s8:'<span>课程</span>',
            s8content:'<a href="#">&nbsp;MySQL开发技巧（三）&nbsp;</a>',
            s9:'<span>课程</span>',
            s9content:'<a href="#">&nbsp;Oracle数据库开发利器之函数&nbsp;</a>',
            s10:'<span>课程</span>',
            s10content:'<a href="#">&nbsp;MongoDB在线讲座系列之MongoDB数据库备份策略/Ops Manager&nbsp;</a>'
        },
        {//云计算
            s1:'',
            s1content:'',
            s2:'',
            s2content:'<div class="hide_a_1_1"><a href="#">&nbsp;大数据&nbsp;</a>/ <a href="#">&nbsp;云计算&nbsp;</a>/</div>',
            s3:'',
            s3content:'',
            s4:'',
            s4content:'',
            s5:'',
            s5content:'',
            s6:'<span>实战</span>',
            s6content:'<a href="#">&nbsp;扛得住的MySQL数据库架构&nbsp;</a>',
            s7:'',
            s7content:'',
            s8:'<span>课程</span>',
            s8content:'<a href="#">&nbsp;openstack最新技术解析&nbsp;</a>',
            s9:'<span>课程</span>',
            s9content:'<a href="#">&nbsp;R语言之数据可视化&nbsp;</a>',
            s10:'<span>课程</span>',
            s10content:'<a href="#">&nbsp;在线分布式数据库原理与实践&nbsp;</a>'
        },
        {//运维
            s1:'',
            s1content:'',
            s2:'',
            s2content:'<div class="hide_a_1_1"><a href="#">&nbsp;测试&nbsp;</a>/ <a href="#">&nbsp;Linux&nbsp;</a>/</div>',
            s3:'',
            s3content:'',
            s4:'',
            s4content:'',
            s5:'',
            s5content:'',
            s6:'<span>实战</span>',
            s6content:'<a href="#">&nbsp;Android自动化测试实战 工具 框架 脚本&nbsp;</a>',
            s7:'<span>实战</span>',
            s7content:'<a href="#">&nbsp;Android专项测试-Python篇 10年测试经验讲师&nbsp;</a>',
            s8:'<span>课程</span>',
            s8content:'<a href="#">&nbsp;Linux系统扫描技术及安全防范&nbsp;</a>',
            s9:'<span>课程</span>',
            s9content:'<a href="#">&nbsp;Linux Bind负载均衡&nbsp;</a>',
            s10:'<span>课程</span>',
            s10content:'<a href="#">&nbsp;Linux中的计划任务—Crontab&nbsp;</a>'
        },
        {//视觉设计
            s1:'',
            s1content:'',
            s2:'',
            s2content:'<div class="hide_a_1_1"><a href="#">&nbsp;Photoshop&nbsp;</a>/ <a href="#">&nbsp;Maya&nbsp;</a>/<a href="#">&nbsp;Premiere&nbsp;</a>/<a href="#">&nbsp;ZBrush&nbsp;</a>/</div>',
            s3:'',
            s3content:'',
            s4:'',
            s4content:'',
            s5:'',
            s5content:'',
            s6:'',
            s6content:'',
            s7:'',
            s7content:'',
            s8:'<span>课程</span>',
            s8content:'<a href="#">&nbsp;Maya3D建模攻略——葵花宝典&nbsp;</a>',
            s9:'<span>课程</span>',
            s9content:'<a href="#">&nbsp;Pscc全面技能培训&nbsp;</a>',
            s10:'<span>课程</span>',
            s10content:'<a href="#">&nbsp;PS入门教程——新手过招&nbsp;</a>'
        }
    ]

    for(var i = 0 ;i<kfs.length;i++){
        var hideDiv = document.createElement("div");
        hideDiv.className = "hide_a";
        hideDiv.style.backgroundImage = "url(1-首页/images/hide"+i+".png)";
        bg_banner.appendChild(hideDiv);
        var str ='<div class="hide_a_1">'
            +'<h4 >分类目录</h4>'
            +'<div>'+hideconfig[i].s1+hideconfig[i].s1content+'</div>'
            +'<div>'+hideconfig[i].s2+hideconfig[i].s2content+'</div>'
            +'<div>'+hideconfig[i].s3+hideconfig[i].s3content+'</div>'
            +'</div>'
            +'<div class="hide_a_2">'
            +'<h4>课程推荐</h4>'
            +'<div></div>'
            +'<div>'+hideconfig[i].s4+hideconfig[i].s4content+'</div>'
            +'<div>'+hideconfig[i].s5+hideconfig[i].s5content+'</div>'
            +'<div>'+hideconfig[i].s6+hideconfig[i].s6content+'</div>'
            +'<div>'+hideconfig[i].s7+hideconfig[i].s7content+'</div>'
            +'<div>'+hideconfig[i].s8+hideconfig[i].s8content+'</div>'
            +'<div>'+hideconfig[i].s9+hideconfig[i].s9content+'</div>'
            +'<div>'+hideconfig[i].s10+hideconfig[i].s10content+'</div>'
            +'</div>';
        hideDiv.innerHTML = str ;
    }
    var hides = bg_banner.getElementsByClassName("hide_a");
    for(var i=0;i<kfs.length;i++){
        kfs[i].index = i ;
        //隐藏部分的滑动显示
        hides[i].onmouseover = function () {
            for(var i=0;i<hides.length;i++){
                hides[i].style.display = "none";
            }
            this.style.display = "block";
        }
        //隐藏部分的滑动隐藏
        hides[i].onmouseout = function(){
            for(var j=0;j<kfs.length;j++){
                hides[j].style.display = "none";
            }
        }
        //左侧导航栏的背景显示效果
        kfs[i].onmouseover= function () {
            for(var j=0;j<kfs.length;j++){
                kfs[j].style.background="";
                hides[j].style.display = "none";
            }
            this.style.background="rgba(0,0,0,.2)";
            hides[this.index].style.display = "block";
        };
        //左侧导航栏移除时的消失效果
        kfs[i].onmouseout = function () {
            this.style.background="";
            hides[this.index].style.display = "none";
        }
    }

//职业分类classify的背景图
    (function () {
        var classifyBg = [
            {"src": "1-首页/images/web.png"},
            {"src": "1-首页/images/java.png"},
            {"src": "1-首页/images/php.png"},
            {"src": "1-首页/images/android.png"},
            {"src": "1-首页/images/ios.png"},
            {"src": "1-首页/images/linux.png"},
            {"src": "1-首页/images/shoujileft.png"}
        ]
//长图广告longer的背景图
        var picArr = [
            {"src": "1-首页/images/5861d8c00001a85804680172.jpg"},
            {"src": "1-首页/images/58461cc800019f6404680172.jpg"},
            {"src": "1-首页/images/586ce1640001b28207120172.jpg"},
            {"src": "1-首页/images/5861d9700001547104680364.jpg"},
            {"src": "1-首页/images/5861d9da0001646b07120172.jpg"},
            {"src": "1-首页/images/5861da0d000148fb04680172.jpg"},
            {"src": "1-首页/images/585899110001cfae04680172.jpg"},
            {"src": "1-首页/images/586b7e5e00013bf604680172.jpg"},
            {"src": "1-首页/images/586b80780001f4d304680172.jpg"},
            {"src": "1-首页/images/normaljb.png"},
            {"src": "1-首页/images/normaljb.png"}
        ]
//职业课程介绍moco-course的配置表
        var mocoMes = [
            {"src": "1-首页/images/57e0ffc6000194f906000338-228-128.jpg",
             "grade":"高",
             "title":"Roundtable前端分享专场",
             "content":"来自美团前端团队的最新技术分享",
             "num":5939},
            {"src": "1-首页/images/5704a852000181cf06000338-228-128.jpg",
             "grade":"中",
             "title":"CSS3实现漂亮ToolTips效果",
             "content":"CSS3 实现鼠标悬停弹出信息提示框。",
             "num":32078},
            {"src": "1-首页/images/57076b110001832406000338-228-128.jpg",
             "grade":"高",
             "title":"CSS深入理解之line-height",
             "content":"深入理解line-height相关特性",
             "num":29722},
            {"src": "1-首页/images/570360110001371606000338-228-128.jpg",
             "grade":"初",
             "title":"二进制基础",
             "content":"学习计算机必备的基础。",
             "num":67282},
            {"src": "1-首页/images/5704a9550001f74606000338-228-128.jpg",
             "grade":"中",
             "title":"深入浅出Java多线程",
             "content":"带你一起深入浅出多线程！",
             "num":96184},
            {"src": "1-首页/images/574669ba000105ec06000338-228-128.jpg",
             "grade":"高",
             "title":"模式的秘密---责任链模式",
             "content":"有求必应，解耦代码——责任链模式 。",
             "num":17167},
            {"src": "1-首页/images/5704a3d100016e9206000338-228-128.jpg",
             "grade":"高",
             "title":"模式的秘密---适配器模式",
             "content":"适配器教你如何“到什么山唱什么歌”",
             "num":21213},
            {"src": "1-首页/images/57466bb0000135cf06000338-228-128.jpg",
             "grade":"高",
             "title":"站在巨人的肩膀上写代码—SPL",
             "content":"SPL，一个能找到登上绝顶的天梯。",
             "num":17071},
            {"src": "1-首页/images/570759d900014b7d06000338-228-128.jpg",
             "grade":"中",
             "title":"Duang~MySQLi扩展库来袭",
             "content":"Duang~一起开启MySQLi的学习之旅吧!",
             "num":20645},
            {"src": "1-首页/images/578386af00010eea06000338-228-128.jpg",
             "grade":"中",
             "title":"JSON应用场景与实战",
             "content":"你还不知道JSON吗，快快加入我们吧。",
             "num":51020},
            {"src": "1-首页/images/544f48510001906806000338-228-128.jpg",
             "grade":"高",
             "title":"Android智能机器人“小慕”的实现",
             "content":"无聊的时候就来作个机器人陪你聊天吧 ",
             "num":28882},
            {"src": "1-首页/images/57075ab500019ea106000338-228-128.jpg",
             "grade":"初",
             "title":"Android必学-AsyncTask基础",
             "content":"了解Android中AsyncTask的使用方法 ",
             "num":35078},
            {"src": "1-首页/images/554089050001a95906000338-228-128.jpg",
             "grade":"初",
             "title":"Android-重识Activity",
             "content":"本课程将带您重新认识Activity",
             "num":36874},
            {"src": "1-首页/images/53bf89320001073f06000338-228-128.jpg",
             "grade":"初",
             "title":"Android攻城狮的第二门课（第1季）",
             "content":"了解Android开发中常用的控件 ",
             "num":89361},
            {"src": "1-首页/images/561c644d0001d72d06000338-228-128.jpg",
             "grade":"高",
             "title":"Roundtable前端分享专场",
             "content":"来自美团前端团队的最新技术分享",
             "num":5939},
            {"src": "1-首页/images/564a92e8000171b006000338-228-128.jpg",
             "grade":"中",
             "title":"CSS3实现漂亮ToolTips效果",
             "content":"CSS3 实现鼠标悬停弹出信息提示框。",
             "num":32078},
            {"src": "1-首页/images/570779ba00011eac06000338-228-128.jpg",
             "grade":"高",
             "title":"CSS深入理解之line-height",
             "content":"深入理解line-height相关特性",
             "num":29722},
            {"src": "1-首页/images/57035f110001a57906000338-228-128.jpg",
             "grade":"初",
             "title":"Linux达人养成计划 I",
             "content":"Linux的入门级课程！",
             "num":211563},
            {"src": "1-首页/images/5704cea700017b9e06000338-228-128.jpg",
             "grade":"中",
             "title":"shell编程之正则表达式",
             "content":"为你带来shell编程中的正则表达式！",
             "num":22939},
            {"src": "1-首页/images/563b13700001ebf906000338-228-128.jpg",
             "grade":"中",
             "title":"Linux服务管理",
             "content":"Linux的RPM包和源码包服务。",
             "num":27456},
            {"src": "1-首页/images/5697799a0001e99006000338-228-128.jpg",
             "grade":"中",
             "title":"Linux系统管理",
             "content":"进程管理+工作管理+系统定时任务",
             "num":32842}
        ]
        var classifys = document.getElementsByClassName("classify");
        for (var i = 0; i < classifys.length; i++) {
            classifys[i].style.background = "url('" + classifyBg[i].src + "')";  //给职业分类设置背景
        }
        var longers = document.getElementsByClassName("longer");
        for (var i = 0; i < longers.length; i++) {
            longers[i].style.background = "url('" + picArr[i].src + "')";  //给长盒子设置背景
        }
        //动态生成课程介绍结构
        var mocoCourses = document.getElementsByClassName("moco-course");
        for (var i = 0; i < mocoCourses.length; i++) {
            //生成课程介绍段落结构
            var str = '<div class="moco-course-intro">'+
                '<h3><i>'+mocoMes[i].grade+'</i>'+
                mocoMes[i].title+'</h3>'+
                '<p>'+mocoMes[i].content+'</p>'+
                '</div>'+
                '<div class="moco-course-bottom">'+
                '<span class="num">'+mocoMes[i].num+' 人在学</span>'+
                '</div>';
            mocoCourses[i].innerHTML = str;
            //创建img插入结构
            var courseImg = document.createElement("img");
            courseImg.src = mocoMes[i].src;
            mocoCourses[i].insertBefore(courseImg, mocoCourses[i].children[0]);
        }
    })();
//给mocoCourse课程小盒子设置移入移出动画效果
    (function () {
        var mocoCourses = document.getElementsByClassName("moco-course");
        var mocoCourseIntro = document.getElementsByClassName("moco-course-intro");
        for (var i = 0; i < mocoCourseIntro.length; i++) {
            var move = 40
            mocoCourseIntro[i].fixedTop = mocoCourseIntro[i].offsetTop;
            mocoCourseIntro[i].onmouseover = function () {
                animateSlow(this, {"top": this.fixedTop - move}, 15)

            }
            mocoCourseIntro[i].onmouseout = function () {
                animateSlow(this, {"top": this.fixedTop}, 15);
            }
        }
        for (var i = 0; i < mocoCourses.length; i++) {
            mocoCourses[i].index = i;
            mocoCourses[i].onmouseover = function () {
                mocoCourseIntro[this.index].onmouseover();
            }
            mocoCourses[i].onmouseout = function(){
                mocoCourseIntro[this.index].onmouseout();
            }
        }
    })();

//给职业分类中的“职业路径”a标签career-path中i添加移动效果
    (function () {
        var careerPaths = document.getElementsByClassName("career-path");
        var icons = document.getElementsByClassName("icon");
        var move = 5
        for (var i = 0; i < careerPaths.length; i++) {
            careerPaths[i].index = i;
            icons[i].fixedLeft = icons[i].offsetLeft;
            careerPaths[i].onmouseover = function () {
                animateSlow(icons[this.index], {"left": icons[this.index].fixedLeft + move}, 10)
            }
            careerPaths[i].onmouseout = function () {
                animateSlow(icons[this.index], {"left": icons[this.index].fixedLeft}, 10)
            }
        }
    })();

    //footer部分的js特效
    var footericon = document.getElementById("footer_icon");
    var footericonas = footericon.children;
    var wechaterweima =document.getElementById("wechaterweima");
    for (var i = 0 ;i<footericonas.length;i++) {
        footericonas[i].index = i;
        footericonas[i].style.background = "url(1-首页/images/sprite.png) no-repeat 0 -" + (124 - i * 34) + "px";
        footericonas[i].style.left = 500 + (i * 54) + "px";
        footericonas[i].onmouseover = function () {
            if(this.index===1) {
                wechaterweima.style.display = "block";
            }
            this.style.background = "url(1-首页/images/sprite.png) no-repeat -37px -" + (124 - this.index * 34) + "px";
        }
        footericonas[i].onmouseout = function () {
            if(this.index ===1 ) {
                wechaterweima.style.display = "none";
            }
            this.style.background = "url(1-首页/images/sprite.png) no-repeat 0 -" + (124 - this.index * 34) + "px";
        }
    }

    //侧面固定slider的js特效
    (function(){
        var li1 =document.getElementById("li1");
        var li2 =document.getElementById("li2");
        var li3 =document.getElementById("li3");
        var li4 =document.getElementById("li4");
        //var li5 =document.getElementById("li5");
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

        li1.onmouseover= function () {
            span1.style.display="block";
            a1.style.background="none";
        }
        li1.onmouseout= function () {
            span1.style.display="none";
            a1.style.background="url(1-首页/images/r1_c2.png) 0  0 ";
        }
        li2.onmouseover= function () {
            span2.style.display="block";
            a2.style.background="none";
        }
        li2.onmouseout= function () {
            span2.style.display="none";
            a2.style.background="url(1-首页/images/r1_c2.png) 0 -57px";
        }
        li3.onmouseover= function () {
            elevator3.style.display="block";
            span3.style.display="block";
            a3.style.background="none";
        }
        li3.onmouseout= function () {
            elevator3.style.display="none";
            span3.style.display="none";
            a3.style.background="url(1-首页/images/r1_c2.png) 0  -114px ";
        }
        li4.onmouseover= function () {
            elevator4.style.display="block";
            span4.style.display="block";
            a4.style.background="none";
        }
        li4.onmouseout= function () {
            elevator4.style.display="none";
            span4.style.display="none";
            a4.style.background="url(1-首页/images/r1_c2.png) 0  -171px ";
        }
        //侧面滑动到500px时，会显示返回顶部的按钮
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

   }())


};


