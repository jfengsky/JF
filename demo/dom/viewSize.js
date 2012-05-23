/**
 * 获取浏览器窗口可视大小
 * @Author: wb-jiangfeng
 * @Time: 12-5-23 11:54
 * @Return: array [height,width]
 *
 */
function viewSize(){
    this._size = [];
    this._size[0] = document.documentElement.clientHeight;
    this._size[1] = document.documentElement.clientWidth;
    return this._size;
}