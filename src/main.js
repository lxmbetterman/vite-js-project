import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import myDirectives from '@/directive'
let a = 'aaa'
console.log(a)

const app = createApp(App)

app.use(myDirectives, { test: '????' }) // options:{ test: '????' }
app.use(router)

app.mount('#app')
