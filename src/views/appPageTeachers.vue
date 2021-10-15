<template>
    <header class="header flex-column">
        <h1>Преподаватели школы</h1>
    </header>
    <section class="flex-column">
        <div class="flex-row">
            <app-main-teachers
                    v-for="content in teachers"
                    :key="content.id"
                    :page-id="content.alt"
                    :name="content.name"
                    :image="content.logo"
            ></app-main-teachers>
        </div>
    </section>
</template>

<script>
    import appMainTeachers from "../components/appCardsTeachers";
    import {mapGetters} from "vuex";
    export default {
        name: "appPageTeachers",
        computed: {
            ...mapGetters('Backend', {
                teachers: 'TEACHERS',
            }),
        },

        components: {
            appMainTeachers
        },
        mounted() {
            this.$store.dispatch('Backend/GET_TEACHERS')
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