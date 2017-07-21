# RxJs

RxJS 是使用 Observables 的响应式编程的库，它使编写异步或基于回调的代码更容易。RxJS 是基于观察者模式和迭代器模式以函数式编程思维来实现的。
RxJS 中含有两个基本概念：Observables 与 Observer。Observables 作为被观察者，是一个值或事件的流集合；而 Observer 则作为观察者，根据 Observables 
进行处理。Observables 与 Observer 之间的订阅发布关系(观察者模式) 如下：

- 订阅：Observer 通过 Observable 提供的 subscribe() 方法订阅 Observable。
- 发布：Observable 通过回调 next 方法向 Observer 发布事件。

## Why RxJs ？

为什么使用RxJS?不是有Promise吗？没错，Promise对于只期望单值返回的异步请求（比如：XMLHttpRequest）是一个好的解决方案。但Reactive Extensions for JavaScript对Promises, callbacks , Web Workers, Web Sockets进行了统一优化. 一旦我们统一优化这一些概念后，我们将能更好的进行开发。

### Observable vs Promise

#### 1.Promise

- 返回单个值
- 不可取消
  
#### 2.Observable

- 随着时间的推移发出多个值
- 可以取消的
- 支持 map、filter、reduce 等操作符
- 延迟执行，当订阅的时候才会开始执行

## Use

上面的几个demo有助于入门理解RxJs的用法，RxJs提供了足够的操作符来处理这些值或事件的流集合，下图有助于理解RxJs中数组的操作符：

```js
var source = Rx.Observable.from([1,2,3,4,5]);
var example = source
              .filter(x => x % 2 === 0)
              .map(x => x + 1)

example.subscribe(console.log);
```

![img](https://github.com/ozil-110/RxJs/blob/master/observable-operator.gif)

## Learning materials

- [https://zhuanlan.zhihu.com/p/27721834]()RxJs福利,最新RxJs学习资料.
- [http://cn.rx.js.org/](http://cn.rx.js.org/)RxJs中文文档.
- [https://channel9.msdn.com/posts/Rx-and-Netflix](https://channel9.msdn.com/posts/Rx-and-Netflix)RxJs视频.
- [https://www.ctolib.com/topics-112872.html](https://www.ctolib.com/topics-112872.html)RxJS - Observable 详解.

## redux-observable

redux作为react社区最热门的状态管理框架，其纯函数的写法避开了副作用的产生，但它只能处理同步action，对于异步的acion必须借助中间件来拦截action，社区提供众多的中间件来处理，比如：

- redux-thunk
- redux-promise
- redux-promise-middleware
- redux-action-tools
- redux-loop
- redux-saga

详细的介绍可以看[https://zhuanlan.zhihu.com/p/24337401](https://zhuanlan.zhihu.com/p/24337401)
上面的方案可以根据具体的项目需求进行选择，但他们或多或少都有一些缺点。而redux-observable基于RxJs，用另一种思维方式，对于复杂的交互，更有优势。

### Learning materials

- [https://redux-observable-cn.js.org/](https://redux-observable-cn.js.org/)redux-observable中文文档.
- [https://www.youtube.com/watch?v=AslncyG8whg](https://www.youtube.com/watch?v=AslncyG8whg)redux-observable视频.
