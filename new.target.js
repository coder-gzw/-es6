function Person(name,age){
    if(this instanceof Person){
        this.name = name;
        this.age  = age;
        console.log("对象是通过构造函数调用的");
    }else{
        throw Error("必须通过关键字new来调用Person");
    }
}

let person1 = new Person("xx",18);
let person2 =Person("xx",18); //抛出错误


//但是上面做法存在缺陷，比如
let person3= Person.call(person1,"gg",19); 


function Person2(name,age){
    if(typeof new.target  !== "undefined"){
        this.name = name;
        this.age  = age;
    }else{}
}

function Person3(name,age){
    if(new.target === Person3){
        this.name = name;
        this.age  =age;
    }else{}
}



