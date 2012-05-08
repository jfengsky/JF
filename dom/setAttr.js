/**
 * User: jiangfeng
 * Date: 12-5-7
 * Time: 17:11
 * 设置标签属性
 */
function setAttr(id,name,val){
    $(id).setAttribute(name,val);    //$(id) 参考 function $(id){return document.getElementById(id)}
	if(document.all){
		if( name == 'class'){
			$(id).setAttribute('className',val);
		}else if( name == 'style'){
            $(id).style.setAttribute('cssText',val);
        }
    }
}

