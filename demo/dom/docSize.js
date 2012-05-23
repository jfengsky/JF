/**
 * 返回文档高度和宽度
 * @Author: wb-jiangfeng
 * @Time: 12-5-23 上午11:23
 * @Return: array [height,width]
 *
 */

function docSize(){
    this.height = document.body.clientHeight;
    this.width = document.body.clientWidth;
    return [this.height,this.width];
}