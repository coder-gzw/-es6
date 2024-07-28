//1.属性的增强
//2.方法的增强
//3.计算属性名的写法
function func1(){
    let na="gzw";
    let ag = 18;
    return {
    //na和ag的值通过外部获得
        name:na,
        age:ag
    }
}
function func2(){
    let name="gzw";
    let age = 18;
    return {
        //如果属性名和变量名相同，可以简写
        name,
        age
    }
}

const obj1={
    func:function(){
    }
}
//简写
const obj2={
    func(){}
}


let  s="name";
const obj3 = {
    [s]:"gzw"
}



