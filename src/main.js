// index.js
import microApp from '@micro-zoe/micro-app'

microApp.start()

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import myDirectives from '@/directive'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(myDirectives, { test: '????' }) // options:{ test: '????' }
app.use(router)

import { getIndexStyle, writeNewStyle } from '@/utils/theme/index'

/* 初始化主题样式 */
getIndexStyle().then(() => {
  writeNewStyle()
})

app.mount('#app')
