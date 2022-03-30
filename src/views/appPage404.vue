<template>
	<header class="header flex-column">
		<h1>Ошибка 404</h1>
	</header>
	<main class="main flex-column card-shadow">
		<section class="flex-row error">
			<img class="error-img" src="../assets/tower_of_pisa.gif" alt="tower" />
			<div class="error-text">
				<h3>Ой! Башня Упала!</h3>
				<h3>Кажется, Вы ввели не верный адрес, или страница была удалена.</h3>
				<h3>Попробуйте еще раз, с Главной страницы.</h3>
			</div>
		</section>
		<button class="btn" @click="routerPush">Перейти на главную</button>
	</main>
</template>

<script>
import { mapActions, useStore } from 'vuex'
import { computed } from 'vue'
import { useMeta } from 'vue-meta'
export default {
	setup() {
		const store = useStore()
		const computedMeta = computed(() => ({
			title:
				store.getters['Backend/CONTENT'].length > 0
					? store.getters['Backend/CONTENT'][0].title
					: 'Онлайн-школа итальянского языка Италиамо',
			meta: [
				{
					name: 'description',
					content:
						store.getters['Backend/CONTENT'].length > 0
							? store.getters['Backend/CONTENT'][0].description
							: 'Онлайн-школа итальянского языка Италиамо',
				},
				{
					name: 'keywords',
					content:
						store.getters['Backend/CONTENT'].length > 0
							? store.getters['Backend/CONTENT'][0].keywords
							: 'Италиамо, онлайн-школа, итальянский',
				},
			],
		}))
		useMeta(computedMeta)
	},
	methods: {
		routerPush() {
			window.scrollTo(0, 0)
			this.$router.push('/')
		},
		...mapActions('Backend', {
			GET_CONTENT: 'GET_CONTENT',
		}),
	},
	mounted() {
		this.GET_CONTENT(9)
	},
	name: 'appPage404',
}
</script>

<style scoped>
.main {
	justify-content: space-evenly;
	align-items: center;
	margin: 0 2rem;
	padding: 2rem;
	background-color: #fdfdfd;
}
.main .btn {
	margin: 2rem 0 0 0;
	width: 90%;
}
.error {
	width: 100%;
}
.error-img {
	width: 100%;
	max-width: 25rem;
	max-height: 25rem;
}
.error-text {
	flex-grow: 1;
	max-width: 40rem;
}
@media (max-width: 650px) {
	.header {
		margin-bottom: 0;
	}
	.main {
		justify-content: space-evenly;
		align-items: center;
		margin: 0 1rem;
		padding: 1.5rem;
		background-color: #fdfdfd;
	}
	.main .btn {
		margin: 0;
		width: 100%;
	}
}
</style>
