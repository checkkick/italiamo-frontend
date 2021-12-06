<template>
    <header class="header flex-column">
        <h1>Новости Италии</h1>
    </header>
    <main>
        <app-cards-news
                v-for="news in NEWS"
                :key="news.id"
                :news-img="news.img"
                :dateNews="new Date(news.published).toLocaleString()"
                :titleNews="news.name"
                :summary="news.mini_description"
                :textNews="news.description"
                :author="news.author"
        ></app-cards-news>
    </main>
</template>

<script>
    import appCardsNews from "../components/appCardsNews";
    import {mapGetters, mapActions, useStore} from "vuex";
    import { useMeta } from 'vue-meta'
    import {computed} from "vue";

    export default {
        computed:{
            ...mapGetters('Backend', {
                NEWS: 'NEWS'
            })
        },
        setup() {
            const store = useStore()
            const computedMeta = computed(() => ({
                title:
                    store.getters['Backend/CONTENT'].length > 0
                        ? store.getters['Backend/CONTENT'][0].title
                        : 'Онлайн-школа итальянского языка Италиамо',
                description:
                    store.getters['Backend/CONTENT'].length > 0
                        ? store.getters['Backend/CONTENT'][0].description
                        : 'Онлайн-школа итальянского языка Италиамо',
                keywords:
                    store.getters['Backend/CONTENT'].length > 0
                        ? store.getters['Backend/CONTENT'][0].keywords
                        : 'Италиамо, онлайн-школа, итальянский',
            }))
            useMeta(computedMeta)
        },
        methods: {
            ...mapActions('Backend', {
                GET_NEWS : 'GET_NEWS',
                GET_CONTENT : 'GET_CONTENT',
            })
        },
        mounted() {
            this.GET_CONTENT(2)
            this.GET_NEWS()
        },
        name: "appPageNews",
        components: {
            appCardsNews
        }
    }
</script>

<style scoped>
    @media (max-width: 650px) {
        h1 {
            margin: 0;
        }
    }
</style>