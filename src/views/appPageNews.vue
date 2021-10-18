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
    import {mapGetters} from "vuex";
    export default {
        computed:{
            ...mapGetters('Backend', {
                NEWS: 'NEWS',
            })
        },
        name: "appPageNews",
        components: {
            appCardsNews
        },
        mounted() {
            this.$store.dispatch('Backend/GET_NEWS').then(() => {
                console.log(this.NEWS)
            })
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