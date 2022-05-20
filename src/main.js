import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import myDirectives from '@/directive'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.use(myDirectives, { test: '????' }) // options:{ test: '????' }
app.use(router)

app.mount('#app')
