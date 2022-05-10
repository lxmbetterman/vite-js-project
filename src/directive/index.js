// 自定义指令集合

import { Resize } from './myDirectives/Resize'
const myDirectives = {
  Resize,
  // Animate,
}

export default {
  install(app, options) {
    console.log('开始注册全局指令..')
    console.log(app, 'app')
    console.log(options, 'options')
    Object.keys(myDirectives).forEach((key) => {
      app.directive(key, myDirectives[key])
    })
  },
}

/**
 * 一个指令的定义对象可以提供几种钩子函数 (都是可选的)：
 const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount() {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted() {},
  // 绑定元素的父组件更新前调用
  beforeUpdate() {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated() {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount() {},
  // 绑定元素的父组件卸载后调用
  unmounted() {}
  }
}
 */
