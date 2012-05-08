/**
 * User: jiangfeng
 * Date: 12-5-7
 * Time: 17:11
 * 获取标签属性
 */
function getAttr(id,name){
    var elem = $(id).getAttribute(name);    //$(id) 参考 function $(id){return document.getElementById(id)}
    if(elem == null){
        return false
    }else if(!document.all){   //如果非ie
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

