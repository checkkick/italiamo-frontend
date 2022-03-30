<template>
	<header class="header flex-column">
		<h1>Преподаватели школы</h1>
	</header>
	<section class="flex-column">
		<div class="flex-row">
			<app-main-teachers
				v-for="content in teachers"
				:key="content.id"
				:alt="content.alt"
				:name="content.name"
				:image="content.logo"
				:href="content.href"
			></app-main-teachers>
		</div>
	</section>
</template>

<script>
import appMainTeachers from '../components/appCardsTeachers'
import { mapActions, mapGetters, useStore } from 'vuex'
import { useMeta } from 'vue-meta'
import { computed } from 'vue'
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
	name: 'appPageTeachers',
	computed: {
		...mapGetters('Backend', {
			teachers: 'TEACHERS',
		}),
	},
	methods: {
		...mapActions('Backend', {
			GET_TEACHERS: 'GET_TEACHERS',
			GET_CONTENT: 'GET_CONTENT',
		}),
	},
	mounted() {
		this.GET_TEACHERS()
		this.GET_CONTENT(6)
	},
	components: {
		appMainTeachers,
	},
}
</script>

<style scoped>
@media (max-width: 650px) {
	h1 {
		margin: 0;
	}
}
</style>
