/**
 * 获取页面id标签节点
 * @author jiangfeng
 * @time 12-5-7 16:12
 * @param id string
 * @return id所在的节点
 */
function $(id){
	return document.getElementById(id);
}

/* 下面是prototype的写法 */
/*
function $() { 
	var elements = new Array(); 
	for (var i = 0; i < arguments.length; i++){ 
		var element = arguments[i]; 
		if (typeof element == 'string') 
			element = document.getElementById(element); 
		if (arguments.length == 1) 
			return element; 
		elements.push(element); 
	} 
	return elements; 
}
*/

/**
 * 获取页面标签节点
 * @param id string
 * @param el string 标签名
 * @return 节点数组
 */
function $E(id,el){
	var elements = document.getElementById(id);
	return elements.getElementsByTagName(el);
}
