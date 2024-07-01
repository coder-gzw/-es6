function Person(name){
    if(this instanceof Person){
        this.name = name;
    }else{
        throw new Error("必须通过new关键字来调用Person");
    }
}

