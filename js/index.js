//banner效果
{
    let imgs = document.querySelectorAll(".banner_img li");
    let pagers = document.querySelectorAll(".banner_lunbo li");
    let banner = document.querySelector("#banner");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    //点击切换
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this ele  pagers[index]
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    });
    //自动轮播
    let n = 0;
    let t = setInterval(move, 3000);

    function move() {
        n++;
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }

    //鼠标移入暂停
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    //s鼠标离开继续自动翻页
    banner.onmouseleave = function () {
        t = setInterval(move, 3000)
    };
    //点击切换下一张
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    };
    //点击切换上一张
    prev.onclick = function () {
        if (flag) {
            flag = false;
            n = n - 2;
            move();
        }
    };
    //防止点击过快
    imgs.forEach(function (ele, index) {
        ele.addEventListener("transitionend", function () {
            flag = true;
        })
    })
}

//明星单品效果
{
    const prev = document.querySelector(".danpin_btn_prev");
    const next = document.querySelector(".danpin_btn_next");
    const inner = document.querySelector(".danpin_xia_inner");
    let n = 0;//n代表往左移动几屏
    next.onclick = function () {
        n++;
        prev.classList.remove("disable");
        if (n === 2) {
            this.classList.add("disable");
        }
        if (n === 3) {
            n = 2;
            return;
        }
        inner.style.marginLeft = -1240 * n + "px";
    };
    prev.onclick = function () {
        n--;
        next.classList.remove("disable");
        if (n === 0) {
            prev.classList.add("disable");
        }
        if (n === -1) {
            n = 0;
            return;
        }
        inner.style.marginLeft = -1240 * n + "px";
    }
}

//模块效果
{
    const contentList = document.querySelectorAll(".dapei");
    contentList.forEach(function (ele) {
        content(ele);
    });

    function content(parent) {
        var btns = parent.querySelectorAll(".daohang_xuanzhong_bianse");
        var cons = parent.querySelectorAll(".dapei .zhineng_bottom");
        for (let i = 0; i < cons.length; i++) {
            btns[i].onmouseenter = function () {
                for (let j = 0; j < cons.length; j++) {
                    btns[j].classList.remove("active");
                    cons[j].style.zIndex = "";
                }
                btns[i].classList.add("active");
                cons[i].style.zIndex = "10";
            }
        }
    }
}

//为你推荐
{
    const prev1 = document.querySelector(".danpin_btn_prev1");
    const next1 = document.querySelector(".danpin_btn_next1");
    const inner1 = document.querySelector(".weinituijian_xia_inner");
    let n = 0;//n代表往左移动几屏
    next1.onclick = function () {
        n++;
        prev1.classList.remove("disable");
        if (n === 2) {
            this.classList.add("disable");
        }
        if (n === 3) {
            n = 2;
            return;
        }
        inner1.style.marginLeft = -1240 * n + "px";
    };
    prev1.onclick = function () {
        n--;
        next1.classList.remove("disable");
        if (n === 0) {
            prev1.classList.add("disable");
        }
        if (n === -1) {
            n = 0;
            return;
        }
        inner1.style.marginLeft = -1240 * n + "px";
    }
}

//内容
{
    function fengzhuang(parent) {
        let prev = parent.querySelector(".neirong_xia_item_fanye");
        let next = parent.querySelector(".neirong_xia_item_fanye1");
        let inner = parent.querySelector(".neirong_xia_item_inner");
        let pager = parent.querySelectorAll(".neirong_xia_item_lunbo2");
        let n = 0;
        next.onclick = function () {
            n++;
            if (n === pager.length) {
                n = pager.length - 1;
                return;
            }
            inner.style.marginLeft = n * -296 + "px";
            pager[n].classList.add("active");
            pager[n - 1].classList.remove("active");
            obj = pager[n];
        };
        prev.onclick = function () {
            n--;
            if (n < 0) {
                n = 0;
                return;
            }
            inner.style.marginLeft = n * -296 + "px";
            pager[n].classList.add("active");
            pager[n + 1].classList.remove("active");
            obj = pager[n];
        };
        let obj = pager[0];
        pager.forEach(function (ele, index) {
            ele.onclick = function () {
                obj.classList.remove("active");
                ele.classList.add("active");
                obj = ele;
                inner.style.marginLeft = index * -296 + "px";
                n = index;
            }
        })
    }

    let contentList = document.querySelectorAll(".neirong_xia_item");
    contentList.forEach(function (a) {
        fengzhuang(a);
    });
}

//侧导航效果
{
    let sidenav = document.querySelectorAll(".banner_daohang li");
    let menu = document.querySelectorAll(".menu");
    let obj = menu[0];
    sidenav.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            menu[index].style.display = "block";
            obj = menu[index];
        };
        ele.onmouseleave = function () {
            menu[index].style.display = "none";
        }
    })
}

//上导航
{
    let box = document.querySelector(".box");
    let top = document.querySelector(".daohang_wenzi");
    let bottom = document.querySelector(".daohang_bottom");
    let content = document.querySelector("daohang_bottom_item");
    let wenzi = document.querySelectorAll(".daohang_wenzi span");
    let items = document.querySelectorAll(".daohang_bottom_content");
    top.onmouseenter = function () {
        bottom.style.height = "230px";
        bottom.style.opacity = "1";
    };
    box.onmouseleave = function () {
        bottom.style.opacity = "0";
        bottom.style.height = "0px";
    };
    let obj = items[0];
    wenzi.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            items[index].style.display = "block";
            obj = items[index];
        };
        ele.onmouseleave = function () {
            items[index].style.display = "none";
        }
    })
}

//购物车效果
{
    let car = document.querySelector(".head_gowuche");
    let tanchu = document.querySelector(".head_gowuche_tan");
    let box = document.querySelector(".head_right");
    car.onmouseenter = function () {
        tanchu.style.height = "96px";
    };
    box.onmouseleave = function () {
        tanchu.style.height = "0";
    }
}