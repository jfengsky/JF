/**
 * ��ȡ����������������������붥����ֵ
 * @author wb-jiangfeng
 * @time 12-5-18 19:56
 * @param num number
 * @return ���ع������߶Ȼ���ָ����������ת��ָ������
 *
 */

function scrollTop(num){
    if (arguments.length <= 0){
        var scrotop = document.documentElement.scrollTop;
        return scrotop;
    }else{
        document.documentElement.scrollTop = num;
    }
}