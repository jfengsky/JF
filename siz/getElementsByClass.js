/**
 * User: jiangfeng
 * Date: 12-5-9
 * Time: 上午11:44
 * class选择器
 * @return :class数组
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