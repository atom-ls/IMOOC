/**
 * Created by Administrator on 2017/1/8.
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
}