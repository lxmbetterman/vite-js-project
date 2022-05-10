// import $utils from '@/utils/utils'
import { debounce } from 'lodash-es'
export const Resize = {
  setup() {
    const debouncedResize = null
    return { debouncedResize }
  },
  mounted(el, binding) {
    const handler = binding.value
    console.log(binding, '指令加载')
    /**
      [options.leading=false] (boolean): 指定在延迟开始前调用。
      [options.maxWait] (number): 设置 func 允许被延迟的最大值。
      [options.trailing=true] (boolean): 指定在延迟结束后调用。
     */
    const options = {
      // delay ：不立即执行
      leading: binding.modifiers.delay ? false : true,
    }
    let delayTime = Number(binding.arg)
    const debouncedResize = debounce(handler, delayTime, options) // 生成一个debounce函数

    window.addEventListener('resize', debouncedResize)
    el._onResize = {
      handler: debouncedResize,
    }
  },

  unmounted(el) {
    if (!el._onResize) return

    const { handler } = el._onResize
    window.removeEventListener('resize', handler)
    delete el._onResize
  },
}

export default Resize
