function fibonacci (n) { // 递归调用: 函数内部调用自己
  return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2)
}
console.log(this)
// alert('---')
var onmessage = function (event) {
  // 接收主线程发送过来的数据
  const n = event.data
  console.log('分线程接收到主线程发送的数据: ', n)

  // 处理数据
  const result = fibonacci(n)

  // 向主线程返回数据
  postMessage(result)
  console.log('分线程向主线程返回数据: '+result)
}