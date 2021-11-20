<template>
    <header class="header flex-column">
        <h1>Отзывы о школе</h1>
        <h3>Все отзывы получены от реально обучающихся людей. Ссылки на профили некоторых из них, вы можете найти под отзывами!</h3>
    </header>
    <app-cards-comments
            v-for="comment in clients"
            :key="comment.id"
            :comment-img="comment.logo"
            :author-name="comment.name"
            :comment-text="comment.description"
    ></app-cards-comments>
</template>

<script>
import appCardsComments from "../components/appCardsComments";
import {mapActions, mapGetters} from "vuex";
import { useMeta } from 'vue-meta'

export default {
    setup() {
        useMeta({
            title: 'Отзывы о школе',
            description: 'Реальные отзывы наших учеников - Онлайн школа обучения итальянскому языку Italiamo - ☎ +7 (930) 030-99-22',
            keywords: 'курсы итальянского, итальянский язык онлайн, учить итальянский язык по скайпу, Италиамо',
            htmlAttrs: {lang: 'ru'}
        })
    },
    computed:{
        ...mapGetters('Backend', {
            clients: 'CLIENTS',
        })
    },
    methods: {
        ...mapActions('Backend', {
            GET_CLIENTS : 'GET_CLIENTS'
        })
    },
    mounted() {
        this.GET_CLIENTS()
    },
    name: "appPageComments",
    components: {
        appCardsComments
    }
}
</script>

<style>
    @media (max-width : 650px) {
        .header h3 {
            margin: 0;
        }
        .header h1 {
            margin: 0 0 1.5rem 0;
        }
    }
</style>