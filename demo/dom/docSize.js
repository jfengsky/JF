/**
 * 获得文档高度和宽度大小
 * @Author: wb-jiangfeng
 * @Time: 12-5-23 11:23
 * @Return: array [height,width]
 *
 */

function docSize(){
    this._size = [];
    this._size[0] = document.body.clientHeight;
    this._size[1] = document.body.clientWidth;
    return this._size;
}