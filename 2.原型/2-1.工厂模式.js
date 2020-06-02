// 1.工厂模式
function factory ({id, name}) {
  const o = new Object()
  o.id = id
  o.name = name
  o.sayName = function () {
    console.log(`my name is ${this.name}`)
  }
  return o
}

const f = factory({id: 19, name: 'yxp'})
// 优点：实现了最基本的封装 但是没有定义额外的类型 o instanceof Object => true 统统是Object 
// 缺点：内部创建很多个同类 开辟过多的空间 冗余

// 改进后
function factory ({id, name}) {
  o.id = id
  o.name = name
  o.sayName = sayName
  return o
}
function sayName () {
  console.log(`my name is ${this.name}`)
}

// 缺点：污染全局变量
