import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import store from './vuex/store'
import router from './components/router/router'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
