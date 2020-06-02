// 继承方法的本质是重写原型对象 继承属性的本质是借用构造函数
function Factory (name, age) {
  this.name = name
  this.age = age
}
Factory.prototype.sayName = function () {
  console.log(`my name is ${this.name}`)
}

// 继承一 这种方式会将name age这些属性都放在原型中 虽然也可以访问 但是属性被固定死了 如下例 name就是'yxp' age就是26。所以我们通常使用组合继承的方式
function Person () {
  
}
Person.prototype = new Factory('yxp', 26)

var p = new Person()
// 可以访问属性和方法
console.log(p.name)
console.log(p.age)
p.sayName() //'my name is yxp'

// 继承二 组合继承方式 借用构造函数来维护自定义的属性 保证了属性的可设置。重写原型对象 实现方法的继承
function Person (name, age) {
  // 构造函数中的this指向实例
  Factory.call(this, name, age)
}
// 这里调用Factory 为了不对原型上的属性进行赋值 不再传入参数。而且实现了方法的继承
Person.prototype = new Factory()

var p = new Person('ljm', 24)
console.log(p.name)
console.log(p.age)
p.sayName() //'my name is ljm'