﻿/**
 * 写入或者返回容器包含的文本值
 * @author jiangfeng
 * @time 12-5-7 16:12
 * @param id string
 * @param val string 文本值
 * @return 如果val为空，则返回文本值，如果不为空则写入val值
 */
function text(id,val){
	if(arguments.length == 1){
		if(!+[1,]){
			return $(id).innerText;
		}else{
			return $(id).textContent;
		}
	}else if(arguments.length == 2){
		$(id).innerText = val;
	}
}


/*
*IE中的innerText是需要对innerHTML的值进行： 
*1、HTML转义（等同于XML转义，对<、&等转义字符进行处理）； 
*2、经过HTML解释和CSS样式解释； 
*3、之后又剔除格式信息 
*FF中的textContent没有2、3步，在经过了HTML转义之后直接剔除所有html标签后得到的纯文本，所以会保留空格，换行等。
*/