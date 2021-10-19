<template>
    <header class="header flex-column">
        <h1>Название курса</h1>
    </header>
    <main class="main">
        <section class="course-about flex-row">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut blanditiis delectus, distinctio doloremque dolores earum facere laboriosam odit perferendis provident quae quas quidem, quis rem sequi sit sunt totam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque eum eveniet expedita facilis in incidunt ipsa mollitia necessitatibus nemo non possimus quasi, qui suscipit ullam veritatis vitae voluptatem voluptates!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at autem consequuntur cum distinctio dolorum earum hic minus sunt vero? Consequuntur cum illo incidunt, modi omnis optio porro quis rem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid error eveniet fugiat quaerat quo! Beatae, excepturi explicabo incidunt labore laudantium nostrum obcaecati officiis pariatur provident quaerat reprehenderit, similique vel, velit!
            </p>
            <img class="card-shadow" src="../assets/main-course.png" alt="course image">
        </section>

        <section class="table-course flex-column">
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
    export default {
        name: "appPageProgramsCourseId"
    }
</script>

<style scoped>
    .main {
        padding: 0 1rem;
    }
        .course-about p {
            width: 100%;
            flex-grow: 1;
        }
        .course-about img {
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
        }
            .course-about p {
                margin: 2rem 0 0 0;
            }
        .row-none {
            display: none;
        }
        .header h1 {
            margin: 0 1rem;
        }
    }
</style>