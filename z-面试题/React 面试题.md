### 1. 什么事jsx
JSX的全称是 Javascript and XML,是一个 JavaScript 的语法扩展。JSX更像一种模板，类似于Vue中的 template。

JSX是JS的语法糖，编译时JSX会通过Babel编译成JS。
Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
并返回一个JS对象，也就是虚拟DOM。

### 什么是高阶组件？如何实现？
高阶组件的英文是 Higher-Order Components，简称为 HOC
高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。
高阶组件不会修改传入的组件，也不会使用继承来复制其行为。HOC通过组合包裹的形式来返回一个新的组件。HOC 是纯函数，没有副作用
- 不要在 render 方法中使用 HOC
- 务必复制静态方法