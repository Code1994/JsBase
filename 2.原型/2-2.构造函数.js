// 1-2构造函数模式
function Factory ({id, name}) {
  this.id = id
  this.name = name
  this.sayName = function () {
    console.log(`my name is ${this.name}`)
  }
}

const f = new Factory({id: 19, name: 'yxp'})

// 优点：实例被标识为一种额外的类型，而不仅仅是Object 如 f instanceof Factory => true
// 缺点：同工厂模式 内部函数浪费空间

// 改进后 污染全局变量
function Factory ({id, name}) {
  this.id = id
  this.name = name
  this.sayName = sayName
}
function sayName () {
  console.log(`my name is ${this.name}`)
}
