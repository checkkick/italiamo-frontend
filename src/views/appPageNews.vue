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
    import {mapGetters, mapActions} from "vuex";
    import { useMeta } from 'vue-meta'
    export default {
        computed:{
            ...mapGetters('Backend', {
                NEWS: 'NEWS',
            })
        },
        setup() {
            useMeta({
                title: 'Новости',
                description: 'Новости и интересные факты о Италии - Онлайн школа обучения итальянскому языку Italiamo - ☎ +7 (930) 030-99-22 ',
                keywords: 'культура италии, новости италии,курсы итальянского, итальянский язык онлайн, учить итальянский язык по скайпу, Италиамо',
                htmlAttrs: {lang: 'ru'}
            })
        },
        methods: {
            ...mapActions('Backend', {
                GET_NEWS : 'GET_NEWS'
            })
        },
        mounted() {
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