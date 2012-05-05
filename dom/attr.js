/**
*	获取标签的属性
*	
*	
*/
function getAttr(id,name){
    var elem = $(id).getAttribute(name);
    if(elem == null){
        return false
    }else if(!UA.ie()){   //如果非ie
        if(name == 'checked'){
            if (elem.length == 0){
                return true;
            }else{
                return false;
            }
        }
        return elem;
    }else{
        if( name == 'class'){   //ie8下 getAttribute('class')无法返回正确的值
            return $(id).className;
        }else if( name == 'style'){
            return $(id).style.cssText;
        }else{
            return elem;
        }
    }
}

