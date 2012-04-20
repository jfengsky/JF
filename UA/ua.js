/**
*	判断浏览器是否ie
*	是则返回ie版本
*	不是则返回false
*/
var UA = {
	ie:function(){
		if(!window.ActiveXObject){
			return false;
		}else if(document.all){
			return parseInt(((navigator.userAgent.toLowerCase()).match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1]);	//参考了jquery的方法
		}
	}
}