<template>
    <header class="header flex-column">
        <h1>Отзывы о школе</h1>
        <h3>Все отзывы получены от реально обучающихся людей. Ссылки на профили некоторых из них, вы можете найти под отзывами!</h3>
    </header>
    <app-cards-comments
            v-for="comment in COMMENTS"
            :key="comment.id"
            :comment-img="comment.commentImg"
            :author-name="comment.authorName"
            :author-city="comment.authorCity"
            :comment-text="comment.commentText"
    ></app-cards-comments>
</template>

<script>
import appCardsComments from "../components/appCardsComments";
import {mapGetters} from "vuex";

export default {
    computed:{
        ...mapGetters([
            'COMMENTS'
        ])
    },
    name: "appPageComments",
    components: {
        appCardsComments
    }
}
</script>

<style>

</style>