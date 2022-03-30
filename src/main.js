import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import { createMetaManager, defaultConfig } from 'vue-meta'
import VueSmoothScroll from 'vue3-smooth-scroll'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import './theme.css'

const head = createHead()
createApp(App)
	.use(VueSmoothScroll)
	.use(
		createMetaManager(false, {
			...defaultConfig,
			meta: { tag: 'meta', nameless: true },
		})
	)
	.use(store)
	.use(router)
	.use(createHead)
	.use(head)
	.mount('#app')
