//Function.prototype中定义，确定对象是否为函数的实例。

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

console.log(Array[Symbol.hasInstance](arr1));   //true
console.log(Array[Symbol.hasInstance](arr1));   //true
console.log(arr1 instanceof Array);             //true
console.log(arr2 instanceof Array);             //true

Object.defineProperty(Array,Symbol.hasInstance,{
    value:function(v){
        return false;
    }
});


console.log(Object.getPrototypeOf(Array) === Function.prototype);  // true
//如果在Function.prototype中修改Symbol.hasInstance，那么所有函数都将受到关联，因此只是单独的针对Array改写。
console.log(Array[Symbol.hasInstance](arr1));    //false
console.log(Array[Symbol.hasInstance](arr1));    //false
console.log(arr1 instanceof Array);              //false
console.log(arr2 instanceof Array);              //false



//将1-100定义为一个特殊数字类型的实例(深入理解ES6 :P115)
function SpeiceNumber(){}

Object.defineProperty(SpeiceNumber,Symbol.hasInstance,{
    value:function(v){
        return (v instanceof Number) && (v >= 1 && v<= 100);
    }
});

var two = new Number(2);
var zero = new Number(0);
console.log(two instanceof SpeiceNumber);   //true
console.log(zero instanceof SpeiceNumber);  //false







