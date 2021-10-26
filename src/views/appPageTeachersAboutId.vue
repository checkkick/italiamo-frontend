<template>
    <header class="header flex-column">
        <h1>{{ teacherContent.name }}</h1>
    </header>
    <main class="main">
        <section class="about-section">
            <img class="card-shadow" :src="teacherContent.logo" :alt="teacherContent.alt">
            <p v-html="teacherContent.description"></p>
        </section>
        <section class="input-section flex-row">
            <input class="input"
                   type="text"
                   v-model="inputName"
                   placeholder="Имя">
            <input class="input"
                   type="tel"
                   placeholder="+7 (___) ___-__-__"
                   v-model="inputTelephone"
                   v-mask="'+7 (###) ###-##-##'">
            <button class="btn" @click="sendPostContacts">Записаться в группу</button>
        </section>
        <p class="personal-data">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
    </main>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {mask} from 'vue-the-mask'
    import axios from "axios";

    export default {
        data() {
            return {
                inputName: '',
                inputTelephone: '',
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
            }),
            sendPostContacts() {
                if(this.inputTelephone.length === 18 && this.inputName.length !== 0) {
                    axios.post('https://italiamo-backend.bexram.online/forms/', {
                        telephone: this.inputTelephone,
                        name: this.inputName,
                        other: this.teacherContent.alt,
                    })
                        .then((response) => {
                            console.log(response)
                            this.inputTelephone = ''
                            this.inputName = ''
                        })
                        .catch((error) => {console.log(error)})
                }
                else {
                    alert('Проверьте правильность ввода всех полей!')
                }
            }
        },
        mounted() {
            this.GET_TEACHERS().then(() => {
                for (let content of this.TEACHERS) {
                    if (content.href === this.$route.params.teacherId) {
                        this.teacherContent = content
                    }
                }
            })
        },
        directives: {mask},
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
            max-width: 20rem;
            max-height: 20rem;
            margin: 0 2rem 1rem 0;
            float: left;
        }
    .input-section {
        width: 100%;
        margin: 3rem -1rem 1rem -1rem;
        align-items: center;
    }
        .input-section .input {
            width: 30%;
            flex-grow: 1;
        }
        .input-section .btn {
            flex-grow: 1;
            margin: 0.5rem 1rem;
            max-width: none;
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
            .about-section img {
                width: auto;
                height: auto;
                margin: 1rem;
            }
        .input-section {
            margin-top: 0;
        }    
        .personal-data {
            margin: 0;
        }
    }
</style>