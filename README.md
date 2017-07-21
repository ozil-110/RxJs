# RxJs

RxJS 是使用 Observables 的响应式编程的库，它使编写异步或基于回调的代码更容易。RxJS 是基于观察者模式和迭代器模式以函数式编程思维来实现的。
RxJS 中含有两个基本概念：Observables 与 Observer。Observables 作为被观察者，是一个值或事件的流集合；而 Observer 则作为观察者，根据 Observables 
进行处理。Observables 与 Observer 之间的订阅发布关系(观察者模式) 如下：

- 订阅：Observer 通过 Observable 提供的 subscribe() 方法订阅 Observable。
- 发布：Observable 通过回调 next 方法向 Observer 发布事件。

## Why RxJs ？

为什么使用RxJS?不是有Promise吗？没错，Promise对于只期望单值返回的异步请求（比如：XMLHttpRequest）是一个好的解决方案。但Reactive Extensions for JavaScript对Promises, callbacks , Web Workers, Web Sockets进行了统一优化. 一旦我们统一优化这一些概念后，我们将能更好的进行开发。

### Observable vs Promise

- Promise

  1. 返回单个值
  2. 不可取消
  
- Observable

  1. 随着时间的推移发出多个值
  2. 可以取消的
  3. 支持 map、filter、reduce 等操作符
  4. 延迟执行，当订阅的时候才会开始执行

## Use

上面的几个demo有助于入门理解RxJs的用法，RxJs提供了足够的操作符来处理这些值或事件的流集合，下图有助于理解RxJs中数组的操作符：

