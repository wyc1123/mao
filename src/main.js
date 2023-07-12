import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'//px转换rem
import 'normalize.css'//清楚默认样式
import 'vant/es/dialog/style';

const app = createApp(App)

app.use(router)

app.mount('#app')