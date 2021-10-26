<template>
    <header class="header flex-column">
        <h1>{{ programContent.name }}</h1>
    </header>
    <main class="main">
        <section class="course-about flex-row card-shadow">
            <p>{{ programContent.description }}</p>
            <img class="card-shadow" :src="programContent.img" :alt="programContent.name">
        </section>

        <section style="display: none" class="table-course flex-column">
            <table class="table">
                <thead>
                    <tr  class="table-title">
                        <th class="table-title-item">Уровень</th>
                        <th class="table-title-item"></th>
                        <th class="table-title-item"></th>
                        <th class="table-title-item">Преподаватель</th>
                        <th class="table-title-item"></th>
                    </tr>
                </thead>

                <!-- Здесь формируется таблица в цикле, где нет контента оставить поле пустым,
                     но поле обязательно должно быть -->
                <tr class="table-row-1">
                    <td class="table-row-item" aria-label="Уровень">А1 с нуля</td>
                    <td class="table-row-item">понедельник 8.00-9.00</td>
                    <td class="table-row-item">четверг 8.00-9.00</td>
                    <td class="table-row-item" aria-label="Преподаватель">Екатерина Крамкова</td>
                    <td class="table-row-item">
                        <button class="btn">Выбрать группу</button>
                    </td>
                </tr>
                <tr class="table-row-2">
                    <td class="table-row-item" aria-label="Уровень">А1 с нуля</td>
                    <td class="table-row-item">понедельник 16.00-17.00</td>
                    <td class="table-row-item">четверг 16.00-17.00</td>
                    <td class="table-row-item" aria-label="Преподаватель">Екатерина Крамкова</td>
                    <td class="table-row-item">
                        <button class="btn">Выбрать группу</button>
                    </td>
                </tr>
                <tr class="table-row-1">
                    <td class="table-row-item" aria-label="Уровень">А1 группа выходного дня</td>
                    <!-- в строчках времени занятия проверка на наличия контента,
                         чтобы при просмотре на мобильном не было пустых строк -->
                    <td class="table-row-item" :class="false ? 'row-none' : ''">воскресенье 14.30-16.00</td>
                    <td class="table-row-item" :class="true ? 'row-none' : ''"></td>
                    <td class="table-row-item" aria-label="Преподаватель">Екатерина Крамкова</td>
                    <td class="table-row-item">
                        <button class="btn">Выбрать группу</button>
                    </td>
                </tr>
            </table>
        </section>
    </main>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        data() {
            return {
                programContent: {}
            }
        },
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
            this.GET_PROGRAMS().then(() => {
                for (let content of this.programs) {
                    if (content.href == this.$route.params.courseId) {
                        this.programContent = content
                    }
                }
            })
        },
        name: "appPageProgramsCourseId"
    }
</script>

<style scoped>
    .header h1 {
        margin: 0 1rem;
    }
    .main {
        padding: 0 1rem;
    }
    .course-about {
        flex-direction: row-reverse;
        flex-wrap: nowrap;
     }
        .course-about p {
            width: 100%;
            flex-grow: 1;
            margin: 2rem;
        }
        .course-about img {
            margin: 2rem;
            width: 100%;
            max-width: 25rem;
            max-height: 25rem;
        }
    .table-course {
        align-items: center;
    }
        .table-course .table {
            width: 100%;
        }
        .table-row-item .btn {

            margin: 0;
        }
    .row-none {
        display: block;
    }
    @media (max-width : 650px) {
        .course-about {
            flex-direction: column-reverse;
            padding: 1.5rem 1rem;
        }
            .course-about p {
                margin: 0;
            }
            .course-about img {
                align-self: center;
                margin: 0 0 1rem 0;
            }
        .row-none {
            display: none;
        }
    }
</style>