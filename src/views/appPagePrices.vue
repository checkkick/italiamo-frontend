<template>
	<header class="header flex-column">
		<h1>Цены на занятия</h1>
	</header>
	<main class="flex-column">
		<table class="table">
			<thead>
				<tr class="table-title">
					<th class="table-title-item">Типы занятий</th>
					<th class="table-title-item">Мини-группа 4 человека</th>
					<th class="table-title-item">Мини-группа 2 человека</th>
					<th class="table-title-item">Индивидуальные</th>
				</tr>
			</thead>
			<tr class="table-row-1">
				<td class="table-row-item" aria-label="Типы занятий">
					Занятие с русскоязычным - преподавателем
				</td>
				<td class="table-row-item" aria-label="Мини-группа 4 человека">690 руб.</td>
				<td class="table-row-item" aria-label="Мини-группа 2 человека">1070 руб.</td>
				<td class="table-row-item" aria-label="Индивидуальные">1970 руб.</td>
			</tr>
			<tr class="table-row-2">
				<td class="table-row-item" aria-label="Типы занятий">
					Занятие с преподавателем - носителем языка
				</td>
				<td class="table-row-item" aria-label="Мини-группа 4 человека">970 руб.</td>
				<td class="table-row-item" aria-label="Мини-группа 2 человека">1270 руб.</td>
				<td class="table-row-item" aria-label="Индивидуальные">2470 руб.</td>
			</tr>
			<tr class="table-row-1">
				<td class="table-row-item" aria-label="Типы занятий">Минимальный пакет</td>
				<td class="table-row-item" aria-label="Мини-группа 4 человека">
					5520 руб. (8 занятий)
				</td>
				<td class="table-row-item" aria-label="Мини-группа 2 человека">
					8560 руб. (8 занятий)
				</td>
				<td class="table-row-item" aria-label="Индивидуальные">7880 руб. (4 занятия)</td>
			</tr>
		</table>

		<button @click="routerPush('/payment')" class="btn" style="width: 70%">Подробнее</button>
		<div class="information-message">
			<img src="../assets/info-logo.png" alt="info-logo" class="info-logo-img" />
			<p>В цену входят:</p>
			<ul>
				<li>занятия с преподавателями (один урок - 60 мин)</li>
				<li>доступ в виртуальный класс с учебными материалами</li>
				<li>задания для закрепления материалов каждого занятия</li>
			</ul>
		</div>
	</main>
</template>

<script>
import { useMeta } from 'vue-meta'
import { mapActions, useStore } from 'vuex'
import { computed } from 'vue'
export default {
	methods: {
		...mapActions('Backend', {
			GET_CONTENT: 'GET_CONTENT',
		}),
		routerPush(path) {
			window.scrollTo(0, 0)
			this.$router.push(path)
		},
	},
	name: 'appPagePrices',
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
	mounted() {
		this.GET_CONTENT(5)
	},
}
</script>

<style scoped>
.flex-column {
	align-items: center;
}
@media (max-width: 650px) {
	h1 {
		margin: 0 1rem;
	}
}
</style>
