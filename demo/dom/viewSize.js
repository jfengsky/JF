/**
 * 返回浏览器可视高度和宽度
 * @Author: wb-jiangfeng
 * @Time: 12-5-23 上午11:54
 * @Return: array [height,width]
 *
 */
function viewSize(){
    this.height = document.documentElement.clientHeight;
    this.width = document.documentElement.clientWidth;
    return [this.height,this.width];
}