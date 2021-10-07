import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import store from './store/index'
import router from './router/router'
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App)
    .use(VueSmoothScroll)
    .use(store)
    .use(router)
    .mount('#app')
