/**
 * User: jiangfeng
 * Date: 12-5-7
 * Time: 16:36
 * id选择器和标签选择器
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

function $E(id,el){
	var elements = document.getElementById(id);
	return elements.getElementsByTagName(el);
}
