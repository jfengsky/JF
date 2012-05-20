/**
 * 按键事件，onkeypress onkeydown onkeyup
 * Author: jiangfeng
 * Date: 12-5-20 下午5:40
 * Param: ev event事件
 * Return: 返回按键的code值
 */

document.onkeydown = function(ev){
    var e = ev || window.event;
    console.log(e.keyCode);
};

/*
event是ie自带的一个对象，而ff中不存在该对象，只能通过传递参数（并且惟一）的方式来实现event.
*/