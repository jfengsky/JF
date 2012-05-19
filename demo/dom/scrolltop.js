/**
 * 获取或者设置浏览器滚动条距离顶部的值
 * @author wb-jiangfeng
 * @time 12-5-18 19:56
 * @param num number
 * @return 返回滚动条高度或者指定滚动条跳转到指定坐标
 *
 */

function scrollTop(num){
    if (arguments.length <= 0){
        var scrotop = document.documentElement.scrollTop;
        return scrotop;
    }else{
        document.documentElement.scrollTop = num;
    }
}