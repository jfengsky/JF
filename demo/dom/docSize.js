/**
 * �����ĵ��߶ȺͿ��
 * @Author: wb-jiangfeng
 * @Time: 12-5-23 ����11:23
 * @Return: array [height,width]
 *
 */

function docSize(){
    this.height = document.body.clientHeight;
    this.width = document.body.clientWidth;
    return [this.height,this.width];
}