/* 
    除了我们这里用到的单个响应式对象作为一个 store 之外，
    你还可以使用其他响应性 API 例如 ref() 或是 computed()，
    或是甚至通过一个组合式函数来返回一个全局状态： 
*/
import { ref } from 'vue'

// 全局状态，创建在模块作用域下
const globalCount = ref(1)

export function useCount() {
  // 局部状态，每个组件都会创建
  const localCount = ref(1)

  return {
    globalCount,
    localCount,
  }
}
