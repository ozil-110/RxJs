# RxJs
RxJS 是使用 Observables 的响应式编程的库，它使编写异步或基于回调的代码更容易。RxJS 是基于观察者模式和迭代器模式以函数式编程思维来实现的。
RxJS 中含有两个基本概念：Observables 与 Observer。Observables 作为被观察者，是一个值或事件的流集合；而 Observer 则作为观察者，根据 Observables 
进行处理。Observables 与 Observer 之间的订阅发布关系(观察者模式) 如下：

- 订阅：Observer 通过 Observable 提供的 subscribe() 方法订阅 Observable。
- 发布：Observable 通过回调 next 方法向 Observer 发布事件。

