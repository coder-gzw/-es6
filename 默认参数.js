function makeRequest1(url,timeout,callback){
    timeout  = timeout || 2000;
    callback = callback || function(){}
}

makeRequest("www.baidu.com");


//只有当默认参数为undefined时,才会认为参数并没有人为的定义,
//比如null,0,应该是有效值
//这种应该是合法的
makeRequest("www.baidu.com",0,0);

function makeRequest2(url,timeout,callback){
    timeout  = (typeof timeout !== "undefined") ? timeout:2000;
    callback = (typeof callback !== "undefined")? callback:function(){}
}

//ES6之后
function makeRequest3(url,timeout=2000,callback=function(){}){}
makeRequest3("www.baidu.com");
makeRequest3("www.baidu.com",300);
makeRequest3("www.baidu.com",300,function(){
    //doThings();
});

function makeRequest4(url,timeout=200,callback){}
//使用timeout默认值
makeRequest4(null,undefined,function(){});
//不使用timeout默认值
makeRequest4("www.baidu.com",null,function(){});









