// 1-3 原型模式
function Factory () {

}

// 所有对象默认有一个 protoType 属性 （原型链）
Factory.prototype.id = 19
Factory.prototype.name = 'yxp'
Factory.prototype.sayName = function () {
  console.log(`my name is ${this.name}`)
}
const f = new Factory()
f.id //19
f.name // name

// 优点 对象的原型上挂载属性和方法 方便共用
// 缺点 所有实例访问到的属性和方法是相同的

// 所以一般会将构造函数模式与原型模式混合使用
