/**
 * User: jiangfeng
 * Date: 12-5-7
 * Time: 16:12
 *  判断浏览器是否ie,是则返回ie版本,不是则返回false
 * document.all是IE浏览器才有的,可以直接用来判断是否IE
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