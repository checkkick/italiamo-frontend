<template>
    <header class="header main-header">
        <h1>Онлайн школа итальянского языка</h1>
        <img class="italiamo-logo" alt="изображение Italiamo" src="../assets/logo-1.png">
        <button href="#contacts" v-smooth-scroll="{ updateHistory: false }" class="btn">Оставить заявку</button>
        <div class="flex-column contacts-text">
                <div class="telephones">
                    <h4><a href="tel:+78007001355">+7 (800) 700-13-55</a></h4>
                    <h4><a href="tel:+79300309922">+7 (930) 030-99-22</a></h4>
                    <h4><a href="mailto:info@italiamo.online">info@italiamo.online</a></h4>
                </div>
                <div class="about-us flex-row">
                    <a class="social-logo" href="https://www.instagram.com/italiamo.online/">
                        <img src="../assets/insta-logo.png" alt="instagram logo">
                    </a>
                    <a href="https://www.youtube.com/channel/UCqXjhRF6y0E-R2KnyuKK9IA">
                        <img class="social-logo" src="../assets/youtube-logo.png" alt="youtube logo">
                    </a>
                    <a href="whatsapp://send?phone=79300309922">
                        <img class="social-logo" src="../assets/whatsapp.png" alt="whatsapp logo">
                    </a>
                    <a href="https://t.me/joinchat/HgROd6tT_NsyZTJi">
                        <img class="social-logo" src="../assets/telegram.png" alt="telegram logo">
                    </a>
                    <a href="viber://add?number=79300309922">
                        <img class="social-logo" src="../assets/viber.png" alt="viber logo">
                    </a>
                </div>
            </div>
    </header>

    <main class="main-section">
        <div class="flex-column">
            <template v-bind:key="el.id" v-for="el in header">
                <div class="flex-column" v-html="el.text"
                     v-if="el.name=='slogan'">
                </div>
                <span class="image-description" v-html="el.text"
                     v-if="el.name=='slogan-2'">
                </span>
            </template>
            <YouTube
                v-if="ready >= 0"
                ref="youtube"
                class="video-player"
                width="100%"
                @ready="OnReady(1)"
                height="250px"
                src="https://www.youtube.com/watch?v=uHl1b9xAIS4" />     
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
                <span v-html="adv.text"></span>
            </div>
        </div>
        <div class="article-videos flex-row">
            <YouTube
                v-if="ready >= 1"
                ref="youtube"
                class="small-video-player"
                width="100%"
                @ready="OnReady(2)"
                height="200px"
                src="https://www.youtube.com/watch?v=fmzK9DEybZ4&t=18s" />
            <YouTube
                v-if="ready >= 2"
                ref="youtube"
                class="small-video-player"
                width="100%"
                @ready="OnReady(3)"
                height="200px"
                src="https://www.youtube.com/watch?v=WlKgsk7gELY" />
            <YouTube
                v-if="ready >= 3"
                ref="youtube"
                class="small-video-player"
                width="100%"
                @ready="OnReady(4)"
                height="200px"
                src="https://www.youtube.com/watch?v=xClzRb00YYg" />
        </div>
    </article>

    <section class="main-comments flex-column">
        <h2>Что пишут нашу ученики?</h2>
        <carousel :breakpoints="breakpointsComments" :settings="settings">
            <slide :key="index"
                   v-for="(client, index) in clients" >
                <app-main-clients
                        :image="client.logo"
                        :name="client.name"
                        :page-id="client.alt"
                        :text="client.description"
                        @click="routerPush('comments')">
                </app-main-clients>
            </slide>
            <template #addons="{ slidesCount }">
                <Navigation class="carousel-navigation" v-if="slidesCount > 1" />
                <Pagination />
            </template>
        </carousel>
        <button class="btn" @click="routerPush('comments')">Посмотреть отзывы</button>
    </section>

    <section class="flex-column main-program">
        <h2>Программы обучения</h2>

        <carousel :breakpoints="breakpointsTeacher" :settings="settings">
            <slide :key="program.id"
                   v-for="program in programs">
                <div class="card-course"
                     :style="{background: `url(${program.img}) no-repeat center / cover`}">
                    <p>{{ program.name }}</p>
                    <button @click="routerPush(`programs/${program.href}`)" class="btn">Подробнее</button>
                </div>
            </slide>
            <template #addons="{ slidesCount }">
                <Navigation class="carousel-navigation" v-if="slidesCount > 1" />
                <Pagination />
            </template>
        </carousel>

        <div class="course-buttons flex-row">
            <button @click="routerPush('prices')" class="btn">Узнать цены</button>
            <button class="btn" href="#contacts" v-smooth-scroll="{ updateHistory: false }">Оставить заявку</button>
        </div>
    </section>

    <section class="flex-column main-teachers">
        <h2>Наши преподаватели</h2>
        <carousel :settings="settings" :breakpoints="breakpointsTeacher">
            <slide v-for="teacher in teachers"
                   :key="teacher.id">
                    <app-main-teachers
                            :image="teacher.logo"
                            :name="teacher.name"
                            :alt="teacher.alt"
                            :href="teacher.href"
                    ></app-main-teachers>
            </slide>
            <template #addons="{ slidesCount }">
                <Navigation class="carousel-navigation" v-if="slidesCount > 1" />
                <Pagination />
            </template>
        </carousel>
    </section>

    <section class="flex-row main-form-call">
        <vue-collapsible-panel-group base-color="#ffffff" accordion>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <span style="font-weight: bolder">Как проходят уроки в Italiamo?</span>
                </template>
                <template #content>
                    Прежде всего, преподаватель определяет ваш уровень владения языком и прикрепляет к соответствующей учебной группе. На вашу почту приходит письмо с подробной информацией и ссылками на учебный класс Google и конференцию в Zoom.
                    <ul><li>В назначенное время вы подключаетесь к конференции. </li><li> В начале урока происходит повторение материала, изученного на предыдущем занятии. </li><li> Преподаватель поочередно спрашивает студентов, вовлекает в общий диалог, уточняет, все ли усвоили пройденное в полном объеме. </li><li> Далее следует проверка домашнего задания. </li><li> При изучении нового материала преподаватель включает демонстрацию экрана. </li><li> При необходимости пишет на виртуальной доске или в чат zoom новые слова и выражения. </li><li> Все участники конференции видят, что происходит на экране. </li><li> Это может быть открытый учебник для выполнения упражнений. </li><li> Иногда это учебный аудио или видео файл. </li><li> На уроках по итальянскому часто слушают речь в записи для выполнения упражнений по аудированию. В коллекции преподавателей большое количество коротеньких учебных фильмов на итальянском, направленных на изучение лексики. </li><li> При необходимости вы всегда можете задать вопрос преподавателю. </li></ul>
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <span style="font-weight: bolder">Как быстро можно выучить итальянский?</span>
                </template>
                <template #content>
                    Самый частый вопрос от людей, нацеленных на результат и привыкших все планировать заранее.
                    <br>Изучение итальянского языка настолько тонкий и индивидуальный процесс, что дать точную оценку овладения Вами итальянским языком не сможет никто. Тем более, если вы только начинаете его изучать. Но мы все же попробуем разобраться, что может повлиять на скорость изучения итальянского. На какие факторы стоит обратить внимание в первую очередь. Определить, за какое время можно выучить итальянский язык c нуля, возможно, если опираться на несколько ключевых факторов:
                    <br>Несколько факторов влияет на то, как быстро вы изучите итальянский язык с нуля:
                    <br><br><span style="font-weight: bolder">1. Время и частота уроков.</span><br>
                    В случае, если вы уделяете курсам по итальянскому не более 2 часов в неделю, то закрепление знаний и усвоение информации будет идти крайне медленно. Изучение одного уровня языка займет 6 месяцев или больше, а для достижения среднего уровня (Intermediate) итальянского языка с нуля, потребуется как минимум 2 года.
                    <br>Оптимальный вариант – не менее 2 часов уроков ежедневно, при этом вы можете чередовать учебные занятия и работу дома.
                    <br><br><span style="font-weight: bolder">2. Выбранная форма занятий.</span><br>
                    Вы можете заниматься в группе, индивидуально с учителем или предпочесть самообучение. Лучший результат дают занятия с педагогом, способным качественно объяснить материал. При обучении сначала мы получаем знания. Информацию о грамматике, новых словах и речевых конструкция. Затем учимся применять эти знания. Только когда умение доведено до автоматизма, оно превращается в навык.
                    <br>Лишь на этом этапе можно говорить о действительно хорошим и глубокому знании языка.
                    <br><br><span style="font-weight: bolder">3. Цель.</span><br>
                    Для поездки в отпуск или на работу? Возможно, вы переезжает в Италию на постоянно место жительства?
                    <br>В первом случае начального разговорного уровня владения итальянским будет достаточно, то для более серьезных целей потребуется углубленное изучение итальянского и больший объем знаний – следовательно, и сроки будут больше.
                    <br>В зависимости от цели изучения итальянского языка в нашей школе предусмотрено несколько курсов по итальянскому языку.
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <span style="font-weight: bolder">Почему люди выбирают Italiamo?</span>
                </template>
                <template #content>
                    В нашей школе Вас ждет не сухое обучение, как в большинстве школ, оживленное общение с носителями языка и людьми, живущими в Италии!
                    <br>У нас Вы сможете не только учить итальянский язык, но узнавать много интересного о жизни и культуре Италии.
                    <br>Не покидая родной город, вы сможете прикоснуться к прекрасной Италии. Сердце любой страны – это язык. Итальянский – один из самых красивых и мелодичных. Вместе с нашими преподавателями путь к сердцу будет захватывающим и увлекательным. Мы против рутины и затертых учебников.
                    <ul><li>У нас вы можете посетить урок по итальянскому языку бесплатно в гостевом режиме. </li><li> В нашей школе работают преподаватели-практики из лучших языковых школ и ВУЗов. </li><li> Вы можете заниматься один на один или в минигруппе до 4-х человек. </li><li> Место занятий не имеет значения, обеспечьте себе только спокойную обстановку и хороший Интернет. </li><li> Учебные материалы являются бесплатными и подбираются под ваш уровень. </li><li> Пропустить занятие – не страшно. Запись урока будет отправлена вам на почту. </li><li> Наличие уроков для детей и подростков. </li><li> Мы объединили лучшие традиции языковых школ и обаяние наших преподавателей, чтобы сделать итальянский вашей страстью. </li><li> Наши курсы по итальянскому созданы не только для тех, кто расширяет свои познания в языке, но и для тех, кто хочет изучить итальянский язык с нуля. </li></ul>
                    Именно у нас вы имеете возможность заниматься сразу с двумя преподавателями одновременно: русскоязычными, с высшим лингвистическим образованием, конечно же, и с опытными профессиональными носителями языка. Мы готовы предоставить вам возможность, не выходя из места проживания или офиса, изучить общелитературный язык, приобрести качественные и профессиональные знания, а так же познакомиться ближе и открыть для себя «новую», возможно, незнакомую вам - Италию.
                </template>
            </vue-collapsible-panel>
        </vue-collapsible-panel-group>
    </section>

    <section class="flex-column friend-company">
        <h2>Мы работаем с:</h2>
        <div class="flex-row">
            <a :key="cowork.id"
               :href="cowork.text.split(' /')[1]"
               class="friend-company-item"
               v-for="cowork in coworks">
                <img :alt="cowork.file[0].alt" :src="cowork.file[0].file">
                <h3>{{cowork.name}}</h3>
                <span v-html="cowork.text.split(' /')[0]"></span>
            </a>
        </div>
    </section>
</template>

<script>
    import appMainTeachers from "../components/appCardsTeachers";
    import appMainClients from "../components/appCardsClients";
    import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';
    import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel'
    import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
    import 'vue3-carousel/dist/carousel.css'
    import { mapActions, mapGetters, useStore } from 'vuex'
    import { computed } from 'vue'
    import { useMeta } from 'vue-meta'
    import YouTube from 'vue3-youtube'


    export default {
        data() {
            return {
                ready: 0,
                settings: {
                    autoplay: 3500,
                    wrapAround: true
                },
                breakpointsTeacher: {
                    // 700 and up
                    0: {
                        itemsToShow: 1.3,
                        snapAlign: 'center',
                    },
                    // 840 and up
                    840: {
                        itemsToShow: 2.5,
                        snapAlign: 'center',
                    },
                    // 1150 and up
                    1150: {
                        itemsToShow: 3.5,
                        snapAlign: 'center',
                    },
                    // 1480 and up
                    1480: {
                        itemsToShow: 4.5,
                        snapAlign: 'center',
                    },
                },
                breakpointsComments: {
                    // 0 and up
                    0: {
                        itemsToShow: 1.3,
                        snapAlign: 'center',
                    },
                    // 800 and up
                    800: {
                        itemsToShow: 1.5,
                        snapAlign: 'center',
                    },
                    // 1150 and up
                    1150: {
                        itemsToShow: 2.5,
                        snapAlign: 'center',
                    },
                }
            }
        },
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
        components: {
            appMainTeachers,
            appMainClients,
            Carousel,
            Slide,
            Navigation,
            Pagination,
            VueCollapsiblePanelGroup,
            VueCollapsiblePanel,
            YouTube
        },
        computed: {
            ...mapGetters('Backend', {
                header: 'HEADER',
                advantages: 'ADVANTAGES',
                clients: 'CLIENTS',
                teachers: 'TEACHERS',
                coworks: 'COWORKS',
                programs: 'PROGRAMS',
            })
        },
        methods: {
            OnReady(num) {
                this.ready = num
            },
            ...mapActions('Backend', {
                GET_CONTENT : 'GET_CONTENT',
                GET_CLIENTS : 'GET_CLIENTS',
                GET_TEACHERS : 'GET_TEACHERS',
                GET_PROGRAMS : 'GET_PROGRAMS'
            }),
            routerPush(path) {
                window.scrollTo(0,0)
                this.$router.push(`/${path}`)
            },
            freeLesson() {
                window.scrollTo(0,0)
            },
        },
        mounted() {
            this.GET_CONTENT(1)
            this.GET_CLIENTS()
            this.GET_TEACHERS()
            this.GET_PROGRAMS()
        }
    }
</script>

<style>
    .flex-column.contacts-text {
        margin: 1rem 0 0 0;
        justify-content: space-between;
    }
    .telephones h4 {
        margin: 0;
    }
    .telephones h4 a {
        font-weight: bold;
    }
    .about-us h4 {
        font-size: 1.2rem;
        margin: 0.5rem;
    }
    .social-logo {
        display: flex;
        align-items: center;
        cursor: pointer;
        width: 100%;
        max-width: 3rem;
        max-height: 3rem;
        margin: 1rem 2rem;
    }
    .about-us img {
        max-width: 3rem;
        max-height: 3rem;
        width: 100%;
    }
    .about-us .flex-row {
        justify-content: center;
    }
    .small-video-player {
        flex-grow: 1;
        max-width: 30rem;
        margin: 1rem;
    }
    .video-player {
        width: 30rem;
    }
    .carousel {
        margin: 0 1.5rem;
        cursor: grab;
    }
    .carousel__prev, .carousel__next {
        background-color: rgba(215, 177, 136, 0.85);
        width: 2rem;
        height: 2rem;
        top: 45%;
    }
    .carousel__pagination {
        align-items: center;
        padding: 0;
        margin: 0;
    }
    .carousel__pagination-button {
        background-color: rgba(128, 128, 128, 0.55);
    }
    .carousel__pagination-button--active {
        background-color: rgba(215, 177, 136, 0.85);;
    }
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
        padding: 4rem 2rem 2rem 2rem;
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
            margin: 0 2rem;
            width: 300px;
        }
        .main-section .flex-column {
            margin: 0;
            align-items: center;
        }
    .image-description p {
        font-size: 1.1rem;
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
    .main-comments {
        margin: 0;
    }
        .main-comments h2, .main-comments .btn {
            margin: 2rem 0;
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
        justify-content: center;
        flex-direction: column;
        width: 20rem;
        height: 20rem;
        border-radius: 10px;
        box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.2);
    }
        .card-course .btn {
            margin: 30% 1rem 0 1rem;
        }
        .card-course p {
            background: rgba(255, 255, 255, 0.7);
            padding: 0.7rem;
        }
    .course-buttons {
        justify-content: space-evenly;
        align-items: center;
        margin: 1rem 0 0 0;
    }
        .course-buttons .btn {
            margin: 1rem;
            width: 20rem;
            flex-grow: 1;
            max-width: none;
        }
    .main-teachers h2 {
        align-self: center;
    }
    .main-form-call {
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
        align-items: normal;
    }
    .vcpg {
        background-color: rgba(255, 255, 255, 0.9);
    }
    .vcp.vcp--expandable {
        overflow-x: hidden;
        padding: 1rem 2rem;
        text-align: left;
    }
    .vcp__header-title {
        font-size: 26px;
        justify-content: space-around;
    }
    .vcp__body {
        font-size: 22px;
    }
    .main-form-call-buttons {
        flex-grow: 1;
        align-items: stretch;
        justify-content: space-between;
    }
    .btn.question {
        position: relative;
        transition: all .7s;
        border-radius: 98px;
        flex-grow: 1;
        max-width: none;
        padding: 1rem;
    }
    .btn.question:hover {
        cursor: pointer;
        background: rgba(215, 177, 136, 0.98);
    }
    .btn.question.active {
        background: rgba(215, 177, 136, 0.98);
        border-radius: 44px 44px 0 0;
    }
        .btn.question p {
            max-width: none;
            font-family: 'Poiret One', serif, sans-serif;
            font-weight: normal;
            font-size: 20px;
            position: relative;
            letter-spacing: 0.08em;
        }
    .question-content {
        position: absolute;
        z-index: 2;
        top: 5.5rem;
        left: 0;
        text-align: left;
        border-radius: 0 0 44px 44px;
        padding: 0 2rem 1rem 2rem;
        background: rgba(233, 187, 145, 0.98);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
        .question-content p {
            text-align: left;
        }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            opacity: 0;
            transform: translateY(-6rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .friend-company {
        margin: 2rem 0 0 0;
    }
        .friend-company img {
            max-width: 10rem;
            max-height: 5rem;
        }
        .friend-company h2 {
        align-self: center;
    }

    .friend-company-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
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
        .article-videos {
            margin-top: 2rem;
        }
        .small-video-player {
            max-width: 30rem;
            margin: 0 1rem;
        }
        .video-player {
            width: 20rem;
        }
        .carousel {
            margin: 0;
        }
        .carousel-navigation {
            display: none;
        }
        .italiamo-logo {
            display: none;
        }
        .social-logo {
            display: flex;
            align-items: center;
            cursor: pointer;
            width: 100%;
            max-width: 2rem;
            max-height: 2rem;
            margin: 1rem;
        }
        .about-us img {
            max-width: 2rem;
            max-height: 2rem;
            width: 100%;
        }
        .main-header {
            padding: 4rem 1rem 1rem 1rem;
        }
        .main-section img {
            width: 100%;
            margin: 0 2rem;
        }
        .vcpg {
            background-color: rgba(255, 255, 255, 0.9);
        }
        .vcpg[data-v-63943e43] .vcp__header {
            height: auto;
        }
        .vcp.vcp--expandable {
            padding: 0;
            text-align: left;
        }
        .vcp__header-title {
            font-size: 22px;
            justify-content: space-between;
        }
        .vcp__body {
            font-size: 20px;
        }
        .reasons {
            height: 25rem;
        }
    }
</style>