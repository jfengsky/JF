/**
 * 设置标签属性值
 * @author jiangfeng
 * @time 12-5-7 16:12
 * @param id string
 * @param name string 属性名
 * @param val string 属性值
 * @return 属性值
 */
function setAttr(id,name,val){
    $(id).setAttribute(name,val);    //$(id) 参考 function $(id){return document.getElementById(id)}
	if(!+[1,]){
		if( name == 'class'){
			$(id).setAttribute('className',val);
		}else if( name == 'style'){
            $(id).style.setAttribute('cssText',val);
        }
    }
}

