<template>
    <header class="header flex-column">
        <h1>Новости Италии</h1>
    </header>
    <main>
        <app-cards-news
                v-for="news in NEWS"
                :key="news.id"
                :dateNews="news.dateNews"
                :titleNews="news.titleNews"
                :summary="news.summary"
                :textNews="news.textNews"
                :author="news.author"
        ></app-cards-news>
    </main>
</template>

<script>
    import appCardsNews from "../components/appCardsNews";
    import {mapGetters} from "vuex";
    export default {
        computed:{
            ...mapGetters([
                'NEWS'
            ])
        },
        name: "appPageNews",
        components: {
            appCardsNews
        }
    }
</script>

<style scoped>

</style>