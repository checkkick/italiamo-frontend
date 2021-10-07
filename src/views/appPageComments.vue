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
import {mapGetters} from "vuex";

export default {
    computed:{
        ...mapGetters('Backend', {
            clients: 'CLIENTS',
        })
    },
    name: "appPageComments",
    components: {
        appCardsComments
    }
}
</script>

<style>

</style>