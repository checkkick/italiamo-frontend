<template>
    <header class="header flex-column">
        <h1>Программы обучения</h1>
    </header>
    <main class="flex-row">
        <section class="card">
            <app-cards-programs
                    image="exam"
                    titleText="Курс подготовки к международным экзаменам"
                    aboutText="Описание курса"
            ></app-cards-programs>
        </section>
        <section class="card">
            <app-cards-programs
                    image="business"
                    titleText="Курс по итальянскому языку для бизнеса"
                    aboutText="Описание курса"
            ></app-cards-programs>
        </section>
        <section class="card">
            <app-cards-programs
                    image="tourism"
                    titleText="Курс по итальянскому для туризма"
                    aboutText="Описание курса"
            ></app-cards-programs>
        </section>
        <section class="card">
            <app-cards-programs
                    image="speak"
                    titleText="Разговорный курс по итальянскому"
                    aboutText="Описание курса"
            ></app-cards-programs>
        </section>
        <section class="card">
            <app-cards-programs
                    image="main-course"
                    titleText="Основной курс итальянского"
                    aboutText="Описание курса"
            ></app-cards-programs>
        </section>
        <section class="card">
            <app-cards-programs
                    image="teenage-course"
                    titleText="Курс итальянского для детей и подростков"
                    aboutText="Описание курса"
            ></app-cards-programs>
        </section>
    </main>
    <app-footer></app-footer>
</template>

<script>
    import appFooter from "./appFooter";
    import appCardsPrograms from "./appCardsPrograms";
    export default {
        name: "appPagePrograms",
        components: {
            appFooter, appCardsPrograms
        }
    }
</script>

<style scoped>
    .card {
        margin: 1.5rem;
        padding: 0;
    }
</style>