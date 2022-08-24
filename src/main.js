import App from './App.vue'
import { createApp } from 'vue'
import router from "./router/index"
import store from './store'



createApp(App).use(router).use(store).mount('#app')
// createApp(App).use(store)
