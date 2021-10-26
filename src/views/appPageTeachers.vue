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
    export default {
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