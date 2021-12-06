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
import {mapActions, mapGetters, useStore} from "vuex";
import { useMeta } from 'vue-meta'
import {computed} from "vue";

export default {
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
    computed:{
        ...mapGetters('Backend', {
            clients: 'CLIENTS',
        })
    },
    methods: {
        ...mapActions('Backend', {
            GET_CLIENTS : 'GET_CLIENTS',
            GET_CONTENT : 'GET_CONTENT',
        })
    },
    mounted() {
        this.GET_CLIENTS()
        this.GET_CONTENT(7)
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