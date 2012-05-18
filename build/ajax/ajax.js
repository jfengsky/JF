/**
 *
 * @author wb-jiangfeng
 * @time 12-5-17 下午5:27
 * @param url string 请求地址
 * @param type string 请求格式 POST或GET
 * @param param object 发送参数 json格式
 * @param fn object 执行函数
 * @param datatype string 返回数据格式，目前只支持text json
 * @return
 * 自己封装的ajax
 */

function ajax(type,url,param,fn,datatype){
    var xmlHttp;
    if(window.ActiveXobject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }
    function changeParam(){
        var send_param = '';
        for( x in param){
            send_param += x + '=' + param[x] + '&';
        }
        send_param = send_param.slice(0,-1);
        return send_param;
    }
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4){
            if(xmlHttp.status == 200){
                if( datatype == 'json'){
                    fn(eval("(" + xmlHttp.responseText + ")"));
                }else if(datatype == 'text'){
                    fn(xmlHttp.responseText)
                }
            }
        }else{
            //console.log('error');
        }
    };
    if(type == 'get' || type == 'GET'){
        xmlHttp.open(type, url + '?' + changeParam(), true);
        xmlHttp.send(null);
    }else if(type == 'post' || type == 'POST'){
        xmlHttp.open(type, url, true);
        xmlHttp.send(changeParam());
    }
}