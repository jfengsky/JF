/**
 * User: jiangfeng
 * Date: 12-5-9
 * Time: 14:29
 * 获取外链css的值
 */
function getCss(el){

}

/*
 Dom中的getPropertyValue方法可以用来获取元素中指定的css属性值．该方法支持W3C标准．
 与IE中的currentStyle方法作用相同．都是根据指定的css属性名称来获取属性值．
 他们的区别是：
 1：getPropertyValue必须配合getComputedStyle方法一起使用．
 2：getPropertyValue支持W3C标准．但不支持IE浏览器，
 3：currentStyle非W3C标准．只支持IE.不能在FF等浏览器下使用．
 如果想在多浏览器里实现这种效果，必须根据判断浏览器来配合使用．
*/
