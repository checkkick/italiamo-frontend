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

    export default {
        computed:{
            ...mapGetters('Backend', {
                NEWS: 'NEWS',
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