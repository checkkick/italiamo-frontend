<template>
    <header class="header main-header">
        <h1>Онлайн школа итальянского языка</h1>
        <img alt="изображение Italiamo" src="../assets/logo-1.png">
            <button v-on:click="freeLesson()" class="btn">Попробовать бесплатно</button>

    </header>

    <main class="main-section">
        <div class="flex-row">
            <template v-bind:key="el.id" v-for="el in header">
                <div class="flex-column" v-html="el.text"
                     v-if="el.name=='slogan'">
                </div>
                <img
                        v-bind:alt="el.file[0].alt" v-bind:src="el.file[0].file"
                        v-if="el.name=='slogan'"
                >
            </template>
        </div>
    </main>

    <article class="main-article">
        <h2>Почему нужно выбрать нас?</h2>
        <div class="flex-row">
            <div class="reasons"
                 :key="adv.id"
                 v-for="adv in advantages">
                <img :alt="adv.file[0].alt" :src="adv.file[0].file" class="reasons-img">
                <h3>{{adv.name}}</h3>
                <p>{{adv.text}}</p>
            </div>
        </div>
    </article>

    <section class="main-comments flex-column">
        <h2>Что пишут нашу ученики?</h2>
        <carousel :items-to-show="1.5">
            <slide :key="client.id"
                   v-for="client in clients">
                <app-main-clients
                        class="carousel__item"
                        :image="client.logo"
                        :name="client.name"
                        :page-id="client.alt"
                        :text="client.description">
                </app-main-clients>
            </slide>
        </carousel>
        <button class="btn" v-on:click="goClients">Посмотреть отзывы</button>
    </section>

    <section class="flex-column main-program">
        <h2>Программы обучения</h2>
        <div class="flex-row cards">
            <div class="card-course main">
                <p>Основной курс итальянского</p>
                <button class="btn">Подробнее</button>
            </div>
            <div class="card-course teenage">
                <p>Курс итальнянского для детей и подростков</p>
                <button class="btn">Подробнее</button>
            </div>
            <div class="course-buttons flex-column">
                <button class="btn">Все программы и цены</button>
                <button class="btn">Записаться на открытый урок</button>
                <button class="btn">Пройти тестирование</button>
            </div>
        </div>
    </section>

    <section class="flex-column main-teachers">
        <h2>Наши преподаватели</h2>
        <carousel :items-to-show="1.7">
            <slide v-for="teacher in teachers"
                   :key="teacher.id">
                    <app-main-teachers
                            class="carousel__item"
                            :image="teacher.logo"
                            :name="teacher.name"
                            :page-id="teacher.alt"
                    ></app-main-teachers>
            </slide>
        </carousel>
    </section>

    <section class="flex-row main-form-call">
        <div class="flex-column main-form-call-buttons">
            <div class="btn question">
                <p>Как проходят уроки в Italiamo?</p>
            </div>
            <div class="btn question">
                <p>Как быстро можно выучить итальянский?</p>
            </div>
            <div class="btn question">
                <p>Посмотреть видео о школе</p>
            </div>
        </div>
    </section>

    <section class="flex-column friend-company">
        <h2>Мы работаем с:</h2>
        <div class="flex-row">
            <div :key="cowork.id"
                 class="friend-company-item"
                 v-for="cowork in coworks">
                <img :alt="cowork.file[0].alt" :src="cowork.file[0].file">
                <h3>{{cowork.name}}</h3>
                <p>{{cowork.text}}</p>
            </div>
        </div>
    </section>
</template>

<script>
    import appMainTeachers from "../components/appCardsTeachers";
    import appMainClients from "../components/appCardsClients";
    import {mapGetters} from 'vuex'
    import 'vue3-carousel/dist/carousel.css';
    import {Carousel, Slide} from 'vue3-carousel';

    export default {
        components: {
            appMainTeachers,
            appMainClients,
            Carousel,
            Slide,
        },
        computed: {
            ...mapGetters('Backend', {
                header: 'HEADER',
                advantages: 'ADVANTAGES',
                clients: 'CLIENTS',
                teachers: 'TEACHERS',
                coworks: 'COWORKS',
            })
        },
        mounted() {
            this.$store.dispatch('Backend/GET_CONTENT', 1)
            this.$store.dispatch('Backend/GET_CLIENTS')
            this.$store.dispatch('Backend/GET_TEACHERS')
        },
        methods: {
            goClients() {
                this.$router.push('/comments')
            },
            goTeacher() {
                this.$router.push('/comments')
            },
            freeLesson() {

            }
        }
    }
</script>

<style>
    .reasons {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        height: 30rem;
        max-width: 18rem;
    }
    .reasons-img {
        max-width: 40%;
    }
    .main-header {
        text-align: center;
        padding: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(rgba(255, 255, 255, 0.712), rgba(255, 255, 255, 0.712)),
        url('../assets/Roma-10.jpg') no-repeat center / 100% 100%;
        box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
        background-size: cover;
    }
    .main-header .btn {
        margin: 2rem 0 0 0;
    }
    .main-header img {
        width: 10rem;
    }
    .main-section {
        margin: 0;
        padding: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .main-section img {
        border-radius: 10px;
        margin: 0 2rem 2rem 2rem;
        width: 300px;
    }

    .main-article {
        margin: 0;
        padding: 2rem 0;
        color: rgb(146, 89, 35);
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
    }

    .main-article h1 {
        font-size: 50px;
        line-height: 58px;
        margin: 1rem;
        font-weight: lighter;
        color: #000000;
    }
    .main-article .flex-row {
        justify-content: space-around;
        align-items: baseline;
    }
    .main-comments h2, .main-comments .btn {
        width: 70%;
        align-self: center;
    }
    .main-program {
        margin-top: 0;
        padding: 2rem 0;
        background-color: rgba(255, 252, 230, 0.7);
        box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
    }
    .card-course {
        display: flex;
        margin: 1rem;
        justify-content: flex-end;
        flex-direction: column;
        width: 20rem;
        height: 20rem;
    }
    .card-course:hover {
        -webkit-transition: all 0.3s ease;;
        -moz-transition: all 0.3s ease;;
        -o-transition: all 0.3s ease;;
        transition: all 0.3s ease;
        transform: scale(1.03);
        cursor: pointer;
    }
    .card-course p {
        background: rgba(255, 255, 255, 0.7);
        padding: 0.7rem;
    }
    .card-course.main {
        background: url('../assets/main-course.png') no-repeat center / 100% 100%;
        border-radius: 1rem;
    }

    .card-course.teenage {
        background: url('../assets/teenage-course.png') no-repeat center / 100% 100%;
        border-radius: 1rem;
    }
    .course-buttons {
        justify-content: space-between;
    }
    .main-program .btn {
        margin: 2rem;
        padding: 1rem;
    }
    .main-teachers h2 {
        align-self: center;
    }
    .main-form-call {
        background: url('../assets/main-form-call.jpg') no-repeat center / 100% 100%;
        box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
        align-items: normal;
    }
    .main-form-call-buttons {
        flex-grow: 1;
        align-items: stretch;
        justify-content: space-between;
    }
    .btn.question {
        position: relative;
        transition: all 0.3s;
        flex-grow: 1;
        max-width: none;
    }
        .btn.question p {
            max-width: none;
            font-family: 'Poiret One', serif, sans-serif;
            font-weight: normal;
            font-size: 20px;
            position: relative;
            letter-spacing: 0.08em;
        }
    .friend-company img {
        max-width: 10rem;
        max-height: 5rem;
    }
    .friend-company h2 {
        align-self: center;
    }

    .friend-company-item {
        margin: 0.5rem 1rem;
        min-width: 10rem;
        width: 25%;
        flex-grow: 1;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 20px;
        box-shadow: 1px 10px 20px 0 rgba(0, 0, 0, 0.3);
        align-self: normal;
    }

    .friend-company-item:hover {
        -webkit-transition: all 0.3s ease;;
        -moz-transition: all 0.3s ease;;
        -o-transition: all 0.3s ease;;
        transition: all 0.3s ease;
        transform: scale(1.03);
        background-color: #FFFCE5;
        cursor: pointer;
    }

    @media (max-width: 650px) {
        .main-header img {
            display: none;
        }
    }
</style>