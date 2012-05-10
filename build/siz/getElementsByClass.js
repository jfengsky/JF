/**
 * 根据class获取节点
 * @author jiangfeng
 * @time 12-5-7 16:12
 * @param Eclass string 标签的class值
 * @return class节点数组
 */

function getElementsByClass(Eclass){
    var _allTag = document.getElementsByTagName("*");   //获取所有节点，耗性能
    var _allClass = [];
    for(i = 0;i < _allTag.length; i++){
        if(_allTag[i].className == Eclass){
            _allClass.push(_allTag[i]);
        }
    }
    return _allClass;
}