/**
 *
 * @Author: wb-jiangfeng
 * @Time: 12-5-28 13:22
 * @Param:
 *  - startPosition 当前位置
 *  - tagTime 时间
 *  - endPosition 移动距离
 *  - needTime 移动该距离需要的时间
 * @Return:
 *  - linear 匀速
 *
 */

function Tween(){
    this.linear = function(tagTime, startPosition, endPosition, needTime){
        return tagTime * endPosition / needTime + startPosition;
    }
}