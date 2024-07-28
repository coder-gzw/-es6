//核心思路就是这个函数是通过谁来调用的,然后设法把要调用的函数
//放到该对象中
Function.prototype.gexec=function(thisArg,otherArg){
    thisArg = (thisArg === undefined || thisArg === null) ? window : Object(thisArg);
    Object.defineProperty(thisArg,"fn",{
        enumerable:false,
        writable:true,
        value:this
    });
    thisArg.fn(...otherArg);
    //delete thisArg.fn;
}
function gapply(thisArg,otherArg){
    thisArg.gexec(thisArg,otherArg);
}
function gcall(thisArg,...otherArg){
    thisArg.gexec(otherArg);
}
function gbind(thisArg,...otherArg){
    thisArg = thisArg === null || thisArg === undefined ? window : Object(thisArg);
    Object.defineProperty(thisArg,"fn",{
        enumerable:false,
        writable:true,
        value:this
    });
    return (newArgs)=>{
        //const all = otherArg.concat(newArgs);
        const allArgs = [...otherArg,...newArgs];
        thisArg.fn(...allArgs);
        //delete thisArg.fn;
    }
}

