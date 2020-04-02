//创建对象
//创建对象的方法包括：工厂模式；构造函数模式；原型模式；组合使用构造函数模式和原型模式；动态原型模式；寄生构造函数模式；稳妥构造函数模式
//工厂模式
function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };
    return o;
}

var person1 = createPerson("Nicholas",29,"Software Engineer");
var person2 = createPerson("Greg",27,"Doctor");

//构造函数模式
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        alert(this.name);
    };
}

var person1 = new Person("Nicholas",29,"Software Engineer");
var person2 = new Person("Greg",27,"Doctor");