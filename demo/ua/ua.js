/**
 * User: jiangfeng
 * Date: 12-5-7
 * Time: 16:12
 * 判断浏览器是否ie
 * @return false 或者 IE版本号
 */
var UA = {
	ie:function(){
		if(!window.ActiveXObject){
			return false;
		}else{
			return parseInt(((navigator.userAgent.toLowerCase()).match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1]);	//参考了jquery的方法
		}
	}
}

/*
    window.ActiveXObject 判断浏览器是否支持Active控件，不支持就是非IE浏览器
    目前只有IE系列支持document.all，据说以后火狐会支持，所以推荐不要用
*/

/*  网上有个俄罗斯人写的最短判断IE的方法:
     if (+[1,]){
        alert('您正在使用非IE浏览器');
     }else {
        alert('您正在使用IE浏览器');
     }
    [1,]标准浏览器会忽悠数组中最后一个”,”
    而IE则不会忽略它，而且用undefined来填充最后一个数组元素
    当 +[1,] IE返回NaN
 */