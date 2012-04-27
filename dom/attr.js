/**
*	给容器赋予属性
*	
*	
attributes：获取一个属性作为对象
getAttribute：获取某一个属性的值
setAttribute：建立一个属性，并同时给属性捆绑一个值
createAttribute：仅建立一个属性
removeAttribute：删除一个属性
getAttributeNode：获取一个节点作为对象
setAttributeNode：建立一个节点
removeAttributeNode：删除一个节点
attributes可以获取一个对象中的一个属性，并且作为对象来调用，注意在这里要使用“[]”，IE在这里可以使用“()”，考虑到兼容性的问题，要使用“[]”。关于attributes属性的使用方式上，IE和FF有巨大的分歧，在此不多介绍。

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

