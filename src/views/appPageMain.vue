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
    import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel'
    import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

    export default {
        data() {
            return {
                showQuestion: 0,
            }
        },
        components: {
            appMainTeachers,
            appMainClients,
            Carousel,
            Slide,
            VueCollapsiblePanelGroup,
            VueCollapsiblePanel
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
            showQuestionClick(question) {
                if (this.showQuestion !== 0) {
                    this.showQuestion = 0
                }
                else {
                    this.showQuestion = question
                }
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
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
        align-items: normal;
    }
    .vcpg {
        background-color: rgba(255, 255, 255, 0.9);
    }
    .vcp.vcp--expandable {
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
        .main-section img {
            width: 100%;
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
    }
</style>