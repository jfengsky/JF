/**
 * ������������Ӹ߶ȺͿ��
 * @Author: wb-jiangfeng
 * @Time: 12-5-23 ����11:54
 * @Return: array [height,width]
 *
 */
function viewSize(){
    this.height = document.documentElement.clientHeight;
    this.width = document.documentElement.clientWidth;
    return [this.height,this.width];
}