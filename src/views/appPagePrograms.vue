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
                programs: 'PROGRAMS',
            })
        },
        methods: {
            ...mapActions('Backend', {
                GET_PROGRAMS : 'GET_PROGRAMS',
                GET_CONTENT : 'GET_CONTENT',
            })
        },
        mounted() {
            this.GET_CONTENT(3)
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