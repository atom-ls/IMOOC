var tool = {}
/**
 * 获取内部文本的兼容方法
 * @param element
 * @returns {*}
 */
tool.getInnerText = function (element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 设置内部文本的兼容方法
 * @param element
 * @param content
 */
tool.setInnerText = function (element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

/**
 * 设置透明度兼容性，ie678不识别opacity，只识别filter
 * @param element
 * @param op
 */
function setOpacity(element, op) {
    if (typeof  element.style.opacity == "string") {
        element.style.opacity = op;
    } else {
        element.style.filter = "alpha(opacity = " + op * 100 + ")";
    }
}

/**
 * 获取下一个兄弟元素节点（因为nextElementSibling在ie678不兼容）
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && 1 !== next.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
}

/**
 * 获取上一个兄弟元素节点（因为previousElementSibling在ie678不兼容）
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;
        while (prev && 1 !== prev.nodeType) {
            prev = prev.previousSibling;
        }
        return prev;
    }
}

/**
 * 获取第一个元素子节点（IE678不兼容）
 * @param element
 * @returns {*}
 */
function getFirstChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var first = element.firstChild;
        while (first && 1 !== first.nodeType) {
            first = first.nextSibling;
        }
        return first;
    }
}

/**
 * 获取最后一个元素子节点（IE678不兼容）
 * @param element
 * @returns {*}
 */
function getLastChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var last = element.lastChild;
        while (last && 1 !== last.nodeType) {
            last = last.previousSibling;
        }
        return last;
    }
}

/**
 * 封装用类名获取元素的兼容方法（IE678不兼容getElementsByClassName）
 * @param element
 * @param className
 * @returns {*}
 */
function getElementsByClassName(element, className) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);
    } else {
        var filterArr = [];
        var elements = element.getElementsByTagName("*");
        for (var i = 0; i < elements.length; i++) {
            var nameArr = elements[i].className.split(" ");
            for (var j = 0; j < nameArr.length; j++) {
                if (nameArr[i] === className) {
                    filterArr.push(elements[i]);
                    break;
                }
            }
        }
        return filterArr;
    }
}

/**
 * 为了方便，封装替换对象中某一个类名的方法
 * @param element
 * @param oldStr
 * @param newStr
 */
function replaceClassName(element, oldStr, newStr) {
    var arr = element.className.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldStr) {
            arr[i] = newStr;
        }
    }
    element.className = arr.join(" ");
}

/**
 * 封装匀速移动动画函数，将对象移动到指定目标位置
 * @param obj
 * @param target
 */
function animate(obj, json,fast, fn) {
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
    }, fast);
}

//封装获取计算后样式的兼容方法，ie不兼容window.getComputedStyle，只有.currentStyle
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

/**
 * 封装缓慢动画函数，让 任意对象（多个） 的 任意属性 变为任意的目标值
 * @param obj
 * @param json
 * @param fn
 */
function animateSlow(obj, json, stepRatio, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//flag初始设置一定要放在for循环之外，如果在for循环里面，则每一次搜索属性时，都会置为true,
        // 最后一个元素一旦跑完了，就不再将flag设为false，则出了循环后，即使前面的元素还没跑完，也被清除定时器了
        for (var k in json) {
            //opacity和zIndex要特殊处理
            //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
            //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100
                var step = (target - leader) / stepRatio;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;  //opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;  //如果是NaN 给个默认值0
                var target = json[k];
                var step = (target - leader) / stepRatio;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
}


//封装获取页面滚动坐标
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

//封装获取页面可视化宽高
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}