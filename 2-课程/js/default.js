/**
 * Created by Administrator on 2017/1/11.
 */


window.onload = function () {
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

    //主体部分js特效
        var productMainRght =document.getElementById("product_main_right");
        var productMainRght2 =document.getElementById("product_main_right2");
        var productMain =document.getElementById("product_main_bottom");
        var productMain2 =document.getElementById("product_main_bottom2");
        var ul2=productMain.children[0];
        var ul=productMainRght.children[0];
        var ul3 = productMain2.children[0];
        var ul4 = productMainRght2.children[0];
        var messages = [
            {"id": 1, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product1.jpg"},
            {"id": 2, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product2.jpg"},
            {"id": 3, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product3.jpg"},
            {"id": 4, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product4.jpg"},
            {"id": 5, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product5.jpg"},
            {"id": 6, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product6.jpg"},
            {"id": 7, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product7.jpg"},
            {"id": 8, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product8.jpg"},
            {"id": 9, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product6.jpg"},
            {"id": 10, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product2.jpg"},
            {"id": 11, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product3.jpg"},
            {"id": 12, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product1.jpg"},
            {"id": 13, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product2.jpg"},
            {"id": 14, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product3.jpg"},
            {"id": 15, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product4.jpg"},
            {"id": 16, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product5.jpg"},
            {"id": 17, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product6.jpg"},
            {"id": 18, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product7.jpg"},
            {"id": 19, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product8.jpg"},
            {"id": 20, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product7.jpg"},
            {"id": 21, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product1.jpg"},
            {"id": 22, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product2.jpg"},
            {"id": 23, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product3.jpg"},
            {"id": 24, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product4.jpg"},
            {"id": 25, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product5.jpg"},
            {"id": 26, "name": "初", "content": "HTML+CSS基础课程","mess":"8小时带领大家步步深入学习标签的基础知识","sudents":"23653","background":"images/product6.jpg"}
        ];
    var messages1 = [
        {"id": 1, "name": "初", "content": "Android攻城狮的第一门课","mess":"想快速进入Android开发领域的程序猿的首选课程","sudents":"227594","background":"images/1.jpg"},
        {"id": 2, "name": "初", "content": "Python入门","mess":"未来您要会的优雅、明确、简单语言","sudents":"221832","background":"images/2.jpg"},
        {"id": 3, "name": "初", "content": "PS大神通关教程","mess":"实现ps菜鸟到大神的炫酷逆袭","sudents":"23653","background":"images/3.jpg"},
        {"id": 4, "name": "初", "content": "Linux达人养成计划I","mess":"Linux的入门级课程！","sudents":"23653","background":"images/4.jpg"},
        {"id": 5, "name": "初", "content": "与MySQL的零距离接触","mess":"不花钱的关系型数据库，你懂得！","sudents":"202237","background":"images/5.jpg"},
        {"id": 6, "name": "初", "content": "玩转Bootstrap(基础)","mess":"告诉你怎么使用Bootstrap","sudents":"183553","background":"images/6.jpg"},
        {"id": 7, "name": "初", "content": "前端开发工具技巧介绍-DW篇","mess":"你真的会使用dearmwear吗","sudents":"177110","background":"images/7.jpg"},
        {"id": 8, "name": "初", "content": "网页布局基础","mess":"让你精通CSS中三大定位机制","sudents":"175392","background":"images/8.jpg"},
        {"id": 9, "name": "初", "content": "前端工程师必备的PS技能-切图篇","mess":"前端开发需要的Photoshop技巧","sudents":"23653","background":"images/9.jpg"},
        {"id": 10, "name": "初", "content": "JavaScript深入浅出","mess":"由浅入深学习JS，且解析JS常见错误","sudents":"332233","background":"images/10.jpg"},
        {"id": 11, "name": "初", "content": "十天精通CSS3","mess":"深刻详解CSS3知识让网页穿上绚丽装备","sudents":"2362153","background":"images/11.jpg"},
        {"id": 12, "name": "初", "content": "前端开发工具介绍--sublime使用","mess":"一款技术大牛高效编程软件","sudents":"7510234","background":"images/12.jpg"},
        {"id": 13, "name": "初", "content": "AngularJS实战","mess":"angularJS基础课程","sudents":"139546","background":"images/13.jpg"},
        {"id": 14, "name": "初", "content": "C++远征之起航篇","mess":"C++亮点尽在其中","sudents":"138799","background":"images/1.jpg"},
        {"id": 15, "name": "初", "content": "java入门第三季","mess":"java中你必须懂得的常用技能","sudents":"23653","background":"images/2.jpg"},
        {"id": 16, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/3.jpg"},
        {"id": 17, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/4.jpg"},
        {"id": 18, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/5.jpg"},
        {"id": 19, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/6.jpg"},
        {"id": 20, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/7.jpg"},
        {"id": 21, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/8.jpg"},
        {"id": 22, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/9.jpg"},
        {"id": 23, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/10.jpg"},
        {"id": 24, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/11.jpg"},
        {"id": 25, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/12.jpg"},
        {"id": 26, "name": "初", "content": "HTML+CSS基础课程","mess":"未来您要会的优雅、明确、简单语言","sudents":"23653","background":"images/13.jpg"}
    ];
        var product_left = document.getElementById("product_left");
        var NewandHotAs = product_left.getElementsByTagName("a");
        var product_main1 = document.getElementById("product_main1");
        var product_main2 = document.getElementById("product_main2");
        var product_mains = [product_main1,product_main2];

    //创建最新下面的产品列表
    for(var i=0;i<8;i++){
        var product=document.createElement("div");
        product.id="product"+messages[i].id;
        ul.appendChild(product);
        product.className="product1 fl";
        var str =
            '    <a href="#" class="product1_mess">'
            +'    <h3>'
            +'    <i>'+messages[i].name+'</i>'
            +'    '+messages[i].content+''
            +'    </h3>'
            +'    <p>'+messages[i].mess+'</p>'
            +'</a>'
            +'<a href="#" class="product1_bottom">'
            +'    <p>'+messages[i].sudents+'在学</p>'
            +'</a>'
        product.innerHTML+=str;
        product.style.background ="url("+messages[i].background+") no-repeat top center";
        product.onmouseover= function () {
            animate(this.children[0],{top:28})
        }
        product.onmouseout= function () {
            animate(this.children[0],{top:65})
        }
    }
    for(var i=8;i<26;i++){
        var product=document.createElement("div");
        product.id="product"+messages[i].id;
        ul2.appendChild(product);
        product.className="product1 fl";
        var str =
            '    <a href="#" class="product1_mess">'
            +'    <h3>'
            +'    <i>'+messages[i].name+'</i>'
            +'    '+messages[i].content+''
            +'    </h3>'
            +'    <p>'+messages[i].mess+'</p>'
            +'</a>'
            +'<a href="#" class="product1_bottom">'
            +'    <p>'+messages[i].sudents+'在学</p>'
            +'</a>'
        product.innerHTML+=str;
        product.style.background ="url("+messages[i].background+") no-repeat top center";
        product.onmouseover= function () {
            animate(this.children[0],{top:28})
        }
        product.onmouseout= function () {
            animate(this.children[0],{top:65})
        }
    }

    //创建最热下面的产品列表
    for(var i=0;i<8;i++){
        var product=document.createElement("div");
        product.id="product"+messages1[i].id;
        ul4.appendChild(product);
        product.className="product1 fl";
        var str =
            '    <a href="#" class="product1_mess">'
            +'    <h3>'
            +'    <i>'+messages1[i].name+'</i>'
            +'    '+messages1[i].content+''
            +'    </h3>'
            +'    <p>'+messages1[i].mess+'</p>'
            +'</a>'
            +'<a href="#" class="product1_bottom">'
            +'    <p>'+messages1[i].sudents+'在学</p>'
            +'</a>'
        product.innerHTML+=str;
        product.style.background ="url("+messages1[i].background+") no-repeat top center";
        product.onmouseover= function () {
            animate(this.children[0],{top:28})
        }
        product.onmouseout= function () {
            animate(this.children[0],{top:65})
        }
    }
    for(var i=8;i<26;i++){
        var product=document.createElement("div");
        product.id="product"+messages1[i].id;
        ul3.appendChild(product);
        product.className="product1 fl";
        var str =
            '    <a href="#" class="product1_mess">'
            +'    <h3>'
            +'    <i>'+messages1[i].name+'</i>'
            +'    '+messages1[i].content+''
            +'    </h3>'
            +'    <p>'+messages1[i].mess+'</p>'
            +'</a>'
            +'<a href="#" class="product1_bottom">'
            +'    <p>'+messages1[i].sudents+'在学</p>'
            +'</a>'
        product.innerHTML+=str;
        product.style.background ="url("+messages1[i].background+") no-repeat top center";
        product.onmouseover= function () {
            animate(this.children[0],{top:28})
        }
        product.onmouseout= function () {
            animate(this.children[0],{top:65})
        }
    }

        for(var i = 0 ;i<NewandHotAs.length;i++){
            NewandHotAs[i].index = i ;
            var NaHas = NewandHotAs[i];
            NaHas.onclick = function () {
                for(var i = 0 ;i<NewandHotAs.length;i++){
                    NewandHotAs[i].style.color = "#787D82";
                    product_mains[i].style.display = "none";
                }
                this.style.color = "#F01400";
                product_mains[this.index].style.display = "block";
            }
        }



        //换页按钮
        var bottom_center =document.getElementById("bottom_center");
        var bottom_as= bottom_center.getElementsByTagName("a");
        bottom_as[0].className = "current";
        for(var i = 0 ;i<bottom_as.length;i++){
            bottom_as[i].onclick = function () {
                for(var i= 0 ;i<bottom_as.length;i++){
                    bottom_as[i].className = "";
                }
                this.className = "current";
            }
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
}