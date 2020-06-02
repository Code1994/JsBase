// 1.arguments的callee属性
// callee 意为被调用者 函数的arguments除了保存参数外，还有这么一个默认属性。通常在非严格模式下使用 可以在递归函数中减少代码耦合性

// 函数名只是包含指向函数的一个指针而已  所以arguments.callee也是包含指向当前函数的一个指针
function deepCount (num) {
  if (num > 1) {
    // 这里直接使用 num * deepCount(num - 1) 会有耦合 修改外层函数名时，这里的函数名也要修改
    return num * arguments.callee(num - 1)
  }
  else if (num === 1) {
    return 1
  }
}

// 2.arguments的caller属性 
// 当调用这个函数时 会打印undefined 《JS高级程序设计》上说，arguments有这个属性，而且在非严格模式下始终是undefined。但是我打印了下arguments,发现并没有这个属性。。。
function fn () {
  console.dir(arguments.caller) // undefined
  console.dir(arguments)
}

// 3.函数的calller属性
// caller意为调用者 如果在全局作用域中调用inner函数 会打印null。否则会指向调用者函数的函数体。
function outer () {
  return inner()
}
function inner () {
  console.log(inner.caller)
  return inner.caller
}
outer()

// 调用outer之后 会打印整个outer函数的函数体
/*
  function outer () {
    inner()
  }
*/ 
