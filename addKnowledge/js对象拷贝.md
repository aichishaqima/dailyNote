# js对象拷贝(未整理)

#### 转载自https://www.cnblogs.com/gxp69/p/10729946.html

在JavaScript中，数据类型分为两大类：基本数据类型和复杂数据类型。基本数据类型包括Number、Boolean、String、Null、String），而复杂数据类型包括Object、Function、Array。

而对于基本数据类型来说，复制一个变量值，本质上就是copy了这个变量。一个变量值的修改，不会影响到另外一个变量。

let val = 123;
let copy = val;
console.log(copy);  //123
val = 456;          //修改val的值对copy的值不产生影响
console.log(copy);  //123
而对于复杂数据类型来说，同基本数据类型实现的不太相同。对于复杂数据类型的复制，要注意的是，变量名只是指向这个对象的指针。当我们将保存对象的一个变量赋值给另一个变量时，实际上复制的是这个指针，而两个变量都指向都一个对象。因此，一个对象的修改，会影响到另外一个对象。



复制代码
// obj只是指向对象的指针
let obj = {
    character: 'peaceful'
};
//copy变量复制了这个指针，指向同一个对象
let copy = obj;
console.log(copy);          //{character: 'peaceful'}
obj.character = 'lovely';
console.log(copy);          //{character: 'lovely'} 
复制代码
拷贝对象
在JavaScript中，拷贝对象分为两种方式，浅拷贝和深拷贝。

浅拷贝指两个不同的变量存的是同一个对象的地址，即两个变量指向同一块内存区域；深拷贝则是重新分配了一块内存区域来存储复制后的对象，两个变量存的是真正的两个互不影响的变量。

浅拷贝
复制代码
let objA = {
    name: '对象A',
    content: '我是A'
};
let copyA = objA;

console.log(objA.name);  // ==> "对象A"
console.log(copyA.name);  // ==> "对象A"
复制代码
如此即得到了objA的一份浅拷贝copyA，由于指向的是同一个对象，因此在修改objA的同时也是修改了copyA，反之亦然。

Object.assign 的深拷贝与浅拷贝
Object.assign(target, …sources) 

如果我们把它的第一个参数target设置为一个空对象 {}，同时保证剩余的源对象sources中的属性类型不包含引用类型，则该方法的返回值就是一个与源对象相同的但并不在同一块内存空间另一个对象，即获得了源对象的深拷贝。但是，如果源对象的属性中包含某个对象，也就是这个属性的值指向某个对象，就像下面这样：

复制代码
var obj = {
    name: 'obj name',
    content: {
        a: 1,
        b: 2
    }
};
复制代码
则使用 Object.assign({}, obj) 时，返回的目标对象中的content属性与源对象obj中的content属性指向的同一块内存区域，即对obj下的content属性进行了浅拷贝。因此针对深拷贝，需要使用其他方法，比如自己实现一个深拷贝的方法，或者使用 JSON.parse(JSON.stringify(obj))

另一种浅拷贝 ...操作符：

 let arr = {a:1,b:2}
 let arr2 = {...arr}
 arr2.a = 2
 console.log(arr.a)//1
 console.log(arr2.a)//2
 

深拷贝
我认为对于对象来说最简单的深拷贝方法就是转成字符串再解析

var obj = {a:1,b:2}
var newObj = JSON.parse(JSON.stringify(obj));
newObj.a=3;
console.log(obj);
另外一种深拷贝方法：递归遍历

复制代码
var obj = {a:{b:10}};
function deepCopy(obj){
　　if ( typeof obj != 'object' ){ // ( obj  instanceof Object || obj  instanceof Array )
　　　　return obj;
　　}
　　var newobj = {};
　　for ( var attr in obj) {
　　　　newobj[attr] = deepCopy(obj[attr]);
　　}
　　return newobj;
}
var obj2 = deepCopy(obj);
obj2.a.b = 20;
alert(obj.a.b); //10
复制代码