<template>
    <header class="header flex-column">
        <h1>Преподаватели школы</h1>
    </header>
    <section class="flex-column">
        <div class="flex-row">
            <app-main-teachers
                    v-for="content in this.$store.state.content"
                    :key="content.id"
                    :page-id="content.pageId"
                    :name="content.name"
                    :image="content.image"
            ></app-main-teachers>
        </div>
    </section>
</template>

<script>
    import appMainTeachers from "../components/appCardsTeachers";
    export default {
        name: "appPageTeachers",
        components: {
            appMainTeachers
        }
    }
</script>

<style scoped>

</style>