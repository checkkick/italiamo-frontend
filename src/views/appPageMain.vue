<template>
    <header class="header main-header">
        <h1>Онлайн школа итальянского языка</h1>
        <img src="../assets/logo-1.png" alt="изображение Italiamo">
        <button class="btn">Попробовать бесплатно</button>
    </header>
    <main class="main-section">
        <div class="flex-row">
            <template v-for="el in header" v-bind:key="el.id">
                <div class="flex-column" v-if="el.name=='slogan'"
                     v-html="el.text">
                </div>
                <img
                        v-bind:src="el.file[0].file" v-bind:alt="el.file[0].alt"
                        v-if="el.name=='slogan'"
                >
            </template>

        </div>
    </main>
    <article class="main-article">
        <h2>Почему нужно выбрать нас?</h2>
        <div class="flex-row">
            <div v-for="adv in advantages"
                 :key="adv.id">
                <img :src="adv.file[0].file" :alt="adv.file[0].alt" class="reasons-img">
                <h3>{{adv.name}}</h3>
                <p>{{adv.text}}</p>
            </div>
        </div>
    </article>
    <section class="flex-row">
        <div class="flex-column main-comments">
            <h2>Что пишут нашу ученики?</h2>
            <button class="btn">Заглянуть в виртуальный класс</button>
        </div>
        <div class="main-comments-animation">Отзывы с анимацией</div>
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
            <div class="flex-column">
                <button class="btn">Все программы и цены</button>
                <button class="btn">Записаться на открытый урок</button>
                <button class="btn">Пройти тестирование</button>
            </div>
        </div>


    </section>
    <section class="flex-column main-teachers">
        <h2>Наши преподаватели</h2>
        <div class="flex-row">
            <app-main-teachers
                    v-for="teacher in teachers"
                    :key="teacher.id"
                    :page-id="teacher.alt"
                    :name="teacher.name"
                    :image="teacher.logo"
            ></app-main-teachers>
        </div>
    </section>
    <section class="flex-row main-form-call">
        <div class="flex-column main-form-call-buttons">
            <button class="btn">Как проходят уроки в Italiamo?</button>
            <button class="btn">Как быстро можно выучить итальянский?</button>
            <button class="btn">Посмотреть видео о школе</button>
        </div>
        <form action="">
            <div class="flex-column">
                <h3>Заполните форму и мы свяжемся с Вами в ближайшее время!</h3>
                <input class="input" type="text" placeholder="Как к вам обращаться?">
                <input class="input" type="text" placeholder="Номер телефона или почта">
                <button class="btn">Отправить</button>
            </div>
        </form>
    </section>
    <section class="flex-column friend-company">
        <h2>Мы работаем с:</h2>
        <div class="flex-row">
            <div v-for="cowork in coworks"
                 class="friend-company-item"
                 :key="cowork.id">
                <img :src="cowork.file[0].file" :alt="cowork.file[0].alt">
                <h3>{{cowork.name}}</h3>
                <p>{{cowork.text}}</p>
            </div>
        </div>
    </section>
</template>

<script>
    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
    import appMainTeachers from "../components/appCardsTeachers";
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                swiperOptions: {
                    loop: true,
                    slidesPerView: 3,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                }
            }
        },
        components: {
            appMainTeachers,
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
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

        }
    }
</script>

<style>

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
    }

    .main-header img {
        width: 10rem;
    }

    .main-section {
        margin: 0;
        padding: 2rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .main-section img {
        border-radius: 10px;
        margin-bottom: 2rem;
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
        align-items: flex-start;
    }

    .main-article .flex-row div {
        margin: 0.5rem;
        max-width: 18rem;
    }

    .main-comments {
        padding: 2rem 0;
        max-width: 30rem;
    }

    .flex-row .main-comments-animation {
        background-color: white;
        width: 20rem;
        height: 10rem;
        margin: 2rem 2rem 0 2rem;
        text-align: center;
        padding-top: 4rem;
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

    .main-program .btn {
        margin: 2rem;
        padding: 1rem;
    }

    .main-form-call {
        background: url('../assets/main-form-call.jpg') no-repeat center / 100% 100%;
        box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
        align-items: normal;
    }

    .main-form-call .flex-column {
        max-width: 30rem;
        align-items: stretch;
        justify-content: space-between;
    }

    .friend-company img {
        max-width: 10rem;
        max-height: 5rem;
    }

    .friend-company h2 {
        align-self: center;
    }

    .friend-company-item {
        margin: 1rem;
        max-width: 25rem;
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

        .main-form-call-buttons {
            display: none;
        }
    }
</style>