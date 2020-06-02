// 对象内部属性  我们将其分为两类 数据属性与访问器属性  他们的内置的属性标识符有所差别

// 一 数据属性
// 1.configurable 属性是否可配置 如：
/*
  1-1. 能否通过delete删除属性从而重新定义属性
  1-2. 能否修改属性的特性
  1-3. 能否把属性修改为访问器属性
*/ 

// 2.enumerable 属性是否可被枚举 枚举方法有3中 for...in     Object.keys    Object.getOwnPropertyNames

// 3.value 该属性的数据值  读取属性值的时候，从这个位置读  写入属性值的时候，把新值保存在这个位置  这个特性的默认值为undefined

// 4.writable 能否修改属性的值


// 二 访问器属性
// 1.configurable  同上

// 2.enumerable 同上

// 3.get 在读取属性时调用的函数

// 4.set 在写入属性时调用的函数

// 在以构造函数或者对象字面量的方式 创建对象时 该对象的属性的configurable enumerable writable都是true 其他为undefined。而以defineProperty或者defineProperties定义属性时 上述3个描述符如果没有设置 默认为false
// 三 修改属性默认的特性
var obj = {}
Object.defineProperty(obj, 'name', {
  writable: false,
  value: 'yxp'
})
Object.defineProperties(obj, {
  age: {
    enumerable: true,
    value: '26'
  },
  sex: {
    value: 'boy'
  }
})

// 四 读取属性默认的特性
Object.getOwnPropertyDescriptor(obj)


// 五 枚举属性的方式
// 1. for...in 结合 Object.hasOwnProperty   for...in本身也会枚举出原型上的可枚举属性

// 2. Object.keys

// 3. Object.getOwnPropertyNames  ！！！会遍历出不可枚举的属性
