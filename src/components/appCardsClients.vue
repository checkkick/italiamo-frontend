<template>
    <div class="flex-column teacher-card">
        <img :src="image" :alt="pageId">
        <p>{{ name }}</p>
        <p class="text">
            <span v-html="text"></span>
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            pageId: String,
            image: String,
            text: String
        },
    }
</script>

<style scoped>
    .text {
        max-height: 6rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .teacher-card {
        cursor: pointer;
        padding: 1rem;
        margin: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-grow: 1;
        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 7px 10px 0 rgba(0,0,0,0.3);
    }
    .teacher-card img {
        object-fit: cover;
        object-position: 50% 50%;
        margin: 2rem;
        border-radius: 10px;
        width: 9rem;
        height: 9rem;
    }
</style>