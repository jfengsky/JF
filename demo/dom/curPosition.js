/**
 *
 * @Author: wb-jiangfeng
 * @Time: 12-5-23 15:46
 * @Param:
 *  - ev :事件
 *  -
 * @Return: [x,y]鼠标的横坐标和纵坐标
 *
 */

function curPosition(ev){
    this.position = [];
    this.position[0] = ev.clientX + document.body.scrollTop - document.body.clientTop;
    this.position[1] = ev.clientY + document.body.scrollLeft - document.body.clientLeft;
    return this.position;
}