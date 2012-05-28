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
    };
    this.easeIn = function(t, b, c, d){
        return c*(t/=d)*t + b;
    };
    this.easeOut = function(t, b, c, d){
        return -c *(t/=d)*(t-2) + b;
    };
    this.easeInOut = function(t,b,c,d){
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    };
    this.queeaseOut = function(t,b,c,d){
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    }
}