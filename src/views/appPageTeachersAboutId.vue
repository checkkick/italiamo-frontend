<template>
    <header class="header flex-column">
        <h1>{{ teacherContent.name }}</h1>
    </header>
    <main class="main">
        <section class="about-section">
            <img class="card-shadow" :src="teacherContent.logo" :alt="teacherContent.alt">
            <p class="about-text" v-html="teacherContent.description"></p>
        </section>
        <section class="input-section flex-row">
            <input class="input" type="text" placeholder="Имя">
            <input class="input" type="text" placeholder="Номер телефона">
            <button class="btn">Записаться в группу</button>
        </section>
        <p class="personal-data">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
    </main>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                teacherContent: {}
            }
        },
        computed: {
            ...mapGetters('Backend', {
                TEACHERS: 'TEACHERS',
            })
        },
        methods: {
            ...mapActions('Backend', {
                GET_TEACHERS : 'GET_TEACHERS'
            })
        },
        mounted() {
            this.GET_TEACHERS().then(() => {
                for (let content of this.TEACHERS) {
                    if (content.alt === this.$route.params.teacherId) {
                        this.teacherContent = content
                    }
                }
            })
        },
        name: "appPageTeachersAboutId"
    }
</script>

<style scoped>
    .main {
        padding: 0 2rem;
        margin-bottom: 3rem;
    }
        .about-section p {
            text-align: justify;
            max-width: 100%;
        }
        .about-section img {
            width: 20rem;
            height: 20rem;
            margin: 0 2rem 1rem 0;
            float: left;
        }
    .input-section {
        margin: 3rem -1rem 1rem -1rem;
        align-items: center;
    }
        .input-section .input {
            flex-grow: 1;
        }
        .input-section .btn {
            flex-grow: 1;
            margin: 0.5rem 1rem;
            padding: 1rem 1.5rem;
        }
    .personal-data {
        font-size: 1rem;
        max-width: 100%;
    }
    @media (max-width: 650px) {
        .about-section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .header h1 {
            margin: 0;
        }
        .main {
            padding: 0 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
            .about-section p {
                margin: 1rem 0 0 0;
                text-align: center;
                max-width: 100%;
            }
            .about-section img {
                width: auto;
                height: auto;
                margin: 1rem;
            }
        .personal-data {
            margin: 0;
        }
    }
</style>