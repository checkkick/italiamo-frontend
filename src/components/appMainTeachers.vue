<template>
    <div class="flex-column teacher-card">
        <img :src="teacherImage" :alt="pageId">
        <p>{{ name }}</p>
        <button class="btn">Познакомиться</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            pageId: String,
            image: String
        },
        computed: {
            teacherImage() {
                if (!this.image) {
                    return
                }
                const fileName = this.image.toLowerCase();
                return require(`../img/${fileName}.png`);
            }
        }
    }
</script>

<style scoped>
    .teacher-card {
        margin: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 18rem;
        background-color: white;
        border-radius: 20px;
        box-shadow: 8px 15px 30px 0 rgba(0,0,0,0.6);
    }

    .teacher-card img {
        margin: 2rem;
        border-radius: 10px;
        width: 206px;
        height: 191px;
    }
</style>