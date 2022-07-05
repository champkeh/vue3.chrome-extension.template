import { createApp } from 'vue'
import App from './App.vue'
import pinia from "@/stores"

// 引入全局样式
import '@/style/global.css'
// 引入字体图标
import 'remixicon/fonts/remixicon.css'

const app = createApp(App)
app.use(pinia)

app.mount('#app')
