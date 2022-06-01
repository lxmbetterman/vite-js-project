import { useDark, useToggle } from '@vueuse/core'
//LocalStroage中的 vueuse-color-scheme值控制初始值
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
