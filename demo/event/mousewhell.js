/**
 * 鼠标滚轮事件
 * @author jiangfeng
 * @time 12-5-18 22:45
 * @param id string
 * @param name string 属性名
 * @return 属性值
 */
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
if (document.attachEvent){
    document.attachEvent("on"+mousewheelevt, function(e){
        console.log(e.wheelDelta); // => +- 120
    });
}else if (document.addEventListener){
    document.addEventListener(mousewheelevt, function(e){
        console.log(e.detail); // => +- 3
    }, false)
}

/*
IE/Opera属于同一类型，使用attachEvent即可添加滚轮事件。
if(document.attachEvent){
    document.attachEvent('onmousewheel',scrollFunc);
}
*/

/*
Firefox使用addEventListener添加滚轮事件
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
*/

/*
Safari与Chrome属于同一类型，可使用HTML DOM方式添加事件
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
其中除Firefox外其余均可使用HTML DOM方式添加事件，因此添加事件使用以下方式
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
*/

/*
detail与wheelDelta
判断滚轮向上或向下在浏览器中也要考虑兼容性，
现在五大浏览器（IE、Opera、Safari、Firefox、Chrome）中Firefox 使用detail，其余四类使用wheelDelta；
两者只在取值上不一致，代表含义一致，detail与wheelDelta只各取两个值，
detail只取±3，wheelDelta只取±120，其中正数表示为向上，负数表示向下。
*/