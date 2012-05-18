/**
 *
 * @author wb-jiangfeng
 * @time 12-5-17 下午5:27
 * @param url string 请求地址
 * @param type string 请求格式 POST或GET
 * @param param object 发送参数
 * @param fn object 执行函数
 * @return
 * 自己封装的ajax
 */

function ajax(type,url,param,fn){
    var xmlHttp;
    if(window.ActiveXobject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }
    function changeParam(){
        var tempparam = '';
        for( xy in param){
            tempparam += xy + '=' + param[xy] + '&';
        }
        tempparam = tempparam.slice(0,-1);
        return tempparam;
    }
    xmlHttp.onreadystatechange = handleStateChange;
    xmlHttp.open(type, url + '?' + changeParam(), true);
    xmlHttp.send(null);

    function handleStateChange(){
        if(xmlHttp.readyState == 4){
            if(xmlHttp.status == 200){
                fn(xmlHttp.responseText)
            }
        }else{
            //console.log('error');
        }
    }
}