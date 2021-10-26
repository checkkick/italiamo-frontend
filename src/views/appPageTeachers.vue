<template>
    <header class="header flex-column">
        <h1>Преподаватели школы</h1>
    </header>
    <section class="flex-column">
        <div class="flex-row">
            <app-main-teachers
                    v-for="content in teachers"
                    :key="content.id"
                    :alt="content.alt"
                    :name="content.name"
                    :image="content.logo"
                    :href="content.href"
            ></app-main-teachers>
        </div>
    </section>
</template>

<script>
    import appMainTeachers from "../components/appCardsTeachers";
    import {mapActions, mapGetters} from "vuex";
    import { useMeta } from 'vue-meta'
    export default {
        setup() {
            useMeta({
                title: 'Преподаватели',
                description: 'В нашей школе Вас будут обучать преподаватели с большим опытом. Среди них так же есть носители языка, родившиеся и проживающие в Италии' +
                    ' и преподаватели крупнеших ВУЗов!',
                htmlAttrs: {lang: 'ru'},
                keywords: 'стоймость, занятия в группах,курсы итальянского, итальянский язык онлайн, учить итальянский язык по скайпу, Италиамо',
            })
        },
        name: "appPageTeachers",
        computed: {
            ...mapGetters('Backend', {
                teachers: 'TEACHERS',
            }),
        },
        methods: {
            ...mapActions('Backend', {
                GET_TEACHERS : 'GET_TEACHERS'
            })
        },
        mounted() {
            this.GET_TEACHERS()
        },
        components: {
            appMainTeachers
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