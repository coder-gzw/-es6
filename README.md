# 深入理解ES6

记录一些学习过程。

apply-call:

这两个函数的主要作用在于改变函数调用时候的上下文。


比如我声明了一个函数：

```js
function func(){
	//...
} 
```

然后我执行这个函数，然后在执行的过程中，比如我想要使用其他对象中的方法或者使用其他对象中数据：

```js
let obj={
	name:"gzw",
	say(){}
}
function function(){
	let name = obj.name;
	obj.say();

}
```

自然的想法就像上面那样。

如果通过apply或者call改变函数的执行上下文，也可以这样子：

```js
js
	let obj={
	name:"gzw",
	say(){}
}
	function func(){
	this.say();
}
	func.apply(obj);
```
