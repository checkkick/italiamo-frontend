<template>
    <header class="header flex-column">
        <h1>Программы обучения</h1>
    </header>
    <main class="flex-row">
        <app-cards-programs 
            v-for="program in programs" 
            :key="program.id"
            :href="program.href"
            :image="program.img"
            :titleText="program.name"
            :aboutText="program.description"
        ></app-cards-programs>
    </main>
</template>

<script>
    import appCardsPrograms from "../components/appCardsPrograms";
    import {mapActions, mapGetters} from "vuex";

    export default {
        computed:{
            ...mapGetters('Backend', {
                programs: 'PROGRAMS',
            })
        },
        methods: {
            ...mapActions('Backend', {
                GET_PROGRAMS : 'GET_PROGRAMS'
            })
        },
        mounted() {
            this.GET_PROGRAMS()
        },
        name: "appPagePrograms",
        components: {
            appCardsPrograms
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