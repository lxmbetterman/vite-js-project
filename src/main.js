import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
let a = 'aaa'
console.log(a)

const app = createApp(App)

app.use(router)

app.mount('#app')
